import React from 'react';
import { ThemeProvider } from './theme';
import { EmotionCssComponent } from './emotion-css.component';

export const EmotionCssContainer: React.FC = (props) => {
  return (
    <ThemeProvider>
      <EmotionCssComponent />
    </ThemeProvider>
  );
};
