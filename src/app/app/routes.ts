import { RouteConfig } from 'vue-router/types/router';

export const AppRoutes: RouteConfig[] = [
  {
    path: '/not-found',
    component: () => import(/* webpackChunkName: "notFound" */ './NotFound/NotFound.vue').then((m) => m.default),
  },

  {
    path: '/error',
    component: () => import(/* webpackChunkName: "error" */ './Error/Error.vue').then((m) => m.default),
  },

  // example redirect
  // TODO: remove from production code
  {
    path: '/redirect',
    redirect: '/',
  },

  // catch-all route
  // shows 404 page and also makes server respond with HTTP status code 404
  // make sure to also adjust `src/server/isomorphic` in case you implement a more complex behavior here
  {
    path: '*',
    component: () => import(/* webpackChunkName: "notFound" */ './NotFound/NotFound.vue').then((m) => m.default),
  },
];
