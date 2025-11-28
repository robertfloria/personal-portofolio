import { Controller, Get, Res, InternalServerErrorException, UseGuards } from '@nestjs/common';
import type { Response } from 'express';
import { CvService } from './cv.service';
import { CvApiKeyGuard } from './api-key.guard';

@Controller('cv')
export class CvController {
  constructor(private readonly cvService: CvService) {}

  @UseGuards(CvApiKeyGuard)
  @Get('pdf')
  async getCvPdf(@Res() res: Response) {
    try {
      const stream = await this.cvService.getCvPdf();
      res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="cv.pdf"',
      });
      stream.pipe(res);
    } catch (err) {
      throw new InternalServerErrorException('Could not retrieve CV PDF');
    }
  }
}
