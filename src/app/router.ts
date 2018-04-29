import Vue                  from 'vue';
import VueRouter            from 'vue-router';
import Meta                 from 'vue-meta';
import { AppRoutes }        from './app/routes';
import { HomeRoutes }       from './home/routes';
import { CounterRoutes }    from './counter/routes';
import { ComponentsRoutes } from './components/routes';

Vue.use(VueRouter);
Vue.use(Meta);

export const router: VueRouter = new VueRouter(
  {
    mode:   'history',
    base:   __dirname,
    routes: [
      ...AppRoutes,
      ...HomeRoutes,
      ...CounterRoutes,
      ...ComponentsRoutes,
    ],
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        return { selector: to.hash };
      }
      return savedPosition || { x: 0, y: 0 };
    },
  },
);
