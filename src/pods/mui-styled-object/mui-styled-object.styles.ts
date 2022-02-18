import { styled, TextField } from '@mui/material';
import { DescriptionComponent } from 'common/components';

export const StyledDescriptionComponent = styled(DescriptionComponent)(
  ({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: 'red',
    [theme.breakpoints.up('lg')]: {
      color: theme.palette.primary.contrastText,
    },
  })
);

export const TextFieldComponent = styled(TextField)({
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
