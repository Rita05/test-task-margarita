import React from 'react';
import { AppContainer } from './App.styled';

import { HistoricalDatesContainer } from '../widgets/historical-dates/ui';

export const App = () => {
  return (
    <AppContainer>
      <HistoricalDatesContainer />
    </AppContainer>
  );
}

