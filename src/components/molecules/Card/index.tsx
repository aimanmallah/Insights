import React from 'react';
import styled from 'styled-components';

import { Pill, PillVariant } from '../../atoms/Pill';
import { StyledHeading } from '../../atoms/Heading';
import { StyledText } from '../../atoms/Text';

import { useWindowSize } from '../../../hooks/useWindowSize';
import { theme } from '../../../theme';

interface CardProps {
  insightData: {
    Header: string;
    Body: string;
    Impact: string;
  };
  trackStatus: PillVariant;
}

export const Card: React.FC<CardProps> = ({ insightData, trackStatus }) => {
  const { width } = useWindowSize();

  const largeImpactBar = width < 1024;

  return (
    <CardContainer>
      <PillContainer>
        <Pill variant={trackStatus}>{trackStatus}</Pill>
        {!largeImpactBar && (
          <Pill data-testid="pill-sm" variant="default">
            {insightData.Impact}
          </Pill>
        )}
      </PillContainer>
      <TextContainer>
        <StyledHeading variant="h3">{insightData.Header}</StyledHeading>
        <StyledText fontSize="md">{insightData.Body}</StyledText>
      </TextContainer>
      {largeImpactBar && (
        <PillContainer>
          <Pill variant="default" data-testid="pill-lg" isFullWidth>
            {insightData.Impact}
          </Pill>
        </PillContainer>
      )}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  box-shadow: ${(p) => p.theme.shadows};
  margin: 4px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  overflow: visible;
  padding: 16px;

  @media (min-width: ${theme.breakpoints.sm}) {
    width: 178px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    padding: 24px;
    width: 265px;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    padding: 24px;
    width: 300px;
  }

  @media (min-width: ${theme.breakpoints.xl}) {
    padding: 24px;
    width: 337px;
  }
`;

const PillContainer = styled.div`
  width: 100%;
`;

const TextContainer = styled.div`
  margin-top: 24px;
  @media (min-width: ${theme.breakpoints.sm}) {
    margin-bottom: 70px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: 24px;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    margin-bottom: 0;
  }
`;
