/**
 * Main entry point for the NestJS API application.
 *
 * - Bootstraps the NestJS app with AppModule.
 * - Configures CORS, global validation, and API prefix.
 * - Sets Express trust proxy for deployment compatibility.
 * - Handles startup errors gracefully.
 *
 * Environment variables:
 *   CORS_ORIGIN, PORT
 */
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { Express } from 'express';

/**
 * Bootstraps the NestJS application with global configuration.
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:3000';

  app.enableCors({
    origin: corsOrigin,
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.setGlobalPrefix('api');

  const expressApp = app.getHttpAdapter().getInstance() as Express;
  expressApp.set('trust proxy', 1);

  const port = process.env.PORT || 4000;

  await app.listen(port);
  console.log(`🚀 API is running on: http://localhost:${port}/api`);
}

bootstrap().catch((err: unknown) => {
  if (err instanceof Error) {
    console.error('API failed to start:', err.message, err.stack);
  } else {
    console.error('API failed to start:', err);
  }
});
