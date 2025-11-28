import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query';
import { useNotifications } from '@/store/contexts/notification-context';
import { ANIMATION_DURATIONS } from '@/lib/constants';

/**
 * Reusable React Query mutation hook with notification support
 * Handles success/error notifications automatically
 */
export function useMutationWithNotification<
  TData = unknown,
  TError = Error,
  TVariables = void,
  TContext = unknown,
>(
  options: UseMutationOptions<TData, TError, TVariables, TContext>,
): UseMutationResult<TData, TError, TVariables, TContext> {
  const { addNotification } = useNotifications();

  return useMutation({
    ...options,
    onSuccess: (data: TData, variables, context, mutation) => {
      if (options.onSuccess) options.onSuccess(data, variables, context, mutation);
      // Try to extract a message from the response
      const message =
        (data && typeof data === 'object' && 'message' in data
          ? (data as { message?: string }).message
          : undefined) || 'Operation successful.';
      addNotification({
        type: 'success',
        message,
        duration: ANIMATION_DURATIONS.NOTIFICATION,
      });
    },
    onError: (error: TError, variables, context, mutation) => {
      if (options.onError) options.onError(error, variables, context, mutation);
      const errorMessage =
        (error && typeof error === 'object' && 'message' in error
          ? (error as { message?: string }).message
          : undefined) || 'Operation failed. Please try again later.';
      addNotification({
        type: 'error',
        message: errorMessage,
        duration: ANIMATION_DURATIONS.ERROR_NOTIFICATION,
      });
    },
  });
}
