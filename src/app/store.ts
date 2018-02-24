import Vue                                 from 'vue';
import Vuex, { Store }                     from 'vuex';
import { VuexPersist }                     from './shared/plugins/vuex-persist/vuex-persist';
import { Actions }                         from './actions';
import { Getters }                         from './getters';
import { IState, DefaultState, Mutations } from './mutations';
import { PersistLocalStorage }             from './shared/plugins/vuex-persist/PersistLocalStorage';
import { PersistCookieStorage }            from './shared/plugins/vuex-persist/PersistCookieStorage';
import { IServerContext }                  from '../server/isomorphic';

Vue.use(Vuex);

let state: IState = (CLIENT && window.__INITIAL_STATE__) || DefaultState;

export const getStore = (serverContext?: IServerContext): Store<IState> => {
  const persistCookieStorage: PersistCookieStorage = new PersistCookieStorage(
    ['app', 'counter'],
    {
      cookieOptions: {
        expires: 365,
      },
      beforePersist(localState: IState): IState {
        // TODO: delete state that should not be saved in the cookie (https://github.com/devCrossNet/vue-starter/issues/52)

        return localState;
      },
    },
  );

  if (SERVER) {
    state = persistCookieStorage.getMergedStateFromServerContext<IState>(serverContext, state);

    if (state.app && state.app.lang) {
      serverContext.acceptLanguage = state.app.lang;
      serverContext.htmlLang = state.app.lang.substr(0, 2);
    } else {
      state.app = {
        lang: serverContext.acceptLanguage,
      };
    }
  }

  return new Vuex.Store(
    {
      state,
      actions:   Actions,
      mutations: Mutations,
      getters:   Getters,
      plugins:   [
        VuexPersist(
          [
            new PersistLocalStorage(),
            persistCookieStorage,
          ],
        ),
      ],
    },
  );
};
