import React from 'react';
import { ProsConsListComponent } from 'common/components';
import {
  StyledDescriptionComponent,
  TextFieldComponent,
} from './mui-styled-template.styles';

export const MuiStyledTemplateComponent: React.FC = (props) => {
  return (
    <div>
      <StyledDescriptionComponent
        component={
          <ProsConsListComponent
            pros={[
              'Css annotation',
              'Intellisense at any level using VSCode Extension',
            ]}
            cons={['Non intellisense at any level using theme']}
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

    export const StyledDiv = styled(div)\`
      background-color: #001e3c;
      color: red;

      @media (min-width: 1200px) {
        color: #fff;
      }
  \`;

    --------------------------------------
    With theme
    --------------------------------------

    import { styled } from '@mui/material';

    export const StyledDiv = styled(div)(
      ({ theme }) => \`
        background-color: \${theme.palette.primary.main};
        color: red;
        \${theme.breakpoints.up('lg')} {
          color: \${theme.palette.primary.contrastText};
        }
    \`
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
