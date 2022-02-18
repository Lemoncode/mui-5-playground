import { css } from '@emotion/css';
import { Theme } from '@mui/material';
import { exposeStylesClasses } from './components';
import { theme } from './theme';

export const exposeStyles = {
  root: css`
    background-color: blue;
  `,
  p: css`
    color: black;
  `,
};

export const usingGlobalCssNames = css`
  background-color: green;

  & ${exposeStylesClasses.p} {
    color: black;
  }
`;

export const textFieldGlobalClasses = css`
  & label.Mui-focused {
    color: green;
  }

  & .MuiInput-underline:after {
    border-bottom-color: green;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: red;
    }

    &:hover fieldset {
      border-color: yellow;
    }

    &.Mui-focused fieldset {
      border-color: green;
    }
  }
`;

export const textFieldObjectClasses = css`
  color: green;
`;

export const usingThemeFromImportClasses = css`
  color: ${theme.palette.primary.main};
`;

interface Props {
  color: string;
}

export const usingThemeFromHookClasses = (theme: Theme, props: Props) => css`
  color: ${theme.palette.primary.main};
`;
