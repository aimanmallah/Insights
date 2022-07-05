import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';

import { Card } from '.';

describe('Card', () => {
  const mockInsightData = {
    Header: 'Public information',
    Body: 'Bankruptcies and individual voluntary arrangements can damage your score',
    Impact: 'High Impact',
  };

  const mockPillVariant = 'on track';

  it('renders insightData when passed as a prop', () => {
    render(<Card insightData={mockInsightData} trackStatus={mockPillVariant} />);

    expect(screen.getByText(mockInsightData.Header)).toBeInTheDocument();
    expect(screen.getByText(mockInsightData.Body)).toBeInTheDocument();
    expect(screen.getByText(mockInsightData.Impact)).toBeInTheDocument();
  });

  it('renders the small impact pill when the screen width < 375px', () => {
    render(<Card insightData={mockInsightData} trackStatus={mockPillVariant} />);

    expect(screen.getByTestId('pill-sm')).toBeInTheDocument();
    expect(screen.queryByTestId('pill-lg')).not.toBeInTheDocument();

    act(() => {
      global.outerWidth = 1000;
      global.dispatchEvent(new Event('resize'));
    });

    expect(screen.getByTestId('pill-lg')).toBeInTheDocument();
    expect(screen.queryByTestId('pill-sm')).not.toBeInTheDocument();
  });
});
