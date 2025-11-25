import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { emailService } from '@/services';
import { AxiosError } from 'axios';
import { useNotifications } from '@/store/contexts/notification-context';
import { EmailResponse, SendEmailDto } from '@portfolio/shared-types';
import { ANIMATION_DURATIONS } from '@/lib/constants';

/**
 * React Query hook for sending contact emails
 * Automatically dispatches success/error notifications to Redux store
 */
export function useSendEmail(): UseMutationResult<EmailResponse, AxiosError, SendEmailDto> {
  const { addNotification } = useNotifications();

  return useMutation({
    mutationFn: (data: SendEmailDto) => emailService.sendEmail(data),
    onSuccess: (data) => {
      addNotification({
        type: 'success',
        message: data.message || "Message sent successfully! I'll get back to you soon.",
        duration: ANIMATION_DURATIONS.NOTIFICATION,
      });
    },
    onError: (error: AxiosError) => {
      const errorMessage =
        typeof error.response?.data === 'object' && error.response?.data !== null
          ? (error.response?.data as { message?: string }).message || error.message
          : error.message || 'Failed to send message. Please try again later.';

      addNotification({
        type: 'error',
        message: errorMessage,
        duration: ANIMATION_DURATIONS.ERROR_NOTIFICATION,
      });
    },
  });
}
