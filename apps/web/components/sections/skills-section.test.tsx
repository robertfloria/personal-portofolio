import { render } from '@testing-library/react';
import { SkillsSection } from './skills-section';

describe('SkillsSection', () => {
  it('renders without crashing', () => {
    render(<SkillsSection />);
  });
});
