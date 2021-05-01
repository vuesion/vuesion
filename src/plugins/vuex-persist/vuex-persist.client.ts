import { Context } from '@nuxt/types';
import { VuexPersist } from '@vuesion/vuex-persist/dist/vuex-persist';
import { PersistCookieStorage } from '@vuesion/vuex-persist/dist/PersistCookieStorage';

export default ({ store }: Context) => {
  VuexPersist([
    new PersistCookieStorage(['counter'], {
      cookieOptions: {
        expires: 365,
      },
    }),
  ])(store);
};
