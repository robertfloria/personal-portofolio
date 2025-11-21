import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SendEmailDto } from './dto/send-email.dto';
import * as SibApiV3Sdk from 'sib-api-v3-sdk';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);

  constructor(private readonly configService: ConfigService) {}

  async sendEmail(sendEmailDto: SendEmailDto): Promise<{ message: string }> {
    const { name, from, subject, message } = sendEmailDto;
    const apiKey = (this.configService.get<string>('BREVO_API_KEY') || '').trim();
    const fromEmail = (this.configService.get<string>('EMAIL_USER') || '').trim();
    const toEmail = (this.configService.get<string>('RECIPIENT_EMAIL') || fromEmail).trim();
    const fromName = 'Portfolio';

    if (!apiKey) {
      this.logger.error('Brevo API key missing. Please set BREVO_API_KEY environment variable.');
      throw new Error('Email service misconfigured.');
    }
    if (!fromEmail) {
      this.logger.error('From email missing. Please set EMAIL_USER environment variable.');
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

    try {
      /* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
      // Configure SDK client (SDK typings are loose; keep interaction surface small)
      const defaultClient = SibApiV3Sdk.ApiClient.instance;
      if (
        defaultClient &&
        (defaultClient as any).authentications &&
        (defaultClient as any).authentications['api-key']
      ) {
        (defaultClient as any).authentications['api-key'].apiKey = apiKey;
      }

      const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

      const sendSmtpEmail: SibApiV3Sdk.SendSmtpEmail = {
        sender: { name: fromName, email: fromEmail },
        to: [{ email: toEmail, name: toEmail }],
        subject: `Portfolio Contact: ${subject}`,
        htmlContent,
      };

      if (from) {
        // replyTo is optional; include the sender's email as reply-to so replies go back to the visitor
        (sendSmtpEmail as any).replyTo = { email: from };
      }

      const result = await (apiInstance as any).sendTransacEmail(sendSmtpEmail);
      /* eslint-enable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */

      if (result && typeof result === 'object') {
        this.logger.log('Email sent successfully via Brevo.');
      } else {
        this.logger.log('Email send call completed (no detailed response).');
      }

      return { message: 'Email sent successfully.' };
    } catch (err: unknown) {
      const errorMessage = this.extractErrorMessage(err);
      this.logger.error('Failed to send email via Brevo:', errorMessage);
      throw new Error('Failed to send email. Please try again later.');
    }
  }

  private extractErrorMessage(err: unknown): string {
    if (!err) return 'Unknown error';
    if (typeof err === 'string') return err;
    if (err instanceof Error) return err.message;
    if (typeof err === 'object') {
      try {
        const json = JSON.stringify(err, Object.getOwnPropertyNames(err));
        return typeof json === 'string' ? json : '[object]';
      } catch {
        return '[object]';
      }
    }
    return typeof err === 'undefined' ? 'undefined' : '[object]';
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
}
