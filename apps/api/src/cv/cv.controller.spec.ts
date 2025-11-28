import { Test, TestingModule } from '@nestjs/testing';
import { CvController } from './cv.controller';
import { CvService } from './cv.service';
import type { Response } from 'express';

describe('CvController', () => {
  let controller: CvController;
  let service: CvService;

  beforeEach(async () => {
    const mockService = {
      getCvPdf: jest.fn().mockResolvedValue({ pipe: jest.fn() }),
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CvController],
      providers: [{ provide: CvService, useValue: mockService }],
    }).compile();
    controller = module.get<CvController>(CvController);
    service = module.get<CvService>(CvService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should stream the PDF CV', async () => {
    const res = {
      set: jest.fn(),
      pipe: jest.fn(),
    } as unknown as Response;
    await controller.getCvPdf(res);
    expect(res.set).toHaveBeenCalledWith({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="cv.pdf"',
    });
    expect(service.getCvPdf).toHaveBeenCalled();
  });
});
