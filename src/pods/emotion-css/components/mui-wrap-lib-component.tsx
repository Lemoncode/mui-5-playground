import React from 'react';
import clsx from 'clsx';
import { Alert, AlertProps } from '@mui/material';
import * as classes from './mui-wrap-lib-component.styles';

interface Props extends AlertProps {}

export const MuiWrapLibComponent: React.FC<Props> = (props) => {
  const { className, ...rest } = props;
  return <Alert className={clsx(classes.root, className)} {...rest} />;
};
