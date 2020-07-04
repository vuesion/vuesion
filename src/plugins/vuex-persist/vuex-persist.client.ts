import { Context } from '@nuxt/types';
import { VuexPersist } from '@vuesion/vuex-persist/dist/vuex-persist';
import { PersistCookieStorage } from '@vuesion/vuex-persist/dist/PersistCookieStorage';

export default function ({ store }: Context) {
  VuexPersist([
    new PersistCookieStorage(['app', 'auth', 'counter'], {
      cookieOptions: {
        expires: 365,
      },
      beforePersist: (localState: any) => {
        delete localState.app.config;
        delete localState.app.defaultMessages;
        delete localState.app.redirectTo;

        return localState;
      },
    }),
  ])(store);
}
