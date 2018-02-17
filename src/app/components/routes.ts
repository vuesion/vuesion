import { RouteConfig } from 'vue-router/types/router';

export const ComponentsRoutes: RouteConfig[] = [
  {
    path:      '/components',
    component: () => import(/* webpackChunkName: "components" */ './Components/Components.vue').then(m => m.default),
  },
];
