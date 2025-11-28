import { useMutationWithNotification } from './use-mutation-with-notification';
import { downloadCv } from '@/services/cv.service';

export function useCvDownload() {
  return useMutationWithNotification({
    mutationFn: downloadCv,
  });
}
