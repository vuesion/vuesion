import { RouteConfig } from 'vue-router/types/router';

export const FormRoutes: RouteConfig[] = [
  {
    path:      '/form',
    component: () => import(/* webpackChunkName: "form" */ './Form/Form.vue').then((m: any) => m.default),
  },
];
