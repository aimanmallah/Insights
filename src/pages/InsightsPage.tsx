import { useState, useEffect } from 'react';

import { Insights } from '../components/organisms/Insights';

import apiClient from '../api/http-common';
import { Response } from '../api/types';
import { getTrackStatusByInsightType, InsightStatuses } from '../utils/getTrackByInsightType';

export const InsightsPage = (): JSX.Element => {
  const [statuses, setStatuses] = useState<InsightStatuses>();

  useEffect(() => {
    apiClient
      .get('b/6107fbe9f14b8b153e05e714')
      .then(({ data }) => {
        setStatuses(getTrackStatusByInsightType(data as Response));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (typeof statuses === 'undefined') {
    return <div></div>;
  }

  return (
    <>
      <Insights
        publicInformationTrackStatus={statuses.publicInformation}
        creditUtilisationTrackStatus={statuses.creditUtilisation}
        electoralRollnTrackStatus={statuses.electoralRoll}
      />
    </>
  );
};
