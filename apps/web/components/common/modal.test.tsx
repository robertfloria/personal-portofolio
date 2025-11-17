import { render } from '@testing-library/react';
import { Modal } from './modal';

describe('Modal', () => {
  it('renders without crashing', () => {
    render(
      <Modal open={true} onClose={() => {}}>
        Modal content
      </Modal>,
    );
  });
});
