import Vue from 'vue';
import VueRouter from 'vue-router';
import homeRoutes from './home/routes';
import counterRoutes from './counter/routes';
import componentsRoutes from './components/routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    ...homeRoutes,
    ...counterRoutes,
    ...componentsRoutes,
  ],
});

export default router;
