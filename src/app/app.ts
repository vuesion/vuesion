import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import App from './App.vue';
import { getStore } from './store';
import { router } from './router';
import { getI18n } from './shared/plugins/i18n';
import { VueRouter } from 'vue-router/types/router';
import { Store } from 'vuex';
import { IServerContext } from '../server/isomorphic';

export interface IApp {
  app: Vue;
  router: VueRouter;
  store: Store<any>;
}

export const createApp = (serverContext?: IServerContext): IApp => {
  const store: Store<any> = getStore(serverContext);
  const lang: string = serverContext ? serverContext.acceptLanguage : store.state.app.lang;

  sync(store, router);
  const app: Vue = new Vue({
    router,
    store,
    i18n: getI18n(lang),
    render: (h) => h(App),
  });

  return { app, router, store };
};
