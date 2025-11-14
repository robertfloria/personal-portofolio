import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { emailService, SendEmailRequest, SendEmailResponse } from '@/services';
import { AxiosError } from 'axios';

/**
 * React Query hook for sending contact emails
 */
export function useSendEmail(): UseMutationResult<
  SendEmailResponse,
  AxiosError,
  SendEmailRequest
> {
  return useMutation({
    mutationFn: (data: SendEmailRequest) => emailService.sendEmail(data),
    onSuccess: (data) => {
      console.log('Email sent successfully:', data);
    },
    onError: (error: AxiosError) => {
      console.error('Failed to send email:', error);
    },
  });
}
