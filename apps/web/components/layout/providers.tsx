'use client';

import React from 'react';
import { UIProvider } from '../../store/contexts/ui-context';
import { NotificationProvider } from '../../store/contexts/notification-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * Providers component
 *
 * Wraps the application with global context providers.
 * - QueryClientProvider: React Query for data fetching and caching.
 * - UIProvider: UI state management.
 * - NotificationProvider: Global notification context.
 * - NextThemesProvider: Theme switching and persistence.
 * - Accepts children to be rendered within all providers.
 *
 * @example
 * <Providers>
 *   <App />
 * </Providers>
 */

export function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <UIProvider>
        <NotificationProvider>
          <NextThemesProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </NextThemesProvider>
        </NotificationProvider>
      </UIProvider>
    </QueryClientProvider>
  );
}
