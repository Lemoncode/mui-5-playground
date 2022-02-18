import React from 'react';
import { Typography } from '@mui/material';

interface Props {
  pros: string[];
  cons: string[];
}

export const ProsConsListComponent: React.FC<Props> = (props) => {
  const { pros, cons } = props;
  return (
    <div>
      <Typography variant="h2">Pros</Typography>
      <ul>
        {pros.map((pro, index) => (
          <li key={index}>
            <Typography variant="h6">{pro}</Typography>
          </li>
        ))}
      </ul>
      <Typography variant="h2">Cons</Typography>
      <ul>
        {cons.map((con, index) => (
          <li key={index}>
            <Typography variant="h6">{con}</Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};
