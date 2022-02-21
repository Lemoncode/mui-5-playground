import { styled, TextField } from '@mui/material';
import { DescriptionComponent } from 'common/components';
import { MyLibComponent, myLibComponentClassNames } from './components';

export const NativeElement = styled('div')({
  backgroundColor: 'tomato',
  color: 'black',
  ['@media (min-width: 1200px)']: {
    color: '#fff',
  },
});

export const NativeElementWithTheme = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'red',
  [theme.breakpoints.up('lg')]: {
    color: theme.palette.primary.contrastText,
  },
}));

interface Props {
  color: string;
}

export const NativeElementWithThemeProps = styled('div')<Props>(
  ({ theme, color }) => ({
    backgroundColor: theme.palette.primary.main,
    color: 'red',
    [theme.breakpoints.up('lg')]: {
      color,
    },
  })
);

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

export const StyledMyLibComponent = styled(MyLibComponent)(({ theme }) => ({
  [`&.${myLibComponentClassNames.root}`]: {
    padding: theme.spacing(2),
  },
  [`& .${myLibComponentClassNames.paragraph}`]: {
    color: 'black',
  },
}));

export const StyledDescriptionComponent = styled(DescriptionComponent)(
  ({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: 'red',
    [theme.breakpoints.up('lg')]: {
      color: theme.palette.primary.contrastText,
    },
  })
);
