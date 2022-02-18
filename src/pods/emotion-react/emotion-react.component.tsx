import React from 'react';
import { DescriptionComponent } from 'common/components';
import * as classes from './emotion-react.styles';

export const EmotionReactComponent: React.FC = (props) => {
  return (
    <div css={classes.nonThemeStyles}>
      <DescriptionComponent css={classes.nonThemeStyles}>
        {`

Get enable the css prop:
======================================

  npm install -D @emotion/babel-plugin

  --------------------------------------
  .babelrc
  --------------------------------------
    {
      "presets": [
        "@babel/preset-env",
        "@babel/preset-typescript",
        "@babel/preset-react"
      ],
      "plugins": ["@emotion"]
    }

  --------------------------------------
  tsconfig.json
  --------------------------------------
    {
      "compilerOptions": {
-       "jsx": "react",
+       "jsx": "react-jsx",
+       "types": ["@emotion/react/types/css-prop"]
        ...
      }
    }


      `}
      </DescriptionComponent>
    </div>
  );
};
