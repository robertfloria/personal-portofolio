import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { HeroSection } from './hero-section';
import { Providers } from '../layout/providers';

// window.matchMedia is provided globally by jest.setup.ts

describe('HeroSection', () => {
  it('renders welcome badge', () => {
    render(
      <Providers>
        <HeroSection />
      </Providers>
    );
    expect(screen.getByText(/Welcome to my portfolio/i)).toBeInTheDocument();
  });
});
