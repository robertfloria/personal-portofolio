import { api } from '@/lib/http-client';
import { SendEmailDto } from '@portfolio/shared-types';

export interface SendEmailResponse {
  success: boolean;
  message: string;
}

/**
 * Email service for contact form
 */
export const emailService = {
  /**
   * Send contact email
   */
  sendEmail: async (data: SendEmailDto): Promise<SendEmailResponse> => {
    const apiKey = process.env.NEXT_PUBLIC_EMAIL_API_SECRET;
    const response = await api.post<SendEmailResponse>('/email/send', data, {
      headers: {
        'x-api-key': apiKey,
      },
    });
    return response.data;
  },
};
