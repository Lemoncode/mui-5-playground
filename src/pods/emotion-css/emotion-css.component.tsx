import React from 'react';
import { TextField } from '@mui/material';
import { DescriptionComponent } from 'common/components';
import { ExposeStylesComponent } from './components';
import { useWithTheme } from './theme';
import * as innerClasses from './emotion-css.styles';

export const EmotionCssComponent: React.FC = (props) => {
  const classes = useWithTheme(innerClasses, { color: 'test' });

  return (
    <div>
      <DescriptionComponent
        component={
          <ExposeStylesComponent
            classes={{
              root: classes.exposeStyles.root,
              p: classes.exposeStyles.p,
            }}
          />
        }
      >
        {`
import { css } from '@emotion/css';

export const root = css\`
  background-color: red;
\`;

export const p = css\`
  color: white;
\`;

      `}
      </DescriptionComponent>
      <DescriptionComponent
        component={
          <ExposeStylesComponent className={classes.usingGlobalCssNames} />
        }
      >
        {`
import { css } from '@emotion/css';

export const usingGlobalCssNames = css\`
  background-color: green;

  & \${exposeStylesClasses.p} {
    color: black;
  }
\`;

      `}
      </DescriptionComponent>
      <DescriptionComponent
        component={
          <TextField
            className={classes.textFieldGlobalClasses}
            label="Custom CSS"
          />
        }
      >
        {`
export const textFieldClasses = css\`
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
\`;

      `}
      </DescriptionComponent>
      <DescriptionComponent
        component={
          <TextField
            InputLabelProps={{
              classes: {
                root: classes.textFieldObjectClasses,
              },
            }}
            label="Custom CSS"
          />
        }
      >
        {`
        export const textFieldObjectClasses = css\`
          color: green;
        \`;

        <TextField
          InputLabelProps={{
            classes: {
              root: classes.textFieldObjectClasses,
            },
          }}
          label="Custom CSS"
        />

        export const ThemeProvider: React.FC = (props) => {
          const { children } = props;

          return (
            <StyledEngineProvider injectFirst>
              ...
            </StyledEngineProvider>
          );
        };
      `}
      </DescriptionComponent>
      <DescriptionComponent
        component={
          <ExposeStylesComponent
            classes={{
              p: classes.usingThemeFromImportClasses,
            }}
          />
        }
      >
        {`
import { css } from '@emotion/css';
import { theme } from './theme';

export const usingThemeFromImportClasses = css\`
  color: \${theme.palette.primary.main};
\`;
      `}
      </DescriptionComponent>
      <DescriptionComponent
        component={
          <ExposeStylesComponent
            classes={{
              p: classes.usingThemeFromHookClasses,
            }}
          />
        }
      >
        {`
import { css } from '@emotion/css';

export const usingThemeFromHookClasses = (theme: Theme) => css\`
  color: \${theme.palette.primary.main};
\`;


---------------

import { useWithTheme } from './theme';

const classes = useWithTheme(innerClasses);

      `}
      </DescriptionComponent>
    </div>
  );
};
