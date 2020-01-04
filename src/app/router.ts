import Vue from 'vue';
import VueRouter, { Route, RouteRecord } from 'vue-router';
import Meta from 'vue-meta';
import { Store } from 'vuex';
import { IState } from '@/app/state';
import { AppRoutes } from './app/routes';
import { HomeRoutes } from './home/routes';
import { CounterRoutes } from './example/counter/routes';
import { FormRoutes } from './example/form/routes';
import { DashboardRoutes } from './example/dashboard/routes';

Vue.use(VueRouter);
Vue.use(Meta);

export const router: VueRouter = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [...AppRoutes, ...HomeRoutes, ...CounterRoutes, ...FormRoutes, ...DashboardRoutes],
  scrollBehavior(to: Route, from: Route, savedPosition: { x: number; y: number }) {
    if (to.hash) {
      return { selector: to.hash };
    }
    return savedPosition || { x: 0, y: 0 };
  },
});

// example guard
// TODO remove or adjust in production code
export const AuthGuard = (route: Route, resolve: any, store: Store<IState>) => {
  if (route.matched.some((record: RouteRecord) => record.meta.requiresAuth)) {
    const isAuthenticated = store.getters['auth/isAuthenticated'];

    if (!isAuthenticated) {
      resolve({ path: '/', query: { redirect: route.fullPath } });
    } else {
      resolve();
    }
  } else {
    resolve();
  }
};
