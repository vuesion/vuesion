export default [
  { path: '/Counter', component: () => import('./Counter/Counter.vue').then(m => m.default) },
];
