import { Test, TestingModule } from '@nestjs/testing';
import { CvService } from './cv.service';

import { Readable } from 'stream';

jest.mock('@aws-sdk/client-s3', () => {
  return {
    S3Client: jest.fn().mockImplementation(() => ({
      send: jest.fn().mockResolvedValue({
        Body: new Readable({
          read() {},
        }),
      }),
    })),
    GetObjectCommand: jest.fn(),
  };
});

describe('CvService', () => {
  let service: CvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CvService],
    }).compile();
    service = module.get<CvService>(CvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a readable stream', async () => {
    const result = await service.getCvPdf();
    expect(result).toBeDefined();
    expect(typeof result.pipe).toBe('function');
  });
});
