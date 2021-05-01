import { Context } from '@nuxt/types';
import { PersistCookieStorage } from '@vuesion/vuex-persist/dist/PersistCookieStorage';

export default ({ store, req }: Context) => {
  const cookies = req && req.headers.cookie ? require('cookie').parse(req.headers.cookie) : {};
  const state = PersistCookieStorage.getMergedStateFromServerContext<any>(cookies, store.state);

  store.replaceState(state);
};
