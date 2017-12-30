import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { actions } from './actions';
import { getters } from './getters';
import { defaultState, mutations } from './mutations';

Vue.use(Vuex);

const inBrowser: boolean = typeof window !== 'undefined';
const state: any = (inBrowser && window.__INITIAL_STATE__) || defaultState;

export const store: Store<any> = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
});
