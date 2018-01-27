import { RouteConfig } from 'vue-router/types/router';

export const componentsRoutes: RouteConfig[] = [
  { path: '/components', component: () => import(/* webpackChunkName: "components" */ './Components/Components.vue').then(m => m.default) },
];
