import { Test, TestingModule } from '@nestjs/testing';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { SendEmailDto } from './dto/send-email.dto';
import { ConfigService } from '@nestjs/config';
import { ApiKeyGuard } from '../common/guards/api-key.guard';

const mockEmailService = {
  sendEmail: jest.fn(() => ({ message: 'Email sent successfully' })),
};

const mockConfigService = {
  get: jest.fn((key: string) => {
    if (key === 'EMAIL_API_SECRET') return 'test-secret';
    if (key === 'EMAIL_USER') return 'test-user';
    if (key === 'EMAIL_PASS') return 'test-pass';
    return undefined;
  }),
};

class MockApiKeyGuard {
  canActivate() {
    return true;
  }
}

describe('EmailController', () => {
  let controller: EmailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmailController],
      providers: [
        {
          provide: EmailService,
          useValue: mockEmailService,
        },
        {
          provide: ConfigService,
          useValue: mockConfigService,
        },
        {
          provide: ApiKeyGuard,
          useClass: MockApiKeyGuard,
        },
      ],
    })
      .overrideGuard(ApiKeyGuard)
      .useClass(MockApiKeyGuard)
      .compile();

    controller = module.get<EmailController>(EmailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should send email and return success message', async () => {
    const dto: SendEmailDto = {
      name: 'Jane Doe',
      from: 'jane@example.com',
      subject: 'Hello',
      message: 'Test message',
    };
    await expect(controller.sendEmail(dto)).resolves.toEqual({
      message: 'Email sent successfully',
    });
  });
});
