export const componentsRoutes = [
  { path: '/components', component: () => import(/* webpackChunkName: "components" */ './Components/Components.vue').then(m => m.default) },
];
