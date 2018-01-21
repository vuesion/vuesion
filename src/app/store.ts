/* tslint:disable:no-console */

import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { VuexPersist } from './shared/plugins/vuex-persist/vuex-persist';
import { actions } from './actions';
import { getters } from './getters';
import { defaultState, mutations } from './mutations';
import { PersistLocalStorage } from './shared/plugins/vuex-persist/PersistLocalStorage';
import { PersistCookieStorage } from './shared/plugins/vuex-persist/PersistCookieStorage';
import { IServerContext } from '../server/isomorphic';

Vue.use(Vuex);

let state: any = (CLIENT && window.__INITIAL_STATE__) || defaultState;

export const getStore = (serverContext?: IServerContext): Store<any> => {
  const persistCookieStorage: PersistCookieStorage = new PersistCookieStorage(['app', 'counter'], { expires: 365 });

  if (SERVER) {
    state = persistCookieStorage.getMergedStateFromServerContext(serverContext, state);

    if (state.app && state.app.lang) {
      serverContext.acceptLanguage = state.app.lang;
      serverContext.htmlLang = state.app.lang.substr(0, 2);
    } else {
      state.app = {
        lang: serverContext.acceptLanguage,
      };
    }
  }

  return new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    plugins: [VuexPersist([
      new PersistLocalStorage(['home']),
      persistCookieStorage,
    ])],
  });
};
