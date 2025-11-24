import { render } from '@testing-library/react';
import { ThemeToggle } from './theme-toggle';
import { UIProvider } from '../../store/contexts/ui-context';

describe('ThemeToggle', () => {
  it('renders without crashing', () => {
    render(
      <UIProvider>
        <ThemeToggle />
      </UIProvider>,
    );
  });
});
