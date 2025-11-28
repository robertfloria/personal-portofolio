import { useMutationWithNotification } from './use-mutation-with-notification';
import { emailService } from '@/services';
import { EmailResponse, SendEmailDto } from '@portfolio/shared-types';

/**
 * React Query hook for sending contact emails
 * Automatically dispatches success/error notifications to Redux store
 */
export function useSendEmail() {
  return useMutationWithNotification<EmailResponse, Error, SendEmailDto>({
    mutationFn: (data: SendEmailDto) => emailService.sendEmail(data),
  });
}
