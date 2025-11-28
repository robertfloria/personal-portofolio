import { Controller, Get, Res, InternalServerErrorException, UseGuards } from '@nestjs/common';
import type { Response } from 'express';
import { CvService } from './cv.service';
import { ApiKeyGuard } from '../common/guards/api-key.guard';

@Controller('cv')
@UseGuards(ApiKeyGuard)
export class CvController {
  constructor(private readonly cvService: CvService) {}

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
