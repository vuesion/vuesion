import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import App from './App.vue';
import { store } from './store';
import { router } from './router';
import { i18n } from '../i18n';
import { VueRouter } from 'vue-router/types/router';
import { Store } from 'vuex';

export interface IApp {
  app: Vue;
  router: VueRouter;
  store: Store<any>;
}

export const createApp = (): IApp => {
  sync(store, router);
  const app = new Vue({
    router,
    store,
    i18n,
    render: (h) => h(App),
  });
  return { app, router, store };
};
