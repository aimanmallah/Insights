import styled, { css } from 'styled-components';

import { theme } from '../../../theme';

export type HeadingVariant = 'h1' | 'h2' | 'h3';

interface HeadingProps {
  className?: string;
  children?: string;
  variant: HeadingVariant;
}

export const getHeadingVariantStyles = (variant: HeadingVariant) => {
  switch (variant) {
    case 'h1':
      return {
        'font-size': theme.fontSizes.xl,
      };
    case 'h2':
      return {
        'font-size': theme.fontSizes.lg,
      };

    case 'h3':
      return {
        'font-size': theme.fontSizes.md,
      };
  }
};

const Heading = ({ variant, className, children }: HeadingProps) => {
  const Tag = variant;

  return <Tag className={className}>{children}</Tag>;
};

export const StyledHeading = styled(Heading)`
  color: rgb(38, 54, 72);
  font-weight: ${theme.fontWeights.bold};
  height: 20px;
  line-height: 20px;
  margin: 0;
  ${(props) => css(getHeadingVariantStyles(props.variant))}
`;
