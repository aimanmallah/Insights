import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { getHeadingVariantStyles, StyledHeading, HeadingVariant } from './index';

describe('getHeadingVariantStyled', () => {
  const variants = [
    { variant: 'h1', returnedStyle: { 'font-size': '20px' } },
    { variant: 'h2', returnedStyle: { 'font-size': '16px' } },
    { variant: 'h3', returnedStyle: { 'font-size': '14px' } },
  ];

  it.each(variants)('returns the correct styling', ({ variant, returnedStyle }) => {
    expect(getHeadingVariantStyles(variant as HeadingVariant)).toStrictEqual(returnedStyle);
  });
});

describe('Heading', () => {
  it('should return the correct tag depending on variant prop', () => {
    render(<StyledHeading variant="h3">This is a heading</StyledHeading>);

    expect(screen.getByText('This is a heading')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toHaveTextContent('This is a heading');
  });
});
