import { AxiosHeaders } from 'axios';
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { EmailService } from './email.service';
import { SendEmailDto } from './dto/send-email.dto';
import { HttpModule, HttpService } from '@nestjs/axios';
import { of } from 'rxjs';

describe('EmailService', () => {
  let service: EmailService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [
        EmailService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn((key: string) => {
              if (key === 'EMAIL_USER') return 'testuser@gmail.com';
              if (key === 'EMAIL_PASS') return 'testpass';
              if (key === 'RECIPIENT_EMAIL') return 'recipient@gmail.com';
              if (key === 'BREVO_API_KEY') return 'dummy-brevo-key';
              return null;
            }),
          },
        },
      ],
    }).compile();

    service = module.get<EmailService>(EmailService);
    httpService = module.get<HttpService>(HttpService);
    jest.spyOn(httpService, 'post').mockReturnValue(
      of({
        status: 200,
        statusText: 'OK',
        headers: {},
        config: { headers: new AxiosHeaders() },
        data: { messageId: 'dummy-id' },
      }),
    );
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
    await expect(service.sendEmail(dto)).resolves.toEqual({ message: 'Email sent successfully.' });
  });
});
