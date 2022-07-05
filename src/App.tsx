import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { theme } from './theme';
import { InsightsPage } from './pages/InsightsPage';

const GlobalStyle = createGlobalStyle`
  body {
    background: white;
    margin: 0;
    color: black;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif;
  }
`;

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <InsightsPage />
      </>
    </ThemeProvider>
  );
};
