import { createApp, IApp } from '../app/app';
import { Component }       from 'vue-router/types/router';
import { Store }           from 'vuex';
import { IState }          from '../app/mutations';
import { Route }           from 'vue-router';
import { IAppConfig }      from '../app/config/IAppConfig';

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
    const { app, router, store }: IApp = createApp(context);

    router.push(context.url);

    context.meta = app.$meta();

    router
    .onReady(() => {
      const matchedComponents: Component[] = router.getMatchedComponents();

      if (!matchedComponents.length) {
        return reject({ code: 404 });
      }

      Promise.all(matchedComponents.map((component: Component) => {

        if ((component as any).prefetch) {
          return (component as any).prefetch({
                                               store,
                                               route: router.currentRoute,
                                             } as IPreLoad);
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
