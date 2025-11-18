import { render } from '@testing-library/react';
import { Modal } from './modal';

describe('Modal', () => {
  it('renders without crashing', () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        Modal content
      </Modal>,
    );
  });
});
