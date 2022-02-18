import React from 'react';
import { ThemeProvider } from './theme';
import { MuiStyledTemplateComponent } from './mui-styled-template.component';

export const MuiStyledTemplateContainer: React.FC = (props) => {
  return (
    <ThemeProvider>
      <MuiStyledTemplateComponent />
    </ThemeProvider>
  );
};
