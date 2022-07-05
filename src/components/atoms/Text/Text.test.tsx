import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { StyledText } from './index';

describe('Text', () => {
  it('renders text passed to it as a child', () => {
    render(<StyledText fontSize="lg">This is text</StyledText>);

    expect(screen.getByText('This is text')).toBeInTheDocument();
  });
});
