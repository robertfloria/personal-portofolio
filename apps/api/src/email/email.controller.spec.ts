import { Test, TestingModule } from '@nestjs/testing';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { SendEmailDto } from './dto/send-email.dto';

const mockEmailService = {
  sendEmail: jest.fn(async (dto: SendEmailDto) => ({ message: 'Email sent successfully' })),
};

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
      ],
    }).compile();

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
    await expect(controller.sendEmail(dto)).resolves.toEqual({ message: 'Email sent successfully' });
  });
});
