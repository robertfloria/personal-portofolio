import { api } from '@/lib/http-client';
import { ContactFormData } from '@/types';

export interface SendEmailRequest extends ContactFormData {}

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
  sendEmail: async (data: SendEmailRequest): Promise<SendEmailResponse> => {
    const response = await api.post<SendEmailResponse>('/email/send', data);
    return response.data;
  },
};
