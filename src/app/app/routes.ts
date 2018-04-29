import { RouteConfig } from 'vue-router/types/router';

export const AppRoutes: RouteConfig[] = [
  {
    path:      '/not-found',
    component: () => import(/* webpackChunkName: "notFound" */ './NotFound/NotFound.vue').then(m => m.default),
  },
  {
    path:      '/error',
    component: () => import(/* webpackChunkName: "error" */ './Error/Error.vue').then(m => m.default),
  },
];
