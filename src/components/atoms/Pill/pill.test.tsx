import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { getPillVariantStyles, PillVariant, Pill } from './index';

describe('getPillVariantStyles', () => {
  const variants = [
    {
      variant: 'off track',
      returnedStyle: { 'background-color': '#FDEFE2', color: '#764C25' },
    },
    { variant: 'on track', returnedStyle: { 'background-color': '#DDF9EA', color: '#15693B' } },
    { variant: 'default', returnedStyle: { 'background-color': '#EEEFF1', color: '#253648' } },
  ];

  it.each(variants)('returns the correct styling', ({ variant, returnedStyle }) => {
    expect(getPillVariantStyles(variant as PillVariant)).toStrictEqual(returnedStyle);
  });
});

describe('Pill', () => {
  it('should render the text provided to it as a child', () => {
    render(<Pill variant="default">Pill Text</Pill>);

    expect(screen.getByText('Pill Text')).toBeInTheDocument();
  });
});
