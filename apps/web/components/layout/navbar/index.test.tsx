import { render } from '@testing-library/react';
import { UIProvider } from '../../../store/contexts/ui-context';
import Navbar from '.';

describe('Navbar', () => {
  it('renders without crashing', () => {
    render(
      <UIProvider>
        <Navbar />
      </UIProvider>,
    );
  });
});
