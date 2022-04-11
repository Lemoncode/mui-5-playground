import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { NavigationFrame } from 'frames';
import {
  MuiStyledObjectScene,
  MuiStyledTemplateScene,
  EmotionReactScene,
  EmotionCssScene,
  UniversitasScene,
} from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <NavigationFrame>
        <Routes>
          <Route path={switchRoutes.root} element={<MuiStyledObjectScene />} />
          <Route
            path={switchRoutes.muiStyledObject}
            element={<MuiStyledObjectScene />}
          />
          <Route
            path={switchRoutes.muiStyledTemplate}
            element={<MuiStyledTemplateScene />}
          />
          <Route
            path={switchRoutes.emotionReact}
            element={<EmotionReactScene />}
          />
          <Route path={switchRoutes.emotionCss} element={<EmotionCssScene />} />
          <Route
            path={switchRoutes.universitasExample}
            element={<UniversitasScene />}
          />
        </Routes>
      </NavigationFrame>
    </HashRouter>
  );
};
