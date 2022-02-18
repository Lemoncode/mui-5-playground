import { useTheme } from '@mui/material';

export type ResultType<Classes> = {
  [K in keyof Classes]?: Classes[K] extends string | Function
    ? string
    : ResultType<Classes[K]>;
};

export type PropsType<Classes, K extends keyof Classes = keyof Classes> = {
  [Key in K]: Classes[Key] extends (arg1: any, arg2: any) => string
    ? Parameters<Classes[Key]>[1]
    : Classes[Key] extends string
    ? undefined
    : PropsType<Classes[Key]>;
}[K];

export const useWithTheme = <Classes>(
  classes: Classes,
  props?: PropsType<Classes>
): ResultType<Classes> => {
  const theme = useTheme();

  return Object.entries(classes).reduce(
    (result, [key, value]) => ({
      ...result,
      [key]: typeof value === 'function' ? value(theme, props) : value,
    }),
    {} as ResultType<Classes>
  );
};
