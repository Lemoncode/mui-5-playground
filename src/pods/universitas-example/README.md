# Ejemplo de estilos con Emotion en MUI5

---

**En este ejercicio vamos a analizar e implementar una hoja de estilos siguiendo los estándares que nos propone [Material UI](https://mui.com/material-ui/getting-started/installation/) en su versión 5.**

La librería de estilos que vamos a utilizar es la misma que utiliza **Material** en esta nueva versión: **[Emotion CSS](https://emotion.sh/docs/introduction)**. Esta librería utiliza una sintaxis mucho más cercana al lenguage **CSS** o pre-procesadores tipo **SASS** que su antecesora **JSS** en formato **json**, con lo que escribir estilos nos debería resultar mucho más cómodo y sencillo.

Un primer vistazo a la [documentación oficial](https://mui.com/system/basics/) nos indica que funciones como **makeStyles** o **useTheme** pese a poder seguir utilizándolas han quedado deprecadas y no sería buena práctica su uso.

Dicho esto, para poder utilizar el **Theme** en nuestros componentes se ha creado un hook en la librería el cual no solo permite pasarle el tema utitlizado sino también propiedades que podamos necesitar en nuestras hojas de estilos. Su utilización la veremos más adelantes.

#### 01 - Playground

Vamos a crear un componente sencillo junto con su hoja de estilos donde iremos utilizando distintos componentes de MUI5 y les daremos estilos según la documentación.

- Para los estilos necesitamos importar la función `css` de **Emotion**. Su utilización es muy sencilla, basta con añadir los estilos css entre los backticks.

  ```ts
  // universitas-example.styles.ts

  import { css } from '@emotion/css';

  export const root = css`
    color: red;
  `;
  ```

- En el componente usamos los estilos como se ve a continuación.

  ```tsx
  // universitas-example.component.tsx

  import React from 'react';
  import { Typography } from '@mui/material';
  import * as innerClasses from './universitas-example.styles'; // Hacemos una importación nombrada de las classes

  export const UniversitasComponent: React.FunctionComponent = () => {
    return (
      <div className={innerClasses.root}>
        {' '}
        // Asignamos la clase correspondiente al elemento
        <Typography variant="h1">Hello world!!</Typography>
      </div>
    );
  };
  ```
