/**
 * ApiKeyGuard
 *
 * A reusable NestJS guard for protecting API endpoints with an API key.
 * - Reads the API key from the 'x-api-key' header.
 * - Compares it (timing-safe) to the configured secret from environment/config.
 * - Supports custom config keys via DI (default: 'API_SECRET').
 * - Throws UnauthorizedException if the key is missing or invalid.
 *
 * Usage:
 *   @UseGuards(ApiKeyGuard)
 *   class SomeController { ... }
 *
 * Environment:
 *   Set the secret in your .env (e.g., API_SECRET=your-key)
 */
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  Inject,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { Request } from 'express';
import { timingSafeEqual } from 'crypto';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  /**
   * @param configService - Injected NestJS ConfigService
   * @param configKey - The config key to use for the API secret (default: 'API_SECRET')
   */
  constructor(
    private readonly configService: ConfigService,
    @Inject('API_SECRET') private readonly configKey: string = 'API_SECRET',
  ) {}

  /**
   * Checks if the request contains a valid API key in the 'x-api-key' header.
   * @param context - NestJS execution context
   * @returns true if authorized, throws otherwise
   */
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const headerValue = request.headers['x-api-key'];
    const apiKey = Array.isArray(headerValue) ? headerValue[0] : headerValue;
    const secret = this.configService.get<string>(this.configKey);

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
