import { render } from '@testing-library/react';
import { Navbar } from './navbar';
import { UIProvider } from '../contexts/ui-context';

describe('Navbar', () => {
  it('renders without crashing', () => {
    render(
      <UIProvider>
        <Navbar />
      </UIProvider>,
    );
  });
});
