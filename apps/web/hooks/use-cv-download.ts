/**
 * Custom hook for downloading CV with built-in caching and notification handling.
 *
 * This hook uses React Query to manage the CV download operation with the following features:
 * - Caching for 1 hour to prevent redundant downloads
 * - Manual triggering (enabled: false)
 * - No automatic retries on failure
 * - Integrated notification system for success/error states
 *
 * @returns A React Query result object with methods to trigger the CV download
 *
 * @example
 * ```tsx
 * const { refetch: downloadCV, isLoading } = useCvDownload();
 *
 * const handleDownload = () => {
 *   downloadCV();
 * };
 * ```
 */
import { downloadCv } from '@/services/cv.service';
import { useQueryWithNotification } from './use-query-with-notification';

export function useCvDownload() {
  return useQueryWithNotification({
    queryKey: ['cvDownload'],
    queryFn: downloadCv,
    staleTime: 1000 * 60 * 60, // Cache for 1 hour
    gcTime: 1000 * 60 * 60, // Cache for 1 hour
    retry: false,
    enabled: false,
    showSuccessNotification: false,
  });
}
