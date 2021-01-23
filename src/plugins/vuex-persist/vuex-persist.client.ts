import { Context } from '@nuxt/types';
import { VuexPersist } from '@vuesion/vuex-persist/dist/vuex-persist';
import { PersistCookieStorage } from '@vuesion/vuex-persist/dist/PersistCookieStorage';

export default function({ store }: Context) {
  VuexPersist([
    new PersistCookieStorage(['app', 'counter'], {
      cookieOptions: {
        expires: 365,
      },
    }),
  ])(store);
}
