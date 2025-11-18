import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { EmailService } from './email.service';
import { SendEmailDto } from './dto/send-email.dto';

jest.mock('nodemailer', () => ({
  createTransport: jest.fn(() => ({
    sendMail: jest.fn(() => undefined),
  })),
}));

describe('EmailService', () => {
  let service: EmailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmailService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn((key: string) => {
              if (key === 'EMAIL_USER') return 'testuser@gmail.com';
              if (key === 'EMAIL_PASS') return 'testpass';
              if (key === 'RECIPIENT_EMAIL') return 'recipient@gmail.com';
              return null;
            }),
          },
        },
      ],
    }).compile();

    service = module.get<EmailService>(EmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should send email successfully', async () => {
    const dto: SendEmailDto = {
      name: 'John Doe',
      from: 'john@example.com',
      subject: 'Test Subject',
      message: 'Test message content',
    };
    await expect(service.sendEmail(dto)).resolves.toEqual({ message: 'Email sent successfully' });
  });
});
