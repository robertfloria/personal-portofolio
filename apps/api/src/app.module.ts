/**
 * AppModule
 *
 * The root module of the API application.
 * - Loads global configuration from .env file.
 * - Sets up request throttling (5 requests/minute).
 * - Imports Email and CV feature modules.
 * - Registers AppController and AppService.
 * - Applies ThrottlerGuard globally for rate limiting.
 */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { CvModule } from './cv/cv.module';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 60_000, // 1 minute
        limit: 5, // 5 requests per minute
      },
    ]),
    EmailModule,
    CvModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
