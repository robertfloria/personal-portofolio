import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class CvApiKeyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const apiKey = request.headers['x-api-key'] || request.query.apiKey;
    if (apiKey !== process.env.CV_API_KEY) {
      throw new UnauthorizedException('Invalid API key');
    }
    return true;
  }
}
