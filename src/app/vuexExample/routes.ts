import { RouteConfig } from 'vue-router/types/router';

export const VuexExampleRoutes: RouteConfig[] = [
  { path: '/vuexExample', component: () => import(/* webpackChunkName: "vuexExample" */ './VuexExample/VuexExample.vue').then(m => m.default) },
];
