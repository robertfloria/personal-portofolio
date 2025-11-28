import { render } from '@testing-library/react';
import { UIProvider } from '../../../store/contexts/ui-context';
import { NotificationProvider } from '../../../store/contexts/notification-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Navbar } from '.';

describe('Navbar', () => {
  it('renders without crashing', () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <NotificationProvider>
          <UIProvider>
            <Navbar />
          </UIProvider>
        </NotificationProvider>
      </QueryClientProvider>,
    );
  });
});
