/* tslint:disable:no-console */

import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { VuexPersist } from './shared/plugins/vuex/vuex-persist';
import { actions } from './actions';
import { getters } from './getters';
import { defaultState, mutations } from './mutations';
import { PersistLocalStorage } from './shared/plugins/vuex/PersistLocalStorage';
import { PersistCookieStorage } from './shared/plugins/vuex/PersistCookieStorage';
import { IServerContext } from '../server/isomorphic';

Vue.use(Vuex);

let state: any = (CLIENT && window.__INITIAL_STATE__) || defaultState;

export const getStore = (serverContext?: IServerContext): Store<any> => {
  const persistCookieStorage: PersistCookieStorage = new PersistCookieStorage(['counter'], { expires: 365 });

  if (serverContext) {
    state = persistCookieStorage.getMergedStateFromServerContext(serverContext, state);
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
