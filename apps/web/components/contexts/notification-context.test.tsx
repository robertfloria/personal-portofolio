import { render } from '@testing-library/react';
import { NotificationProvider } from './notification-context';

describe('NotificationProvider', () => {
  it('renders children', () => {
    render(
      <NotificationProvider>
        <div>Child</div>
      </NotificationProvider>
    );
  });
});