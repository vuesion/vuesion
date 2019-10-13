import { RouteConfig } from 'vue-router/types/router';

export const DashboardRoutes: RouteConfig[] = [
  {
    path: '/example/dashboard',
    name: 'dashboard',
    component: () =>
      import(/* webpackChunkName: "dashboard" */ './Dashboard/Dashboard.vue').then((m: any) => m.default),
    meta: {
      requiresAuth: true,
    },
  },
];
