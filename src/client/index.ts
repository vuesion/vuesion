import Vue from 'vue';
import { Route } from 'vue-router';
import { Component } from 'vue-router/types/router';
import { createApp, IApp } from '@/app/app';
import { IPreLoad } from '@/server/isomorphic';
import { HttpService, initHttpService } from '@shared/services/HttpService/HttpService';

if (PRODUCTION) {
  const runtime: any = require('serviceworker-webpack-plugin/lib/runtime');
  if ('serviceWorker' in navigator) {
    runtime.register().then((registration: ServiceWorkerRegistration) => {
      registration.update();
    });
  }
}

const { app, router, store, i18n }: IApp = createApp();

i18n.locale = store.state.app.locale;
i18n.fallbackLocale = 'en';
i18n.setLocaleMessage(store.state.app.locale, store.state.app.defaultMessages);

initHttpService(store, router);

/**
 * redirect client if server renders a different page than requested
 */
if (store.state.app.redirectTo !== null) {
  router.replace(store.state.app.redirectTo);
}

/**
 * global error handler that redirects to error page and logs error to express app
 */
Vue.config.errorHandler = (error: Error) => {
  console.error(error); // tslint:disable-line

  HttpService.post('/log/error', {
    error: {
      message: error.message,
      stack: error.stack,
    },
  });

  router.replace('/error');
};

router.onReady(() => {
  router.beforeResolve(async (to: Route, from: Route, next: any) => {
    const matched: Component[] = router.getMatchedComponents(to);
    const prevMatched: Component[] = router.getMatchedComponents(from);
    let diffed: boolean = false;

    const activated: Component[] = matched.filter((component: Component, i: number) => {
      return diffed || (diffed = prevMatched[i] !== component);
    });

    if (!activated.length) {
      return next();
    }

    try {
      await Promise.all(
        activated.map((component: Component) => {
          if ((component as any).prefetch) {
            return (component as any).prefetch({ store, route: to, router } as IPreLoad);
          }

          return Promise.resolve();
        }),
      );

      next();
    } catch (e) {
      console.error(e); // tslint:disable-line
      next();
    }
  });

  app.$mount('#app');
});
