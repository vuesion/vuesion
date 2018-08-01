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

  // example redirect
  // TODO: remove from production code
  {
    path:      '/redirect',
    redirect:  '/',
  },

  // example route for authentication guard
  // will redirect to `/login` (implemented in `src/app/router`)
  // TODO: remove from production code
  {
    path:      '/requires-auth',
    meta:      { requiresAuth: true },
  },
];
