import Vue from 'vue';
import Vuex, { Module, Store } from 'vuex';
import merge from 'deepmerge';
import { DefaultState, IState } from './state';
import { VuexPersist } from '@vuesion/addon-vuex-persist';
import { PersistCookieStorage } from '@vuesion/addon-vuex-persist/dist/PersistCookieStorage';
import { AppModule } from './app/module';
import { AuthModule } from '@shared/modules/auth/module';

Vue.use(Vuex);

const state: IState = (CLIENT && window.__INITIAL_STATE__) || DefaultState;

/* istanbul ignore next */
const beforePersistCookieStorage = (localState: IState): IState => {
  delete localState.app.config;
  delete localState.app.defaultMessages;
  delete localState.app.redirectTo;

  return localState;
};

export const store: Store<IState> = new Vuex.Store({
  state,
  plugins: [
    VuexPersist([
      new PersistCookieStorage(['app', 'auth'], {
        cookieOptions: {
          expires: 365,
        },
        beforePersist: beforePersistCookieStorage,
      }),
    ]),
  ],
});

export const registerModule = (moduleName: string, module: Module<any, any>) => {
  const moduleIsRegistered: boolean = (store as any)._modules.root._children[moduleName] !== undefined;
  const stateExists: boolean = store.state[moduleName] !== undefined;

  if (stateExists) {
    module.state = merge(module.state, store.state[moduleName], {
      clone: false,
      arrayMerge: /* istanbul ignore next */ (target: any, source: any) => {
        return source;
      },
    });
  }

  if (!moduleIsRegistered) {
    store.registerModule(moduleName, module, { preserveState: false });
  }
};

registerModule('app', AppModule);
registerModule('auth', AuthModule);
