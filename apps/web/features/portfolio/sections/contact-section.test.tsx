import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ContactSection } from './contact-section';
import { Providers } from '../../../components/layout/providers';

// window.matchMedia is provided globally by jest.setup.ts

describe('ContactSection', () => {
  it('renders contact form fields', () => {
    render(
      <Providers>
        <ContactSection />
      </Providers>,
    );
    expect(screen.getByLabelText(/Your Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
  });
});
