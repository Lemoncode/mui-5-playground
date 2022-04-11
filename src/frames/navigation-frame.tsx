import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from '@mui/material';
import { linkRoutes } from 'core/router';
import * as classes from './navigation-frame.styles';

const LinkTab = (props) => {
  return <Tab component={Link} {...props} />;
};

export const NavigationFrame: React.FC = (props) => {
  const { children } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <Tabs value={value} onChange={handleChange}>
        <LinkTab label="MUI Styled Object" to={linkRoutes.muiStyledObject} />
        <LinkTab
          label="MUI Styled Template"
          to={linkRoutes.muiStyledTemplate}
        />
        <LinkTab label="Emotion React" to={linkRoutes.emotionReact} />
        <LinkTab label="Emotion CSS" to={linkRoutes.emotionCss} />
        <LinkTab
          label="Universitas Example"
          to={linkRoutes.universitasExample}
        />
      </Tabs>
      {children}
    </div>
  );
};
