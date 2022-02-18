import { css } from '@emotion/css';
import { Theme } from '@mui/material';
import { myLibComponentClassNames } from './components';

export const nativeElement = css`
  background-color: tomato;
  color: black;
  @media (min-width: 1200px) {
    color: #fff;
  }
`;

export const nativeElementWithTheme = (theme: Theme) => css`
  background-color: ${theme.palette.primary.main};
  color: red;
  ${theme.breakpoints.up('lg')} {
    color: ${theme.palette.primary.contrastText};
  }
`;

interface Props {
  color: string;
}

export const nativeElementWithProps = (theme: Theme, props: Props) => css`
  background-color: ${theme.palette.primary.main};
  color: red;
  ${theme.breakpoints.up('lg')} {
    color: ${props.color};
  }
`;

export const muiComponentGlobalClasses = css`
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

export const myLibComponentClassesObject = {
  root: (theme: Theme) => css`
    padding: ${theme.spacing(2)};
  `,
  paragraph: css`
    color: black;
  `,
};

export const myLibComponentGlobalClasses = (theme: Theme) => css`
  padding: ${theme.spacing(2)};
  & ${myLibComponentClassNames.paragraph} {
    color: yellow;
  }
`;

export const description = (theme: Theme) => css`
  background-color: ${theme.palette.primary.main};
  color: ${theme.palette.primary.contrastText};
`;
