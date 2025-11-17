import { render } from '@testing-library/react';
import { CertificatesSection } from './certificates-section';

describe('CertificatesSection', () => {
  it('renders without crashing', () => {
    render(<CertificatesSection />);
  });
});