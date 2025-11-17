import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ContactSection } from './contact-section';
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

describe('ContactSection', () => {
  it('renders contact form fields', () => {
    render(
      <Providers>
        <ContactSection />
      </Providers>
    );
    expect(screen.getByLabelText(/Your Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
  });
});
