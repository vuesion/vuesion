import { createApp, IApp } from '../app/app';
import { Route } from 'vue-router';
import { Component } from 'vue-router/types/router';

if (PRODUCTION) {
  const runtime = require('serviceworker-webpack-plugin/lib/runtime');
  if ('serviceWorker' in navigator) {
    runtime
      .register()
      .then((registration: ServiceWorkerRegistration) => {
        registration.update();
      });
  }
}

const { app, router, store }: IApp = createApp();

router.onReady(() => {
  router
    .beforeResolve((to: Route, from: Route, next: any) => {
      const matched: Component[] = router.getMatchedComponents(to);
      const prevMatched: Component[] = router.getMatchedComponents(from);
      let diffed: boolean = false;

      const activated: Component[] = matched.filter((component: Component, i: number) => {
        return diffed || (diffed = (prevMatched[i] !== component));
      });

      if (!activated.length) {
        return next();
      }

      Promise
        .all(activated.map((component: Component) => {

          if ((component as any).prefetch) {
            return (component as any).prefetch({
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
