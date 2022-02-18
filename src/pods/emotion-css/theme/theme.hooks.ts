import { useTheme } from '@mui/material';

export type ResultType<Classes> = {
  [K in keyof Classes]?: Classes[K] extends string | Function
    ? string
    : ResultType<Classes[K]>;
};

export type PropsType<Classes, K extends keyof Classes = keyof Classes> = {
  [Key in K]: Classes[Key] extends (arg1: any, arg2: any) => string
    ? Parameters<Classes[Key]>[1] extends undefined
      ? never
      : Parameters<Classes[Key]>[1]
    : Classes[Key] extends string
    ? never
    : PropsType<Classes[Key]>;
}[K];

export type ClassesHasProps<Classes> = PropsType<Classes> extends never
  ? false
  : true;

export const useWithTheme = <Classes>(
  classes: Classes,
  ...rest: ClassesHasProps<Classes> extends true
    ? [props: PropsType<Classes>]
    : []
): ResultType<Classes> => {
  const theme = useTheme();

  return Object.entries(classes).reduce(
    (result, [key, value]) => ({
      ...result,
      [key]: typeof value === 'function' ? value(theme, rest[0]) : value,
    }),
    {} as ResultType<Classes>
  );
};
