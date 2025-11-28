/**
 * CvController
 *
 * Handles CV-related API endpoints.
 * - Secured by ApiKeyGuard (requires valid API key in 'x-api-key' header)
 * - Exposes GET /cv/pdf to stream the CV PDF from AWS S3
 *
 * Usage:
 *   @Controller('cv')
 *   @UseGuards(ApiKeyGuard)
 *   export class CvController { ... }
 */
import { Controller, Get, Res, InternalServerErrorException, UseGuards } from '@nestjs/common';
import type { Response } from 'express';
import { CvService } from './cv.service';
import { ApiKeyGuard } from '../common/guards/api-key.guard';

@Controller('cv')
@UseGuards(ApiKeyGuard)
export class CvController {
  /**
   * @param cvService - Injected service for CV file retrieval
   */
  constructor(private readonly cvService: CvService) {}

  /**
   * GET /cv/pdf
   *
   * Streams the CV PDF file from AWS S3 to the client.
   * Response headers set for PDF download.
   * Throws InternalServerErrorException if retrieval fails.
   *
   * @param res - Express response object
   */
  @Get('pdf')
  async getCvPdf(@Res() res: Response) {
    try {
      const stream = await this.cvService.getCvPdf();
      res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="cv.pdf"',
      });
      stream.pipe(res);
    } catch {
      throw new InternalServerErrorException('Could not retrieve CV PDF');
    }
  }
}
