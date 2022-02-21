import React from 'react';
import { TextField } from '@mui/material';
import { DescriptionComponent, ProsConsListComponent } from 'common/components';
import { MyLibComponent } from './components';
import { useWithTheme } from './theme';
import * as innerClasses from './emotion-css.styles';

export const EmotionCssComponent: React.FC = (props) => {
  const classes = useWithTheme(innerClasses, { color: 'yellow' });

  return (
    <div>
      <DescriptionComponent
        className={classes.description}
        component={
          <ProsConsListComponent
            pros={[
              'Easy migration for legacy projects using @emotion/css + mui-v4',
              'Zero-config SSR thanks to @emotion/react (For mui components)'
            ]}
            cons={[
              'Extra prod dependency for styles',
              'Non zero-config for SSR, we need some config using @emotion/server',
            ]}
          />
        }
      >
        {`
============================================================
  Installation
============================================================
  --------------------------------------
  npm install -P @mui/material @emotion/react @emotion/styled
  --------------------------------------
      - Necessary dependencies to work with mui v5
      - Not necessary @emotion/react @emotion/styles
        if we use unstyled components:

        \`import { ButtonUnstyled } from '@mui/base';\`

    --------------------------------------
    npm install -P @emotion/css
    npm install -D @emotion/babel-plugin
    --------------------------------------
      - @emotion/css: framework agnostic to use classes in className prop.
      - @emotion/babel-plugin: Add minification, dead code elimination, etc. -> https://emotion.sh/docs/@emotion/babel-plugin

`}
      </DescriptionComponent>
      <DescriptionComponent className={classes.description}>
        {`
============================================================
  Configuration
============================================================
  --------------------------------------
  .babelrc
  --------------------------------------
    {
      ...
      "plugins": ["@emotion"]
    }

`}
      </DescriptionComponent>
      <DescriptionComponent
        className={classes.description}
        component={
          <>
            <div className={classes.nativeElement}>
              Native element without theme
            </div>
            <ProsConsListComponent
              pros={[
                'CSS annotation',
                'Intellisense at any level (root, @media, nested classes) using VS Code extension',
                'Scoped classNames with unique ids like -> css-11n9x1i-nativeElement',
              ]}
              cons={['']}
            />
          </>
        }
      >
        {`
============================================================
  Native HTML element like div (Without theme):
============================================================
  --------------------------------------
  ./styles.ts
  --------------------------------------
    import { css } from '@emotion/css';

    export const nativeElement = css\`
      background-color: tomato;
      color: black;
      @media (min-width: 1200px) {
        color: #fff;
      }
    \`;

  --------------------------------------
  ./component.tsx
  --------------------------------------
    import React from 'react';
    import * as classes from './styles.ts';

    export const Component: React.FC = () => {
      return (
        <div className={classes.nativeElement}>
          Native element without theme
        </div>
      );
    }

`}
      </DescriptionComponent>
      <DescriptionComponent
        className={classes.description}
        component={
          <>
            <div className={classes.nativeElementWithTheme}>
              Native element with theme
            </div>
            <ProsConsListComponent
              pros={['Same as before. We still have intellisense']}
              cons={[
                'Rename classes object to innerClasses',
                'Custom hook for inject theme?',
              ]}
            />
          </>
        }
      >
        {`
============================================================
  Native HTML element like div (With theme):
============================================================
  --------------------------------------
  ./styles.ts
  --------------------------------------
    import { css } from '@emotion/css';
    import { Theme } from '@mui/material';

    export const nativeElementWithTheme = (theme: Theme) => css\`
      background-color: \${theme.palette.primary.main};
      color: red;
      \${theme.breakpoints.up('lg')} {
        color: \${theme.palette.primary.contrastText};
      }
    \`;

  --------------------------------------
  ./component.tsx
  --------------------------------------
    import React from 'react';
    import { useWithTheme } from 'core/theme';
    import * as innerClasses from './styles.ts';

    export const Component: React.FC = () => {
      const classes = useWithTheme(innerClasses);

      return (
        <div className={classes.nativeElementWithTheme}>
          Native element with theme
        </div>
      );
    }

`}
      </DescriptionComponent>
      <DescriptionComponent
        className={classes.description}
        component={
          <>
            <div className={classes.nativeElementWithProps}>
              Native element with theme and props
            </div>
            <ProsConsListComponent
              pros={[
                'Same as before',
                'Full intellinsense on props',
                'Required props on hook if defined on styles',
                'We can use only one interface for props',
                'Or split in several interfaces',
              ]}
              cons={['Same as before']}
            />
          </>
        }
      >
        {`
============================================================
  Native HTML element like div (With theme and props):
============================================================
  --------------------------------------
  ./styles.ts
  --------------------------------------
    import { css } from '@emotion/css';
    import { Theme } from '@mui/material';

    interface Props {
      color: string;
    }

    export const nativeElementWithProps = (theme: Theme, props: Props) => css\`
      background-color: \${theme.palette.primary.main};
      color: red;
      \${theme.breakpoints.up('lg')} {
        color: \${props.color};
      }
    \`;

  --------------------------------------
  ./component.tsx
  --------------------------------------
    import React from 'react';
    import { useWithTheme } from 'core/theme';
    import * as innerClasses from './styles.ts';

    export const Component: React.FC = () => {
      const classes = useWithTheme(innerClasses, { color: 'yellow' });

      return (
        <div className={classes.nativeElementWithProps}>
          Native element with theme and props
        </div>
      );
    }

`}
      </DescriptionComponent>
      <DescriptionComponent
        className={classes.description}
        component={
          <>
            <TextField
              className={classes.muiComponentGlobalClasses}
              label="Custom CSS"
            />
            <ProsConsListComponent
              pros={[
                'Same code as docs but using CSS annotation',
                'Full intellinsense at any level',
                'We can use theme like native elements',
                'We can use props like native elements',
                '<StyledEngineProvider injectFirst> (using Mui Global ClassNames)'
              ]}
              cons={[
                'Need some changes from JS to CSS annotation to copy/paste styles',
              ]}
            />
          </>
        }
      >
        {`
============================================================
  MUI Components:
  Reference: https://mui.com/components/text-fields/#customization
============================================================
  --------------------------------------
  ./styles.ts
  --------------------------------------
    import { css } from '@emotion/css';
    import { Theme } from '@mui/material';

    export const muiComponentGlobalClasses = css\`
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

  --------------------------------------
  ./component.tsx
  --------------------------------------
    import React from 'react';
    import { useWithTheme } from 'core/theme';
    import * as innerClasses from './styles.ts';

    export const Component: React.FC = () => {
      const classes = useWithTheme(innerClasses, { color: 'yellow' });

      return (
        <TextField
          className={classes.muiComponentGlobalClasses}
          label="Custom CSS"
        />
      );
    }

`}
      </DescriptionComponent>
      <DescriptionComponent
        className={classes.description}
        component={
          <>
            <MyLibComponent
              classes={{
                root: classes.myLibComponentClassesObject.root,
                paragraph: classes.myLibComponentClassesObject.paragraph,
              }}
            />
            <ProsConsListComponent
              pros={['Intellisense on classes (Same approach as mui-v4)']}
              cons={[
                'Difference between how we style mui-v5 components and our custom lib components',
              ]}
            />
          </>
        }
      >
        {`
============================================================
  Custom Component Library (className + classes props)
============================================================
  --------------------------------------
  ./my-lib-component.styles.ts
  --------------------------------------
    import { css } from '@emotion/css';

    export const root = css\`
      background-color: red;
    \`;

    export const paragraph = css\`
      color: white;
    \`;


  --------------------------------------
  ./my-lib-component.tsx
  --------------------------------------
    import React from 'react';
    import clsx from 'clsx';
    import * as innerClasses from './my-lib-component.styles';

    export interface MyLibComponentProps {
      className?: string;
      classes?: MyLibComponentClassesProps;
    }

    export interface MyLibComponentClassesProps {
      root?: string;
      paragraph?: string;
    }

    export const MyLibComponent: React.FC<MyLibComponentProps> = (props) => {
      const { classes, className } = props;
      return (
        <div
          className={clsx(
            innerClasses.root,
            className,
            classes.root
          )}
        >
          <p
            className={clsx(
              innerClasses.paragraph,
              classes.paragraph
            )}
          >
            My Lib Component paragraph
          </p>
        </div>
      );
    };

    MyLibComponent.defaultProps = {
      classes: {},
    };

============================================================
  Using component
============================================================
  --------------------------------------
  ./styles.ts
  --------------------------------------
    import { css } from '@emotion/css';
    import { Theme } from '@mui/material';

    export const myLibComponentClassesObject = {
      root: (theme: Theme) => css\`
        padding: \${theme.spacing(2)};
      \`,
      paragraph: css\`
        color: black;
      \`,
    };

  --------------------------------------
  ./component.tsx
  --------------------------------------
    import React from 'react';
    import { useWithTheme } from 'core/theme';
    import * as innerClasses from './styles.ts';

    export const Component: React.FC = () => {
      const classes = useWithTheme(innerClasses);

      return (
        <MyLibComponent
          classes={{
            root: classes.myLibComponentClassesObject.root,
            paragraph: classes.myLibComponentClassesObject.paragraph,
          }}
        />
      );
    }
`}
      </DescriptionComponent>
      <DescriptionComponent
        className={classes.description}
        component={
          <>
            <MyLibComponent className={classes.myLibComponentGlobalClasses} />
            <ProsConsListComponent
              pros={[
                "Intellisense on classNames (we don't have it on mui-v5 global classNames)",
                'Same approach as mui-v5',
              ]}
              cons={['Collision on these global classNames?']}
            />
          </>
        }
      >
        {`
============================================================
  Custom Component Library (Global ClassNames)
============================================================
  --------------------------------------
  ./my-lib-component.styles.ts (same as before)
  --------------------------------------
    import { css } from '@emotion/css';

    export const root = css\`
      background-color: red;
    \`;

    export const paragraph = css\`
      color: white;
    \`;


  --------------------------------------
  ./my-lib-component.tsx
  --------------------------------------
    import React from 'react';
    import clsx from 'clsx';
    import * as innerClasses from './my-lib-component.styles';

    export interface MyLibComponentProps {
      className?: string;
    }

    // <== TODO: Extract to common lib helper ==>
    const LIB_PREFIX = 'Mui-5-Playground';
    const COMPONENT_PREFIX = 'MyLibComponent';

    export const myLibComponentClassNames = {
      root: \`.\${LIB_PREFIX}-\${COMPONENT_PREFIX}-root\`,
      paragraph: \`.\${LIB_PREFIX}-\${COMPONENT_PREFIX}-p\`,
    };

    // Same Global ClassNames without the dot (.)
    const innerMyLibComponentClassNames = Object.entries(
      myLibComponentClassNames
    ).reduce(
      (result, [key, value]) => ({
        ...result,
        [key]: value.slice(1),
      }),
      {} as typeof myLibComponentClassNames
    );
    // <== TODO: Extract to common lib helper ==>

    export const MyLibComponent: React.FC<MyLibComponentProps> = (props) => {
      const { className } = props;
      return (
        <div
          className={clsx(
            innerClasses.root,
            className,
            innerMyLibComponentClassNames.root
          )}
        >
          <p
            className={clsx(
              innerClasses.paragraph,
              innerMyLibComponentClassNames.paragraph
            )}
          >
            My Lib Component paragraph
          </p>
        </div>
      );
    };

============================================================
  Using component
============================================================
  --------------------------------------
  ./styles.ts
  --------------------------------------
    import { css } from '@emotion/css';
    import { Theme } from '@mui/material';
    import { myLibComponentClassNames } from './components';

    export const myLibComponentGlobalClasses = (theme: Theme) => css\`
      padding: \${theme.spacing(2)};
      & \${myLibComponentClassNames.paragraph} {
        color: yellow;
      }
    \`;

  --------------------------------------
  ./component.tsx
  --------------------------------------
    import React from 'react';
    import { useWithTheme } from 'core/theme';
    import * as innerClasses from './styles.ts';

    export const Component: React.FC = () => {
      const classes = useWithTheme(innerClasses);

      return (
        <MyLibComponent className={classes.myLibComponentGlobalClasses} />
      );
    }
`}
      </DescriptionComponent>
    </div>
  );
};
