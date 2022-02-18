import React from 'react';
import { ThemeProvider } from './theme';
import { EmotionReactComponent } from './emotion-react.component';

export const EmotionReactContainer: React.FC = (props) => {
  return (
    <ThemeProvider>
      <EmotionReactComponent />
    </ThemeProvider>
  );
};
