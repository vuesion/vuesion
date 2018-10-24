import Vue                      from 'vue';
import Vuex, { Module, Store }  from 'vuex';
import merge                    from 'deepmerge';
import { DefaultState, IState } from './state';
import { VuexPersist }          from './shared/plugins/vuex-persist/vuex-persist';
import { PersistLocalStorage }  from './shared/plugins/vuex-persist/PersistLocalStorage';
import { PersistCookieStorage } from './shared/plugins/vuex-persist/PersistCookieStorage';
import { AppModule }            from './app/module';

Vue.use(Vuex);

const state: IState = (CLIENT && window.__INITIAL_STATE__) || DefaultState;

/* istanbul ignore next */
const beforePersistLocalStorage = (localState: IState): IState => {
  /**
   * because the counter module is loaded on demand
   * we have to check if it exists before we delete
   * some state attributes
   */
  if (localState.counter) {
    delete localState.counter.incrementPending;
    delete localState.counter.decrementPending;
  }

  return localState;
};

/* istanbul ignore next */
const beforePersistCookieStorage = (localState: IState): IState => {
  delete localState.app.config;
  delete localState.app.defaultMessages;
  delete localState.app.redirectTo;

  return localState;
};

export const store: Store<IState> = new Vuex.Store(
  {
    state,
    plugins: [
      VuexPersist(
        [
          new PersistLocalStorage(['counter'], beforePersistLocalStorage),
          new PersistCookieStorage(
            ['app'],
            {
              cookieOptions: {
                expires: 365,
              },
              beforePersist: beforePersistCookieStorage,
            },
          ),
        ],
      ),
    ],
  },
);

export const registerModule = (moduleName: string, module: Module<any, any>) => {
  const moduleIsRegistered: boolean = (store as any)._modules.root._children[moduleName] !== undefined;
  const stateExists: boolean = store.state[moduleName] !== undefined;

  /**
   * merge existing state hydrated from vuex persist
   * with module default state
   * TODO: revisit this solution and figure out a better way to use it with vuex-persist
   */
  if (stateExists) {
    module.state = merge(module.state, store.state[moduleName], {
      clone:                                 false,
      arrayMerge: /* istanbul ignore next */ (moduleState, saved) => {
        return saved;
      },
    });
  }

  if (!moduleIsRegistered) {
    store.registerModule(moduleName, module, { preserveState: false });
  }
};

registerModule('app', AppModule);
