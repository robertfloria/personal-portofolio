import { render } from '@testing-library/react';
import Toast from '.';

describe('Toast', () => {
  it('renders without crashing', () => {
    // Toast requires id, type, message, onClose
    render(<Toast id="1" type="success" message="Hello" onClose={() => {}} />);
  });
});
