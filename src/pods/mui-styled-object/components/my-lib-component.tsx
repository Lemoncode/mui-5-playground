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
