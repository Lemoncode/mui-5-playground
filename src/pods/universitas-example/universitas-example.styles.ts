import { css } from '@emotion/css';
import { Theme, cardHeaderClasses, cardContentClasses } from '@mui/material';

interface Props {
  isTrue: boolean;
}

export const root = (theme: Theme, props: Props) => css`
  color: ${theme.palette.primary.main};
  background-color: ${props.isTrue ? 'black' : 'yellow'};
`;

export const mainCard = css`
  height: max-content;
  width: max-content;
  background-color: red;
`;

export const secondaryCard = css`
  height: max-content;
  width: max-content;
  background-color: blue;
`;

export const cardHeader = css`
  & .${cardHeaderClasses.title} {
    color: white;
  }
`;

export const cardContent = css`
  background-color: whitesmoke;
`;
