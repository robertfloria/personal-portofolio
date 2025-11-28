/**
 * emailService
 *
 * Trimite email-uri prin endpoint-ul API /api/email.
 * - Metoda sendEmail face un request POST cu datele formularului.
 * - Returnează răspunsul ca EmailResponse.
 * - Aruncă eroare dacă trimiterea eșuează.
 *
 * @param data - datele emailului (SendEmailDto)
 * @returns Promise<EmailResponse>
 *
 * @example
 * await emailService.sendEmail({ name, from, subject, message });
 */
import { EmailResponse, SendEmailDto } from '@portfolio/shared-types';

const EMAIL_API_ROUTE = '/api/email';

export const emailService = {
  sendEmail: async (data: SendEmailDto): Promise<EmailResponse> => {
    const response = await fetch(EMAIL_API_ROUTE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return response.json() as Promise<EmailResponse>;
  },
};
