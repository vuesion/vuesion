import { RouteConfig } from 'vue-router/types/router';

export const HomeRoutes: RouteConfig[] = [
  { path: '/', component: () => import(/* webpackChunkName: "home" */ './Home/Home.vue').then(m => m.default) },
];
