import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Providers } from '../../../../components/layout/providers';
import { ContactSection } from '.';

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
