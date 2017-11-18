import { createApp } from '../app/app';

export default (context: any) => {
  return new Promise((resolve: any, reject: any) => {
    const { app, router, store } = createApp();

    router.push(context.url);
    router
      .onReady(() => {
        const matchedComponents = router.getMatchedComponents();

        if (!matchedComponents.length) {
          return reject({ code: 404 });
        }

        Promise.all(matchedComponents.map((Component: any) => {

          if (Component.prefetch) {
            return Component.prefetch({
              store,
              route: router.currentRoute,
            });
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
