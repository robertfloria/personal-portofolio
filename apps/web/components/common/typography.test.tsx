import { render, screen } from '@testing-library/react';
import { Heading, Text } from './typography';

describe('Typography', () => {
  it('renders Heading and Text', () => {
    render(<>
      <Heading variant="h2">Hello Heading</Heading>
      <Text variant="body">Hello Text</Text>
    </>);
    expect(screen.getByText(/Hello Heading/i)).toBeInTheDocument();
    expect(screen.getByText(/Hello Text/i)).toBeInTheDocument();
  });
});