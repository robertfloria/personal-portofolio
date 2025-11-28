/**
 * CvModule
 *
 * NestJS module for CV-related functionality.
 * - Provides the CvService for AWS S3 file retrieval.
 * - Registers the CvController for secure CV download endpoint.
 *
 * Usage:
 *   Import in AppModule to enable CV API routes.
 */
import { Module } from '@nestjs/common';
import { CvService } from './cv.service';
import { CvController } from './cv.controller';

@Module({
  providers: [CvService],
  controllers: [CvController],
})
export class CvModule {}
