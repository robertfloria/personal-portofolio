/**
 * ApiKeyGuard
 *
 * A reusable NestJS guard for protecting API endpoints with an API key.
 * - Reads the API key from the 'x-api-key' header.
 * - Compares it (timing-safe) to the configured secret from environment/config.
 * - Throws UnauthorizedException if the key is missing or invalid.
 *
 * Usage:
 *   @UseGuards(ApiKeyGuard)
 *   class SomeController { ... }
 *
 * Environment:
 *   Set the secret in your .env (e.g., API_SECRET=your-key)
 */
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { Request } from 'express';
import { timingSafeEqual } from 'crypto';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  /**
   * @param configService - Injected NestJS ConfigService
   */
  constructor(private readonly configService: ConfigService) {}

  /**
   * Checks if the request contains a valid API key in the 'x-api-key' header.
   * @param context - NestJS execution context
   * @returns true if authorized, throws otherwise
   */
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const headerValue = request.headers['x-api-key'];
    const apiKey = Array.isArray(headerValue) ? headerValue[0] : headerValue;
    const secret = this.configService.get<string>('API_SECRET');

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
