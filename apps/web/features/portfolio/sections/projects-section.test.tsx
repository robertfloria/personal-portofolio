import { render } from '@testing-library/react';
import { ProjectsSection } from './projects-section';

describe('ProjectsSection', () => {
  it('renders without crashing', () => {
    render(<ProjectsSection />);
  });
});
