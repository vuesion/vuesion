export const counterRoutes = [
  { path: '/Counter', component: () => import(/* webpackChunkName: "counter" */ './Counter/Counter.vue').then(m => m.default) },
];
