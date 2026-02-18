import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Providers } from '../../../../components/layout/providers';
import { HeroSection } from '.';

describe('HeroSection', () => {
  it('renders availability badge', () => {
    render(
      <Providers>
        <HeroSection />
      </Providers>,
    );
    expect(screen.getByText('Available')).toBeInTheDocument();
  });
});
