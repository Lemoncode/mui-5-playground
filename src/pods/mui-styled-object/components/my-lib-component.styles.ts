import { styled } from '@mui/material';

const LIB_PREFIX = 'Mui-5-Playground';
const COMPONENT_PREFIX = 'MyLibComponent';

export const myLibComponentClassNames = {
  root: `${LIB_PREFIX}-${COMPONENT_PREFIX}-root`,
  paragraph: `${LIB_PREFIX}-${COMPONENT_PREFIX}-paragraph`,
};

export const Root = styled('div')({
  [`&.${myLibComponentClassNames.root}`]: {
    backgroundColor: 'red',
  },
  [`& .${myLibComponentClassNames.paragraph}`]: {
    color: 'white',
  },
});
