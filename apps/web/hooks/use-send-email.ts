/**
 * useSendEmail hook
 *
 * Trimite email-uri folosind serviciul emailService și React Query mutation cu notificări automate.
 * - Folosește useMutationWithNotification pentru feedback instant (success/error).
 * - Acceptă datele de email (SendEmailDto) și returnează statusul operației.
 *
 * @returns Mutation object pentru trimiterea emailului
 *
 * @example
 * const { mutate, isPending } = useSendEmail();
 * mutate({ name, from, subject, message });
 */
import { useMutationWithNotification } from './use-mutation-with-notification';
import { emailService } from '@/services';
import { EmailResponse, SendEmailDto } from '@portfolio/shared-types';

export function useSendEmail() {
  return useMutationWithNotification<EmailResponse, Error, SendEmailDto>({
    mutationFn: (data: SendEmailDto) => emailService.sendEmail(data),
  });
}
