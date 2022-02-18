import React from 'react';
import { ThemeProvider } from './theme';
import { MuiStyledObjectComponent } from './mui-styled-object.component';

export const MuiStyledObjectContainer: React.FC = (props) => {
  return (
    <ThemeProvider>
      <MuiStyledObjectComponent />
    </ThemeProvider>
  );
};
