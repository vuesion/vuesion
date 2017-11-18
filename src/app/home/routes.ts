export default [
  { path: '/', component: () => import('./Home/Home.vue').then(m => m.default) },
];
