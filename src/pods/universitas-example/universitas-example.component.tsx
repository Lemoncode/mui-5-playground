import React from 'react';
import { Typography } from '@mui/material';
import * as innerClasses from './universitas-example.styles';

export const UniversitasComponent: React.FunctionComponent = () => {
  return (
    <div className={innerClasses.root}>
      <Typography variant="h1">Hello world!!</Typography>
    </div>
  );
};
