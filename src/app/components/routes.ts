export default [
  { path: '/components', component: () => import('./Components/Components.vue').then(m => m.default) },
];
