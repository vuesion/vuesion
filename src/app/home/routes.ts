export const homeRoutes = [
  { path: '/', component: () => import(/* webpackChunkName: "home" */ './Home/Home.vue').then(m => m.default) },
];
