interface insightData {
  Header: string;
  Body: string;
  Impact: string;
}

interface insightsData {
  [key: string]: insightData;
}

export const insightsData: insightsData = {
  Public_information: {
    Header: 'Public information',
    Body: 'Bankruptcies and individual voluntary arrangements can damage your score',
    Impact: 'High Impact',
  },
  Credit_utilisation: {
    Header: 'Credit utilisation',
    Body: 'Using more than 50% of your available credit can damage your score',
    Impact: 'Medium Impact',
  },
  Electoral_role: {
    Header: 'Electoral roll',
    Body: 'Being on the electoral roll can improve your score',
    Impact: 'Medium Impact',
  },
};
