import { RouteConfig } from 'vue-router/types/router';

export const homeRoutes: RouteConfig[] = [
  { path: '/', component: () => import(/* webpackChunkName: "home" */ './Home/Home.vue').then(m => m.default) },
];
