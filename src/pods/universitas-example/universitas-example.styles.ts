import { css } from '@emotion/css';
import { Theme } from '@mui/material';

interface Props {
  w: boolean;
}

export const root = (theme: Theme, props: Props) => css`
  color: red;
  background-color: ${props.w ? 'black' : 'yellow'};
`;
