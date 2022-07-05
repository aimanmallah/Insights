import { Response } from '../api/types';

export enum Status {
  On_Track = 'on track',
  Off_Track = 'off track',
}

const getTrackStatusForPublicInformation = (data: Response) => {
  return data.personal.publicInfo.courtAndInsolvencies.length > 0
    ? Status.Off_Track
    : Status.On_Track;
};

const getTrackStatusForElectoralRoll = (data: Response) => {
  return data.personal.electoralRoll.some((value) => value.current)
    ? Status.On_Track
    : Status.Off_Track;
};

const getTrackStatusForCreditUtilisation = (data: Response) => {
  return data.accounts
    .filter((account) => account.accountCategory === 'credit_cards')
    .some((account) => {
      const balance = account.overview.balance.amount;
      const limit = account.overview.limit.amount;

      return balance > limit * 0.5;
    })
    ? Status.Off_Track
    : Status.On_Track;
};

export const getTrackStatusByInsightType = (data: Response) => {
  return {
    publicInformation: getTrackStatusForPublicInformation(data),
    creditUtilisation: getTrackStatusForCreditUtilisation(data),
    electoralRoll: getTrackStatusForElectoralRoll(data),
  };
};

export type InsightStatuses = ReturnType<typeof getTrackStatusByInsightType>;
