import { Middleware } from '@nuxt/types';

const authMiddleware: Middleware = ({ app, store, redirect }) => {
  if (!store.getters['auth/isAuthenticated']) {
    const redirectArg = '?redirect=' + encodeURI((app.router as any).history.current.path);
    return redirect(app.localePath('/') + redirectArg);
  }
};

export default authMiddleware;
