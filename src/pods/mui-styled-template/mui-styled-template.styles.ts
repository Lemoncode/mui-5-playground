import { styled, TextField } from '@mui/material';
import { DescriptionComponent } from 'common/components';

export const NonThemeStyledDescriptionComponent = styled(DescriptionComponent)`
  background-color: #001e3c;
  color: red;

  @media (min-width: 1200px) {
    color: #fff;
  }
`;

export const StyledDescriptionComponent = styled(DescriptionComponent)(
  ({ theme }) => `
  background-color: ${theme.palette.primary.main};
  color: red;
  ${theme.breakpoints.up('lg')} {
    color: ${theme.palette.primary.contrastText};
  }
`
);

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
