import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { HeroSection } from './hero-section';
import { Providers } from '../layout/providers';

// Jest setup for window.matchMedia mock
beforeAll(() => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => {},
      };
    };
});

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
