import React from 'react';
import { Typography, Theme, useMediaQuery } from '@mui/material';
import { useWithTheme } from './theme/theme.hooks';
import * as innerClasses from './universitas-example.styles';

interface Props {}

export const UniversitasComponent: React.FunctionComponent<Props> = () => {
  const ww = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
  const classes = useWithTheme(innerClasses, {
    w: ww,
  });

  return (
    <div className={classes.root}>
      <Typography variant="h1">Hello world!!</Typography>
    </div>
  );
};
