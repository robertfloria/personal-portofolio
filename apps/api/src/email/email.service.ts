import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { SendEmailDto } from './dto/send-email.dto';
@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async sendEmail(sendEmailDto: SendEmailDto): Promise<{ message: string }> {
    const { name, from, subject, message } = sendEmailDto;

    const apiKey = this.configService.get<string>('BREVO_API_KEY')?.trim();
    const fromEmail = this.configService.get<string>('EMAIL_USER')?.trim();
    const toEmail = this.configService.get<string>('RECIPIENT_EMAIL')?.trim() || fromEmail;

    if (!apiKey || !fromEmail) {
      this.logger.error('Missing Brevo configuration.');
      throw new Error('Email service misconfigured.');
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Contact Form Submission</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
          <p><strong>From:</strong> ${this.escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${this.escapeHtml(from)}</p>
          <p><strong>Subject:</strong> ${this.escapeHtml(subject)}</p>
          <hr style="border: 1px solid #ddd;">
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${this.escapeHtml(message)}</p>
        </div>
      </div>
    `;

    const payload = {
      sender: { name: 'Portfolio', email: fromEmail },
      to: [{ email: toEmail, name: toEmail }],
      subject: `Portfolio Contact: ${subject}`,
      htmlContent,
      ...(from ? { replyTo: { email: from } } : {}),
    };

    try {
      this.logger.log(`Sending email to ${toEmail} via Brevo...`);

      const response = await firstValueFrom(
        this.httpService.post('https://api.brevo.com/v3/smtp/email', payload, {
          headers: {
            'Content-Type': 'application/json',
            'api-key': apiKey,
          },
          timeout: 10000, // 10 seconds
        }),
      );

      this.logger.log(`Brevo response: ${response.status} ${JSON.stringify(response.data)}`);
      return { message: 'Email sent successfully.' };
    } catch (error) {
      const errMsg = this.extractErrorMessage(error);
      this.logger.error(`Failed to send email via Brevo: ${errMsg}`);
      throw new Error('Failed to send email. Please try again later.');
    }
  }

  private escapeHtml(input?: string): string {
    if (!input) return '';
    return input
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  private extractErrorMessage(error: unknown): string {
    if (error instanceof AxiosError) {
      return error.response ? `)}` : error.message;
    }
    if (error instanceof Error) return error.message;
    return String(error);
  }
}
