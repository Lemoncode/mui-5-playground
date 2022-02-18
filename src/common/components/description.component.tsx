import React from 'react';
import { css } from '@emotion/css';

const classes = {
  pre: css`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  `,
  code: css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex-grow: 1;
  `,
  component: css`
    background-color: white;
    color: rgb(26, 32, 39);
    flex-grow: 3;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  `,
};

interface Props {
  component?: React.ReactElement;
  className?: string;
  css?;
}

export const DescriptionComponent: React.FC<Props> = (props) => {
  const { className, component, children, css } = props;

  const elements = JSON.stringify(children)
    .replace(/\\"/g, '"')
    .split('\\n')
    .slice(1, -1)
    .map((row, index) => <span key={index}>{row}</span>);

  return (
    <div className={className} css={css}>
      <pre className={classes.pre}>
        <code className={classes.code}>{elements}</code>
        {component && <span className={classes.component}>{component}</span>}
      </pre>
    </div>
  );
};
