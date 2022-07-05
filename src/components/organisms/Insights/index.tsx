import React from 'react';
import styled from 'styled-components';

import { StyledHeading } from '../../atoms/Heading';
import { Card } from '../../molecules/Card';

import { theme } from '../../../theme';
import { insightsData } from '../../../assets/insightData';
import { Status } from '../../../utils/getTrackByInsightType';

interface InsightsProps {
  publicInformationTrackStatus: Status;
  creditUtilisationTrackStatus: Status;
  electoralRollnTrackStatus: Status;
}

export const Insights: React.FC<InsightsProps> = ({
  publicInformationTrackStatus,
  creditUtilisationTrackStatus,
  electoralRollnTrackStatus,
}) => {
  return (
    <InsightsContainer>
      <StyledHeading variant="h1">Insights</StyledHeading>
      <CardsContainer>
        <Card
          trackStatus={publicInformationTrackStatus}
          insightData={insightsData.Public_information}
        />
        <Card
          trackStatus={creditUtilisationTrackStatus}
          insightData={insightsData.Credit_utilisation}
        />
        <Card trackStatus={electoralRollnTrackStatus} insightData={insightsData.Electoral_role} />
      </CardsContainer>
    </InsightsContainer>
  );
};

const InsightsContainer = styled.div`
  padding: 30px 60px;
  background-color: ${theme.colors.gallery};
  width: 100%;
  box-sizing: border-box;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow-x: scroll;

  @media (min-width: ${(p) => p.theme.breakpoints.xs}) and (max-width: ${(p) =>
      p.theme.breakpoints.sm}) {
    flex-direction: column;
  }

  @media (min-width: ${(p) => p.theme.breakpoints.lg}) {
    overflow-x: auto;
    flex-wrap: wrap;
  }

  @media (min-width: ${(p) => p.theme.breakpoints.xl}) {
    flex-wrap: nowrap;
  }
`;
