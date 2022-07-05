import styled, { css } from 'styled-components';
import { theme } from '../../../theme';

export type PillVariant = 'off track' | 'on track' | 'default';

interface PillProps {
  className?: string;
  variant: PillVariant;
  isFullWidth?: boolean;
}

export const getPillVariantStyles = (variant: PillVariant) => {
  switch (variant) {
    case 'off track':
      return {
        color: theme.colors.OrangePillText,
        'background-color': theme.colors.OrangePillBackground,
      };
    case 'on track':
      return {
        color: theme.colors.GreenPillText,
        'background-color': theme.colors.GreenPillBackground,
      };
    default:
      return {
        color: theme.colors.midnight,
        'background-color': theme.colors.GrayPillBackground,
      };
  }
};

export const Pill = styled.div<PillProps>`
  ${(props) => css(getPillVariantStyles(props.variant))}

  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.normal};
  padding: ${`0 ${theme.spacing.md}`};
  height: ${theme.spacing.xxl};
  line-height: ${theme.spacing.xxl};
  border-radius: ${theme.borderRadii.md};
  width: ${(p) => (p.isFullWidth ? '100%' : '')};
  margin-right: ${(p) => (p.isFullWidth ? 0 : '8px')};

  text-transform: uppercase;
  text-align: center;
  display: inline-block;
  box-sizing: border-box;
`;
