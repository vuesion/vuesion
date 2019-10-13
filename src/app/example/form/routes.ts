import { RouteConfig } from 'vue-router/types/router';

export const FormRoutes: RouteConfig[] = [
  {
    path: '/example/form',
    name: 'form',
    component: () => import(/* webpackChunkName: "form" */ './Form/Form.vue').then((m: any) => m.default),
  },
];
