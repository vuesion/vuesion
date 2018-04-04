# State management

# Persist your state
This boilerplate comes with a vuex middleware that allows you to persist the application state.

## Cookie Persist

file: `/src/app/store.ts`:
```js
  const persistCookieStorage: PersistCookieStorage = new PersistCookieStorage(
    ['app', 'counter'],
    {
      cookieOptions: {
        expires: 365,
      },
      beforePersist(localState: IState): IState {
        // TODO: delete state that should not be saved in a cookie (https://github.com/devCrossNet/vue-starter/issues/52)
        delete localState.app.config;
        return localState;
      },
    },
  );
```

This can be used, for example, to store an access token in a cookie so you can use the access token for api calls on the server and server-side-render the app.

following part in `/src/app/store.ts` is responsible for extracting the cookie data and pass it into the initial state of the app.

```js
  if (SERVER) {
    state = persistCookieStorage.getMergedStateFromServerContext<IState>(serverContext, state);
    state.app.config = serverContext.appConfig;

    if (state.app && state.app.lang) {
      serverContext.acceptLanguage = state.app.lang;
      serverContext.htmlLang = state.app.lang.substr(0, 2);
    } else {
      state.app.lang = serverContext.acceptLanguage;
    }
  }
```

## Localstorage Persist

file: `/src/app/store.ts`:
```js
  return store = new Vuex.Store(
    {
      state,
      actions:   Actions,
      mutations: Mutations,
      getters:   Getters,
      plugins:   [
        VuexPersist(
          [
            new PersistLocalStorage(['auth', 'tracking']),
            persistCookieStorage,
          ],
        ),
      ],
    },
  );
```
This will save the `auth` and `tracking` module in the LocalStorage and hydrates the state back into the initial state before the client side app takes over.
