/**
 * useQueryWithNotification hook
 *
 * Wrapper peste useQuery din React Query care adaugă notificări automate la succes și eroare.
 * - La succes, afișează mesajul din răspuns sau "Loaded successfully.".
 * - La eroare, afișează mesajul din eroare sau "Failed to load data.".
 * - Permite suprascrierea onSuccess/onError din options.
 * - Folosește contextul global de notificări.
 *
 * @param options Opțiuni pentru useQuery (React Query)
 * @returns UseQueryResult cu notificări automate
 *
 * @example
 * const query = useQueryWithNotification({ queryKey: ['cv'], queryFn: getCvJson });
 */
import { useQuery, QueryKey, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNotifications } from '@/store/contexts/notification-context';
import { ANIMATION_DURATIONS } from '@/lib/constants';

export function useQueryWithNotification<
  TQueryFnData = unknown,
  TError = Error,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey> & {
    successMessage?: string;
    errorMessage?: string;
  },
): UseQueryResult<TData, TError> {
  const { addNotification } = useNotifications();
  const query = useQuery(options);

  useEffect(() => {
    if (query.isSuccess && query.data) {
      const message =
        options.successMessage ||
        (query.data && typeof query.data === 'object' && 'message' in query.data
          ? (query.data as { message?: string }).message
          : undefined) ||
        'Loaded successfully.';
      addNotification({
        type: 'success',
        message,
        duration: ANIMATION_DURATIONS.NOTIFICATION,
      });
    }
  }, [query.isSuccess]);

  useEffect(() => {
    if (query.isError && query.error) {
      const errorMessage =
        options.errorMessage ||
        (query.error && typeof query.error === 'object' && 'message' in query.error
          ? (query.error as { message?: string }).message
          : undefined) ||
        'Failed to load data.';
      addNotification({
        type: 'error',
        message: errorMessage,
        duration: ANIMATION_DURATIONS.ERROR_NOTIFICATION,
      });
    }
  }, [query.isError]);

  return query;
}
