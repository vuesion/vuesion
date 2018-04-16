import { Store }                from 'vuex';
import { Route }                from 'vue-router';
import { Component }            from 'vue-router/types/router';
import { createApp, IApp }      from '../app/app';
import { IState }               from '../app/state';
import { IAppConfig }           from '../app/config/IAppConfig';
import { PersistCookieStorage } from '../app/shared/plugins/vuex-persist/PersistCookieStorage';

export interface IServerContext {
  url: string;
  cookies: any;
  meta?: any;
  state?: any;
  acceptLanguage: string;
  htmlLang: string;
  appConfig: IAppConfig;
}

export interface IPreLoad {
  store?: Store<IState> | any;
  route?: Route | any;
}

export default (context: IServerContext) => {
  return new Promise((resolve: any, reject: any) => {
    const { app, router, store, i18n }: IApp = createApp();

    /**
     * default state
     */
    let state: IState = store.state;
    state = PersistCookieStorage.getMergedStateFromServerContext<IState>(context, state);
    state.app.config = context.appConfig;

    if (state.app && state.app.locale) {
      context.acceptLanguage = state.app.locale;
      context.htmlLang = state.app.locale.substr(0, 2);
    } else {
      state.app.locale = context.acceptLanguage;
    }

    store.replaceState(state);

    /**
     * SEO
     */
    context.meta = app.$meta();

    /**
     * I18N
     */
    const lang: string = store.state.app.locale;
    let defaultMessages: any = {};

    try {
      defaultMessages = nodeRequire(`../../i18n/${lang}.json`);
    } catch (e) {
      defaultMessages = nodeRequire(`../../i18n/en.json`);
    }

    i18n.locale = lang;
    i18n.fallbackLocale = 'en';
    i18n.setLocaleMessage(lang, defaultMessages);

    store.state.app.defaultMessages = defaultMessages;

    router.push(context.url);

    router
    .onReady(() => {
      const matchedComponents: Component[] = router.getMatchedComponents();

      if (!matchedComponents.length) {
        return reject({ code: 404 });
      }

      Promise.all(matchedComponents.map((component: Component) => {

        if ((component as any).prefetch) {
          return (component as any).prefetch({ store, route: router.currentRoute } as IPreLoad);
        }

        return Promise.resolve();
      }))
             .then(() => {
               context.state = store.state;
               resolve(app);
             })
             .catch(reject);

    }, reject);
  });
};
