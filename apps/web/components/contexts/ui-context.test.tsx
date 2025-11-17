import { render } from '@testing-library/react';
import { UIProvider } from './ui-context';

describe('UIProvider', () => {
  it('renders children', () => {
    render(
      <UIProvider>
        <div>Child</div>
      </UIProvider>,
    );
  });
});
