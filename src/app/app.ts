import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { extend } from 'vee-validate';
import { Store } from 'vuex';
import { sync } from 'vuex-router-sync';
import { VueRouter } from 'vue-router/types/router';
import { store } from './store';
import { router } from './router';
import { IState } from './state';
import { i18n } from '@shared/plugins/i18n/i18n';
import { HttpService } from '@shared/services/HttpService/HttpService';
import App from './app/App/App.vue';
import './shared/directives';

// workaround: the TS style import throws an unexpected token error during compile time
const { required, email, integer, min } = require('vee-validate/dist/rules.umd.js');

extend('required', required);
extend('email', email);
extend('integer', integer);
extend('min', min);

export interface IApp {
  app: Vue;
  router: VueRouter;
  store: Store<IState>;
  i18n: VueI18n;
}

export const createApp = (): IApp => {
  sync(store, router);

  HttpService.store = store;

  const app: Vue = new Vue({
    router,
    store,
    i18n,
    render: (h) => h(App),
  });

  return { app, router, store, i18n };
};
