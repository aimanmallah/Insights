import styled, { DefaultTheme } from 'styled-components';

import { theme } from '../../../theme';

type fontSize = keyof DefaultTheme['fontSizes'];

interface TextProps {
  className?: string;
  fontSize: fontSize;
}

export const StyledText = styled.p<TextProps>`
  font-size: ${(p) => theme.fontSizes[p.fontSize]};

  font-weight: ${theme.fontWeights.normal};
  color: rgb(116, 127, 138);
  line-height: calc(${(p) => theme.fontSizes[p.fontSize]} * 1.2);
  margin: 0;
`;
