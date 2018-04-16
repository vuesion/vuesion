import { RouteConfig } from 'vue-router/types/router';

export const CounterRoutes: RouteConfig[] = [
  {
    path:      '/counter',
    component: () => import(/* webpackChunkName: "counter" */ './Counter/Counter.vue').then(m => m.default),
  },
];
