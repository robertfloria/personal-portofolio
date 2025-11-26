import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { isAxiosError } from 'axios';
import { SendEmailDto } from './dto/send-email.dto';
import { EmailResponse } from '@portfolio/shared-types';

// --- Types for Brevo API ---

/**
 * Brevo successful send response.
 * Docs: https://developers.brevo.com/reference/sendtransacemail
 * Usually { messageId: <string> } or may include nested message.
 */
interface BrevoSendEmailResponse {
  messageId?: string | number;
  message?: { id?: string | number };
}

/**
 * Brevo error payload (shape varies).
 * Often { message: string } or { error: string, code?: number }.
 */
interface BrevoErrorData {
  message?: string;
  error?: string;
  code?: number | string;
  // Keep index signature to avoid unsafe member access warnings when logging.
  [key: string]: unknown;
}

function isBrevoErrorData(value: unknown): value is BrevoErrorData {
  // Narrowing guard: ensure it's a non-null object
  return !!value && typeof value === 'object';
}

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async sendEmail(sendEmailDto: SendEmailDto): Promise<EmailResponse> {
    const { name, from, subject, message } = sendEmailDto;

    if (!subject || !message) {
      throw new BadRequestException('Subject and message are required.');
    }

    const apiKey = this.configService.get<string>('BREVO_API_KEY')?.trim();
    const fromEmail = this.configService.get<string>('EMAIL_USER')?.trim();
    const toEmail = this.configService.get<string>('RECIPIENT_EMAIL')?.trim() || fromEmail;

    // Log environment variable values for debugging
    console.log('BREVO_API_KEY:', apiKey);
    console.log('EMAIL_USER:', fromEmail);
    console.log('RECIPIENT_EMAIL:', toEmail);

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

      // Type the Axios response data using generics → no implicit any
      const response = await firstValueFrom(
        this.httpService.post<BrevoSendEmailResponse>(
          'https://api.brevo.com/v3/smtp/email',
          payload,
          {
            headers: {
              'Content-Type': 'application/json',
              'api-key': apiKey,
            },
            timeout: 10_000,
          },
        ),
      );

      // response.data is now typed
      const data: BrevoSendEmailResponse = response.data ?? {};
      const messageId = data.messageId ?? data.message?.id;

      this.logger.log(`Brevo responded: status=${response.status}, id=${messageId ?? 'n/a'}`);
      return { message: 'Email sent successfully.' };
    } catch (error: unknown) {
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
    if (isAxiosError(error)) {
      const status: number | undefined = error.response?.status;

      // Safely narrow error.response?.data
      const rawData: unknown = error.response?.data;
      let brevoMsg: string | undefined;

      if (isBrevoErrorData(rawData)) {
        // Safely read known keys. No unsafe member access.
        brevoMsg = rawData.message ?? rawData.error;
        // If message still unknown, serialize the error data (stringify is safe here).
        if (!brevoMsg) {
          try {
            brevoMsg = JSON.stringify(rawData);
          } catch {
            // ignore stringify failure, fall back to undefined
          }
        }
      }

      return `HTTP ${status ?? 'unknown'} - ${brevoMsg ?? error.message}`;
    }

    if (error instanceof Error) return error.message;

    // Fallback: stringify unknown without unsafe access
    try {
      return JSON.stringify(error);
    } catch {
      return String(error);
    }
  }
}
