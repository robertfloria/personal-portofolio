import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private readonly configService: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const apiKey = request.headers['x-api-key'];
    const secret = this.configService.get<string>('EMAIL_API_SECRET');
    if (!apiKey || apiKey !== secret) {
      throw new UnauthorizedException('Invalid or missing API key');
    }
    return true;
  }
}