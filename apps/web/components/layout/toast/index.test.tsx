

import { render } from '@testing-library/react';
import { Toast } from './index';
import { NotificationProvider } from '@/store/contexts/notification-context';

describe('Toast', () => {
  it('renders without crashing', () => {
    render(
      <NotificationProvider>
        <Toast />
      </NotificationProvider>
    );
  });
});
