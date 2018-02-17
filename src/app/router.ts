import Vue                   from 'vue';
import VueRouter             from 'vue-router';
import Meta                  from 'vue-meta';
import { HomeRoutes }        from './home/routes';
import { CounterRoutes }     from './counter/routes';
import { ComponentsRoutes }  from './components/routes';
import { VuexExampleRoutes } from './vuexExample/routes';

Vue.use(VueRouter);
Vue.use(Meta);

export const router: VueRouter = new VueRouter(
  {
    mode:   'history',
    base:   __dirname,
    routes: [
      ...HomeRoutes,
      ...CounterRoutes,
      ...ComponentsRoutes,
      ...VuexExampleRoutes,
    ],
  },
);
