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
'use client';
import { useQuery, QueryKey, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { useEffect, useCallback, useRef } from 'react';
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
    showSuccessNotification?: boolean;
  },
): UseQueryResult<TData, TError> {
  const { addNotification } = useNotifications();
  const query = useQuery(options);

  // Use refs to track if notifications have been shown to avoid duplicates
  const hasShownSuccess = useRef(false);
  const hasShownError = useRef(false);

  // Memoized notification handlers
  const showSuccessNotification = useCallback(
    (data: TData) => {
      const message =
        options.successMessage ||
        (data && typeof data === 'object' && 'message' in data
          ? (data as { message?: string }).message
          : undefined) ||
        'Loaded successfully.';
      addNotification({
        type: 'success',
        message,
        duration: ANIMATION_DURATIONS.NOTIFICATION,
      });
    },
    [addNotification, options.successMessage],
  );

  const showErrorNotification = useCallback(
    (error: TError) => {
      const errorMessage =
        options.errorMessage ||
        (error && typeof error === 'object' && 'message' in error
          ? (error as { message?: string }).message
          : undefined) ||
        'Failed to load data.';
      addNotification({
        type: 'error',
        message: errorMessage,
        duration: ANIMATION_DURATIONS.ERROR_NOTIFICATION,
      });
    },
    [addNotification, options.errorMessage],
  );

  // Handle success notification
  useEffect(() => {
    if (
      query.isSuccess &&
      query.data &&
      options.showSuccessNotification &&
      !hasShownSuccess.current
    ) {
      hasShownSuccess.current = true;
      showSuccessNotification(query.data);
    }
    // Reset when query is refetching
    if (query.isFetching) {
      hasShownSuccess.current = false;
    }
  }, [
    query.isSuccess,
    query.data,
    query.isFetching,
    options.showSuccessNotification,
    showSuccessNotification,
  ]);

  // Handle error notification
  useEffect(() => {
    if (query.isError && query.error && !hasShownError.current) {
      hasShownError.current = true;
      showErrorNotification(query.error);
    }
    // Reset when query is refetching
    if (query.isFetching) {
      hasShownError.current = false;
    }
  }, [query.isError, query.error, query.isFetching, showErrorNotification]);

  return query;
}
