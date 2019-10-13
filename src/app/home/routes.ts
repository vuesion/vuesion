import { RouteConfig } from 'vue-router/types/router';

export const HomeRoutes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ './Home/Home.vue').then((m: any) => m.default),
  },
];
