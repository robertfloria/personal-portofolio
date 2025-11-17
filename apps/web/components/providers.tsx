'use client';

import React from 'react';
import { UIProvider } from './contexts/ui-context';
import { NotificationProvider } from './contexts/notification-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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

export function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <UIProvider>
        <NotificationProvider>{children}</NotificationProvider>
      </UIProvider>
    </QueryClientProvider>
  );
}
