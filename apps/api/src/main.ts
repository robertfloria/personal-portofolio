import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { devConsole } from '../../../packages/shared-utils/src/dev-console';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true,
  });

  // Enable Global validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Global prefix
  app.setGlobalPrefix('api');

  const port = process.env.PORT || 4000;
  await app.listen(port);
  devConsole.log(`🚀 API is running on: http://localhost:${port}/api`);
}
bootstrap().catch((err: unknown) => {
  if (err instanceof Error) {
    devConsole.error('API failed to start:', err.message, err.stack);
  } else {
    devConsole.error('API failed to start:', err);
  }
});
