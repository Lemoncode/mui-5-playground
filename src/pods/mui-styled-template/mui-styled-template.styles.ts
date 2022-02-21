import { styled } from '@mui/material';
import { DescriptionComponent } from 'common/components';

export const NativeElement = styled('div')`
  background-color: tomato;
  color: black;
  @media (min-width: 1200px) {
    color: #fff;
  }
`;

export const NativeElementWithTheme = styled('div')(
  ({ theme }) => `
background-color: ${theme.palette.primary.main};
  color: red;
  ${theme.breakpoints.up('lg')} {
    color: ${theme.palette.primary.contrastText};
  }
`
);

export const StyledDescriptionComponent = styled(DescriptionComponent)(
  ({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: 'red',
    [theme.breakpoints.up('lg')]: {
      color: theme.palette.primary.contrastText,
    },
  })
);
