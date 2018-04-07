import Vue                                 from 'vue';
import Vuex, { Store }                     from 'vuex';
import { VuexPersist }                     from './shared/plugins/vuex-persist/vuex-persist';
import { Actions }                         from './actions';
import { Getters }                         from './getters';
import { DefaultState, IState, Mutations } from './mutations';
import { PersistLocalStorage }             from './shared/plugins/vuex-persist/PersistLocalStorage';
import { PersistCookieStorage }            from './shared/plugins/vuex-persist/PersistCookieStorage';

Vue.use(Vuex);

const state: IState = (CLIENT && window.__INITIAL_STATE__) || DefaultState;

export const store: Store<IState> = new Vuex.Store(
  {
    state,
    actions:   Actions,
    mutations: Mutations,
    getters:   Getters,
    plugins:   [
      VuexPersist(
        [
          new PersistLocalStorage(['counter']),
          new PersistCookieStorage(
            ['app'],
            {
              cookieOptions: {
                expires: 365,
              },
              beforePersist(localState: IState): IState {
                // TODO: delete state that should not be saved in a cookie (https://github.com/devCrossNet/vue-starter/issues/52)
                delete localState.app.config;
                delete localState.app.defaultMessages;
                return localState;
              },
            },
          ),
        ],
      ),
    ],
  },
);
