import { css } from '@emotion/css';
import {
  Theme,
  cardClasses,
  cardHeaderClasses,
  cardContentClasses,
  paperClasses,
} from '@mui/material';

interface Props {
  w: boolean;
}

export const root = (theme: Theme, props: Props) => css`
  color: ${theme.palette.primary.main};
  background-color: ${props.w ? 'black' : 'yellow'};
`;

export const cardContent = css`
  &.${paperClasses.root}.${cardClasses.root} {
    background-color: yellow;
    & .${paperClasses.root} {
      background-color: blue;
    }
  }
  &.${paperClasses.root} {
    background-color: pink;
  }

  & .${cardClasses.root} {
    height: max-content;
    width: max-content;
    background-color: red;
  }

  & .${cardHeaderClasses.title} {
    color: white;
  }

  & .${cardContentClasses.root} {
    background-color: whitesmoke;
  }
`;
