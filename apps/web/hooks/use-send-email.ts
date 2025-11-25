import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { emailService } from '@/services';
import { useNotifications } from '@/store/contexts/notification-context';
import { EmailResponse, SendEmailDto } from '@portfolio/shared-types';
import { ANIMATION_DURATIONS } from '@/lib/constants';

/**
 * React Query hook for sending contact emails
 * Automatically dispatches success/error notifications to Redux store
 */
export function useSendEmail(): UseMutationResult<EmailResponse, Error, SendEmailDto> {
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
    onError: (error: Error) => {
      // Try to extract a message from the error object
      let errorMessage = error.message || 'Failed to send message. Please try again later.';

      // If the error is a custom error with a response (e.g., thrown manually with extra info)
      // You can extend this logic if you throw custom errors from emailService.sendEmail

      addNotification({
        type: 'error',
        message: errorMessage,
        duration: ANIMATION_DURATIONS.ERROR_NOTIFICATION,
      });
    },
  });
}
