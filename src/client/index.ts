import { createApp } from '../app/app';

const { app, router, store } = createApp();

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
}

router.onReady(() => {

  router
    .beforeResolve((to, from, next) => {
      const matched = router.getMatchedComponents(to);
      const prevMatched = router.getMatchedComponents(from);
      let diffed = false;

      const activated = matched.filter((c, i) => {
        return diffed || (diffed = (prevMatched[i] !== c));
      });

      if (!activated.length) {
        return next();
      }

      Promise
        .all(activated.map((Component: any) => {

          if (Component.prefetch) {
            return Component.prefetch({
              store,
              route: to,
            });
          }

          return Promise.resolve();
        }))
        .then(() => {
          next();
        })
        .catch(next);
    });

  app.$mount('#app');

});
