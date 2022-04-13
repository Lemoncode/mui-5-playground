import React from 'react';
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  Theme,
  useMediaQuery,
} from '@mui/material';
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
      <Card className={innerClasses.mainCard}>
        <CardHeader className={innerClasses.cardHeader} title="Card Header" />
        <CardContent className={innerClasses.cardContent}>
          <Card className={innerClasses.secondaryCard}>
            <Typography variant="h2">Card Content</Typography>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};
