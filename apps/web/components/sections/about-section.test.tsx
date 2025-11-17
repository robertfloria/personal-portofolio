import { render } from '@testing-library/react';
import { AboutSection } from './about-section';

describe('AboutSection', () => {
  it('renders without crashing', () => {
    render(<AboutSection />);
  });
});