import Vue from 'vue';
import VueRouter from 'vue-router';
import Meta from 'vue-meta';
import { homeRoutes } from './home/routes';
import { counterRoutes } from './counter/routes';
import { componentsRoutes } from './components/routes';

Vue.use(VueRouter);
Vue.use(Meta);

export const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    ...homeRoutes,
    ...counterRoutes,
    ...componentsRoutes,
  ],
});
