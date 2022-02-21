import React from 'react';
import { ProsConsListComponent } from 'common/components';
import {
  NativeElement,
  NativeElementWithTheme,
  NativeElementWithThemeProps,
  MuiComponentGlobalClasses,
  StyledMyLibComponent,
  StyledDescriptionComponent,
} from './mui-styled-object.styles';

export const MuiStyledObjectComponent: React.FC = (props) => {
  return (
    <div>
      <StyledDescriptionComponent
        component={
          <ProsConsListComponent
            pros={[
              'Default installation for mui-v5',
              'Non more config needed',
              'Zero-config SSR thanks to @emotion/react',
            ]}
            cons={[]}
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
`}
      </StyledDescriptionComponent>
      <StyledDescriptionComponent
        component={
          <>
            <NativeElement>Native element without theme</NativeElement>
            <ProsConsListComponent
              pros={['Official way', 'Intellisense at first level']}
              cons={[
                'Object annotation',
                'Non intellisense inside media query or nested classes',
                'Force to rename the component like StyledMyComponent',
              ]}
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
    import { styled } from '@mui/material';

    export const NativeElement = styled('div')({
      backgroundColor: 'tomato',
      color: 'black',
      ['@media (min-width: 1200px)']: {
        color: '#fff',
      },
    });

  --------------------------------------
  ./component.tsx
  --------------------------------------
    import React from 'react';
    import { NativeElement } from './styles.ts';

    export const Component: React.FC = () => {
      return (
        <NativeElement>
          Native element without theme
        </NativeElement>
      );
    }

`}
      </StyledDescriptionComponent>
      <StyledDescriptionComponent
        component={
          <>
            <NativeElementWithTheme>
              Native element with theme
            </NativeElementWithTheme>
            <ProsConsListComponent
              pros={[
                'Same as before (we still have intellisens only at 1st level',
                'Nothing extra for provide theme',
              ]}
              cons={['Same as before']}
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
  import { styled } from '@mui/material';

  export const NativeElementWithTheme = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: 'red',
    [theme.breakpoints.up('lg')]: {
      color: theme.palette.primary.contrastText,
    },
  }));

--------------------------------------
./component.tsx
--------------------------------------
  import React from 'react';
  import { NativeElementWithTheme } from './styles.ts';

  export const Component: React.FC = () => {
    return (
      <NativeElementWithTheme>
        Native element with theme
      </NativeElementWithTheme>
    );
  }

`}
      </StyledDescriptionComponent>

      <StyledDescriptionComponent
        component={
          <>
            <NativeElementWithThemeProps color="yellow">
              Native element with theme and props
            </NativeElementWithThemeProps>
            <ProsConsListComponent
              pros={['Same as before']}
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
    import { styled } from '@mui/material';

    interface Props {
      color: string;
    }

    export const NativeElementWithThemeProps = styled('div')<Props>(({ theme, color }) => ({
      backgroundColor: theme.palette.primary.main,
      color: 'red',
      [theme.breakpoints.up('lg')]: {
        color,
      },
    }));

  --------------------------------------
  ./component.tsx
  --------------------------------------
    import React from 'react';
    import { NativeElementWithThemeProps } from './styles.ts';

    export const Component: React.FC = () => {
      return (
        <NativeElementWithThemeProps color="yellow">
          Native element with theme and props
        </NativeElementWithThemeProps>
      );
    }

`}
      </StyledDescriptionComponent>

      <StyledDescriptionComponent
        component={
          <>
            <MuiComponentGlobalClasses label="Custom CSS" />
            <ProsConsListComponent
              pros={['Same as before', 'Official docs examples']}
              cons={['Same as before']}
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
    import { styled, TextField } from '@mui/material';

    export const MuiComponentGlobalClasses = styled(TextField)({
      '& label.Mui-focused': {
        color: 'green',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'red',
        },
        '&:hover fieldset': {
          borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'green',
        },
      },
    });

    --------------------------------------
    ./app.ts
    --------------------------------------
    import { MuiComponentGlobalClasses } from './styles.ts'

    export const App: React.FC<Props> = (props) => {
      const { className, children } = props;
      return <MuiComponentGlobalClasses label='Custom CSS' />;
    };
`}
      </StyledDescriptionComponent>

      <StyledDescriptionComponent
        component={
          <>
            <StyledMyLibComponent />
            <ProsConsListComponent
              pros={['Same as before', 'Official docs examples']}
              cons={['Same as before']}
            />
          </>
        }
      >
        {`
============================================================
  Custom Component Library (official way)
============================================================
  --------------------------------------
  ./my-lib-component.styles.ts
  --------------------------------------
    import { styled } from '@mui/material';

    const LIB_PREFIX = 'Mui-5-Playground';
    const COMPONENT_PREFIX = 'MyLibComponent';

    export const myLibComponentClassNames = {
      root: \`\${LIB_PREFIX}-\${COMPONENT_PREFIX}-root\`,
      paragraph: \`\${LIB_PREFIX}-\${COMPONENT_PREFIX}-paragraph\`,
    };

    export const Root = styled('div')({
      [\`&.\${myLibComponentClassNames.root}\`]: {
        backgroundColor: 'red',
      },
      [\`& .\${myLibComponentClassNames.paragraph}\`]: {
        color: 'white',
      },
    });


  --------------------------------------
  ./my-lib-component.tsx
  --------------------------------------
    import React from 'react';
    import clsx from 'clsx';
    import { Root, myLibComponentClassNames } from './my-lib-component.styles';

    export interface MyLibComponentProps {
      className?: string;
    }

    export const MyLibComponent: React.FC<MyLibComponentProps> = (props) => {
      const { className } = props;
      return (
        <Root className={clsx(className, myLibComponentClassNames.root)}>
          <p className={myLibComponentClassNames.paragraph}>
            My Lib Component paragraph
          </p>
        </Root>
      );
    };

============================================================
  Using component
============================================================
  --------------------------------------
  ./styles.ts
  --------------------------------------
    import { styled } from '@mui/material';
    import { MyLibComponent, myLibComponentClassNames } from './components';

    export const StyledMyLibComponent = styled(MyLibComponent)(({ theme }) => ({
      [\`&.\${myLibComponentClassNames.root}\`]: {
        padding: theme.spacing(2),
      },
      [\`& .\${myLibComponentClassNames.paragraph}\`]: {
        color: 'black',
      },
    }));


  --------------------------------------
  ./component.tsx
  --------------------------------------
    import React from 'react';
    import { StyledMyLibComponent } from './styles.ts';

    export const Component: React.FC = () => {
      return (
        <StyledMyLibComponent />
      );
    }
`}
      </StyledDescriptionComponent>
    </div>
  );
};
