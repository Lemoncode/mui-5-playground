import React from 'react';
import { ProsConsListComponent } from 'common/components';
import {
  StyledDescriptionComponent,
  TextFieldComponent,
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
          <ProsConsListComponent
            pros={['Official way', 'Intellisense at first level']}
            cons={[
              'Object annotation',
              'Non intellisense inside media query or nested classes',
            ]}
          />
        }
      >
        {`

  Native HTML element like div:
  ======================================
    --------------------------------------
    Without theme
    --------------------------------------

    import { styled } from '@mui/material';

    export const StyledDiv = styled(div)({
      backgroundColor: '#001e3c',
      color: '#fff',
    });

    --------------------------------------
    With theme
    --------------------------------------

    import { styled } from '@mui/material';

    export const StyledDiv = styled(div)(
      ({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        color: 'red',
        [theme.breakpoints.up('lg')]: {
          color: theme.palette.primary.contrastText,
        },
      })
    );

      `}
      </StyledDescriptionComponent>

      <StyledDescriptionComponent
        component={
          <ProsConsListComponent
            pros={[]}
            cons={[
              'Force to rename the component like StyledMyComponent',
              "We cannot forget use this className here because if not, it doesn't apply the style",
            ]}
          />
        }
      >
        {`

  Custom React Component (with native HTML elements):
  ======================================

    --------------------------------------
    ./common/component/my-component.ts
    --------------------------------------

    interface Props {
      className?: string;
    }

    export const MyComponent: React.FC<Props> = (props) => {
      const { className, children } = props;
      return (
        <div className={className}> // <----- Don't forget it
          {children}
        </div>
      );
    };

    --------------------------------------
    ./styles.ts
    --------------------------------------
      import { styled } from '@mui/material';
      import { MyComponent } from 'common/component';

      export const StyledMyComponent = styled(MyComponent)(
        ({ theme }) => ({
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        })
      );



      `}
      </StyledDescriptionComponent>

      <StyledDescriptionComponent
        component={
          <>
            <TextFieldComponent label="Custom CSS" />
            <ProsConsListComponent
              pros={['']}
              cons={["We don't have intellisense when we use nested classes"]}
            />
          </>
        }
      >
        {`

  Styling MUI Components:
  ======================================

    --------------------------------------
    ./styles.ts
    --------------------------------------
    import { styled, TextField } from '@mui/material';

    export const TextFieldComponent = styled(TextField)(({ theme }) => ({
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
    }));

    --------------------------------------
    ./app.ts
    --------------------------------------
    import { TextFieldComponent } from './styles.ts'

    export const App: React.FC<Props> = (props) => {
      const { className, children } = props;
      return <TextFieldComponent label='Custom CSS' />;
    };
      `}
      </StyledDescriptionComponent>
    </div>
  );
};
