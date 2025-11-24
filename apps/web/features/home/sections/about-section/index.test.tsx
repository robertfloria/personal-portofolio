import { render } from '@testing-library/react';
import AboutSection from '.';

describe('AboutSection', () => {
  it('renders without crashing', () => {
    render(<AboutSection />);
  });
});
