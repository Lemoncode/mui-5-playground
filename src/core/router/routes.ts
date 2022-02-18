interface BaseRoutes {
  root: string;
  muiStyledObject: string;
  muiStyledTemplate: string;
  emotionReact: string;
  emotionCss: string;
}

const baseRoutes: BaseRoutes = {
  root: '/',
  muiStyledObject: '/mui-styled-object',
  muiStyledTemplate: '/mui-styled-template',
  emotionReact: '/emotion-react',
  emotionCss: '/emotion-css',
};

type SwitchRoutes = BaseRoutes;

export const switchRoutes: SwitchRoutes = {
  ...baseRoutes,
};

interface LinkRoutes extends BaseRoutes {}

export const linkRoutes: LinkRoutes = {
  ...baseRoutes,
};
