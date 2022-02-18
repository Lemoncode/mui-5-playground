import React from 'react';
import clsx from 'clsx';
import * as innerClasses from './my-lib-component.styles';

export interface MyLibComponentProps {
  className?: string;
  classes?: MyLibComponentClassesProps;
}

export interface MyLibComponentClassesProps {
  root?: string;
  paragraph?: string;
}

// <== TODO: Extract to common lib helper ==>
const LIB_PREFIX = 'Mui-5-Playground';
const COMPONENT_PREFIX = 'MyLibComponent';

export const myLibComponentClassNames = {
  root: `.${LIB_PREFIX}-${COMPONENT_PREFIX}-root`,
  paragraph: `.${LIB_PREFIX}-${COMPONENT_PREFIX}-p`,
};

// Same Global ClassNames without the dot (.)
const innerMyLibComponentClassNames = Object.entries(
  myLibComponentClassNames
).reduce(
  (result, [key, value]) => ({
    ...result,
    [key]: value.slice(1),
  }),
  {} as typeof myLibComponentClassNames
);
// <== TODO: Extract to common lib helper ==>

export const MyLibComponent: React.FC<MyLibComponentProps> = (props) => {
  const { classes, className } = props;
  return (
    <div
      className={clsx(
        innerClasses.root,
        className,
        classes.root,
        innerMyLibComponentClassNames.root
      )}
    >
      <p
        className={clsx(
          innerClasses.paragraph,
          classes.paragraph,
          innerMyLibComponentClassNames.paragraph
        )}
      >
        My Lib Component paragraph
      </p>
    </div>
  );
};

MyLibComponent.defaultProps = {
  classes: {},
};
