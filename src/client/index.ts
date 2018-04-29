import Vue                 from 'vue';
import { Route }           from 'vue-router';
import { Component }       from 'vue-router/types/router';
import { createApp, IApp } from '../app/app';
import { IPreLoad }        from '../server/isomorphic';

if (PRODUCTION) {
  const runtime: any = require('serviceworker-webpack-plugin/lib/runtime');
  if ('serviceWorker' in navigator) {
    runtime
    .register()
    .then((registration: ServiceWorkerRegistration) => {
      registration.update();
    });
  }
}

const { app, router, store, i18n }: IApp = createApp();

i18n.locale = store.state.app.locale;
i18n.fallbackLocale = 'en';
i18n.setLocaleMessage(store.state.app.locale, store.state.app.defaultMessages);

/**
 * redirect client if server renders a different page than requested
 */
if (store.state.app.redirectTo !== null) {
  router.replace(store.state.app.redirectTo);
}

/**
 * global error handler that redirects to error page
 */
Vue.config.errorHandler = () => {
  router.replace('/error');
};

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
        return (component as any).prefetch({ store, route: to } as IPreLoad);
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
