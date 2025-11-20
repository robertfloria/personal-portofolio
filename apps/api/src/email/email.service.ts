import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { SendEmailDto } from './dto/send-email.dto';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private transporter: nodemailer.Transporter;

  constructor(private configService: ConfigService) {
    // Configure transporter with explicit SMTP options and timeouts to avoid
    // long blocking behavior when SMTP is unreachable in production.
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: this.configService.get<string>('EMAIL_USER'),
        pass: this.configService.get<string>('EMAIL_PASS'),
      },
      // Timeouts (ms)
      connectionTimeout: 10000,
      greetingTimeout: 5000,
      socketTimeout: 10000,
      tls: {
        // Allow self-signed certificates if necessary (adjust for prod)
        rejectUnauthorized: false,
      },
    });

    // Verify transporter connectivity on startup and log helpful message.
    // Some transports (or test mocks) may not implement `verify`, so guard the call.
    const verifyFn = (this.transporter as any).verify;
    if (typeof verifyFn === 'function') {
      try {
        verifyFn
          .call(this.transporter)
          .then(() => this.logger.log('SMTP transporter verified successfully'))
          .catch((err: unknown) =>
            this.logger.warn('SMTP transporter verification failed: ' + String(err)),
          );
      } catch (err) {
        this.logger.warn('SMTP transporter verification threw an error: ' + String(err));
      }
    } else {
      this.logger.warn(
        'SMTP transporter does not support verify(); skipping verification (likely mocked)',
      );
    }
  }

  async sendEmail(sendEmailDto: SendEmailDto): Promise<{ message: string }> {
    const { name, from, subject, message } = sendEmailDto;

    try {
      const mailOptions = {
        from: this.configService.get<string>('EMAIL_USER'),
        to: this.configService.get<string>('EMAIL_USER'),
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

      // Wrap sendMail with a timeout to ensure the request doesn't hang
      // indefinitely if the SMTP server is unreachable.
      const sendPromise = this.transporter.sendMail(mailOptions);
      const timeoutMs = 10000; // 10s timeout for SMTP send

      const result = (await Promise.race([
        sendPromise,
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('SMTP send timed out')), timeoutMs),
        ),
      ])) as unknown;

      // If send succeeds, log summary
      this.logger.log(`Email sent successfully from ${from}`);

      // nodemailer returns an info object; preserve message for caller if available
      // Type guard to check for a `message` property without using `any`.
      function hasMessageProp(x: unknown): x is { message: unknown } {
        return typeof x === 'object' && x !== null && 'message' in x;
      }

      let infoMessage = 'Email sent successfully';
      if (hasMessageProp(result) && typeof (result as { message: unknown }).message === 'string') {
        infoMessage = (result as { message: string }).message;
      }

      return { message: infoMessage };
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
