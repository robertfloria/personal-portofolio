import { render } from '@testing-library/react';
import { TimelineSection } from './timeline-section';

describe('TimelineSection', () => {
  it('renders without crashing', () => {
    render(<TimelineSection />);
  });
});