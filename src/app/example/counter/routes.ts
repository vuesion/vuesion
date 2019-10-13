import { RouteConfig } from 'vue-router/types/router';

export const CounterRoutes: RouteConfig[] = [
  {
    path: '/example/counter',
    name: 'counter',
    component: () => import(/* webpackChunkName: "counter" */ './Counter/Counter.vue').then((m: any) => m.default),
  },
];
