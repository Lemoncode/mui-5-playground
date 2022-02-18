import React from 'react';
import {
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
  StyledEngineProvider,
} from '@mui/material';
import { theme } from './theme';

export const ThemeProvider: React.FC = (props) => {
  const { children } = props;

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};
