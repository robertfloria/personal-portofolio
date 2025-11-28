import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Providers } from '../../../../components/layout/providers';
import { HeroSection } from '.';

describe('HeroSection', () => {
  it('renders welcome badge', () => {
    render(
      <Providers>
        <HeroSection />
      </Providers>,
    );
    expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
  });
});
