import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import App from './App.vue';
import store from './store';
import router from './router';
import {i18n} from '../i18n';

export const createApp = () => {
  sync(store, router);
  const app = new Vue({
    router,
    store,
    i18n,
    render: (h) => h(App),
  });
  return { app, router, store };
};
