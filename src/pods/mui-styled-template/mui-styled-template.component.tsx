import React from 'react';
import { ProsConsListComponent } from 'common/components';
import {
  NativeElement,
  NativeElementWithTheme,
  StyledDescriptionComponent,
} from './mui-styled-template.styles';

export const MuiStyledTemplateComponent: React.FC = (props) => {
  return (
    <div>
      <StyledDescriptionComponent
        component={
          <>
            <NativeElement>Native element without theme</NativeElement>
            <NativeElementWithTheme>
              Native element with theme
            </NativeElementWithTheme>
            <ProsConsListComponent
              pros={[
                'Css annotation',
                'Intellisense at any level using VSCode Extension',
              ]}
              cons={['Non intellisense at any level using theme']}
            />
          </>
        }
      >
        {`

  Native HTML element like div:
  ======================================
    --------------------------------------
    Without theme
    --------------------------------------

    import { styled } from '@mui/material';

    export const NativeElement = styled('div')\`
      background-color: tomato;
      color: black;
      @media (min-width: 1200px) {
        color: #fff;
      }
    \`;

    --------------------------------------
    With theme
    --------------------------------------

    import { styled } from '@mui/material';

    export const NativeElementWithTheme = styled('div')(
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
    </div>
  );
};
