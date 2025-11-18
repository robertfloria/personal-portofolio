import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { SendEmailDto } from './dto/send-email.dto';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private transporter: nodemailer.Transporter;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: this.configService.get<string>('EMAIL_USER'),
        pass: this.configService.get<string>('EMAIL_PASS'),
      },
    });
  }

  async sendEmail(sendEmailDto: SendEmailDto): Promise<{ message: string }> {
    const { name, from, subject, message } = sendEmailDto;

    try {
      const mailOptions = {
        from: this.configService.get<string>('EMAIL_USER'),
        to: this.configService.get<string>('RECIPIENT_EMAIL'),
        replyTo: from,
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Contact Form Submission</h2>
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
              <p><strong>From:</strong> ${name}</p>
              <p><strong>Email:</strong> ${from}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <hr style="border: 1px solid #ddd;">
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        `,
      };

      await this.transporter.sendMail(mailOptions);
      this.logger.log(`Email sent successfully from ${from}`);

      return { message: 'Email sent successfully' };
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.logger.error(`Failed to send email: ${error.message}`, error.stack);
      } else {
        this.logger.error('Failed to send email: Unknown error');
      }
      throw new Error('Failed to send email. Please try again later.');
    }
  }
}
