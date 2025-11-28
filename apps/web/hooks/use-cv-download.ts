/**
 * useCvDownload hook
 *
 * Provides a React Query mutation for downloading the CV PDF.
 * - Uses useMutationWithNotification for notification handling.
 * - Calls downloadCv service function.
 * - Returns mutation object with status and handlers.
 *
 * @example
 * const { mutate, isPending } = useCvDownload();
 * mutate();
 */
import { useMutationWithNotification } from './use-mutation-with-notification';
import { downloadCv } from '@/services/cv.service';

export function useCvDownload() {
  return useMutationWithNotification({
    mutationFn: downloadCv,
  });
}
