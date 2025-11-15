import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { emailService, SendEmailRequest, SendEmailResponse } from '@/services';
import { AxiosError } from 'axios';
import { useNotifications } from '@/components/contexts/notification-context';

/**
 * React Query hook for sending contact emails
 * Automatically dispatches success/error notifications to Redux store
 */
export function useSendEmail(): UseMutationResult<
  SendEmailResponse,
  AxiosError,
  SendEmailRequest
> {
  const { addNotification } = useNotifications();

  return useMutation({
    mutationFn: (data: SendEmailRequest) => emailService.sendEmail(data),
    onSuccess: (data) => {
      addNotification({
        type: 'success',
        message: data.message || 'Message sent successfully! I\'ll get back to you soon.',
        duration: 5000,
      });
    },
    onError: (error: AxiosError) => {
      const errorMessage =
        (error.response?.data as any)?.message ||
        error.message ||
        'Failed to send message. Please try again later.';
      
      addNotification({
        type: 'error',
        message: errorMessage,
        duration: 7000,
      });
    },
  });
}
