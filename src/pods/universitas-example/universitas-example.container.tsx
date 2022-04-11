import React from 'react';
import { ThemeProvider } from './theme';
import { UniversitasComponent } from './universitas-example.component';

export const UniversitasContainer: React.FunctionComponent = () => {
  return (
    <ThemeProvider>
      <UniversitasComponent />
    </ThemeProvider>
  );
};
