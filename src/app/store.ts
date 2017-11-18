import Vue from 'vue';
import Vuex from 'vuex';
import { actions } from './actions';
import { getters } from './getters';
import { defaultState, mutations } from './mutations';

Vue.use(Vuex);

const inBrowser = typeof window !== 'undefined';
const state = (inBrowser && window.__INITIAL_STATE__) || defaultState;

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
});
