import React from 'react';
import clsx from 'clsx';
import * as innerClasses from './expose-styles.styles';

interface ExposeStylesClassesProps {
  root?: string;
  p?: string;
}

interface ExposeStylesProps {
  className?: string;
  classes?: ExposeStylesClassesProps;
}

const LIB_PREFIX = 'Mui-5-Playground';
const COMPONENT_PREFIX = 'ExposeStyles';

export const exposeStylesClasses = {
  root: `.${LIB_PREFIX}-${COMPONENT_PREFIX}-root`,
  p: `.${LIB_PREFIX}-${COMPONENT_PREFIX}-p`,
};

export const ExposeStylesComponent: React.FC<ExposeStylesProps> = (props) => {
  const { classes, className } = props;
  return (
    <div
      className={clsx(
        innerClasses.root,
        className,
        classes.root,
        exposeStylesClasses.root.slice(1)
      )}
    >
      <p
        className={clsx(
          innerClasses.p,
          classes.p,
          exposeStylesClasses.p.slice(1)
        )}
      >
        My p
      </p>
    </div>
  );
};

ExposeStylesComponent.defaultProps = {
  classes: {},
};
