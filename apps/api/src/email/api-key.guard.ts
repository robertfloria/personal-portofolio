import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { Request } from 'express';
import { timingSafeEqual } from 'crypto';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private readonly configService: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const headerValue = request.headers['x-api-key'];
    const apiKey = Array.isArray(headerValue) ? headerValue[0] : headerValue;

    const secret = this.configService.get<string>('EMAIL_API_SECRET');

    if (!apiKey || !secret) {
      throw new UnauthorizedException('Invalid or missing API key');
    }

    const secretBuffer = Buffer.from(secret);
    const apiKeyBuffer = Buffer.from(apiKey);

    if (
      secretBuffer.length !== apiKeyBuffer.length ||
      !timingSafeEqual(secretBuffer, apiKeyBuffer)
    ) {
      throw new UnauthorizedException('Invalid or missing API key');
    }

    return true;
  }
}
