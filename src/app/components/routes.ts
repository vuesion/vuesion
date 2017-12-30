export const componentsRoutes = [
  { path: '/components', component: () => import('./Components/Components.vue').then(m => m.default) },
];
