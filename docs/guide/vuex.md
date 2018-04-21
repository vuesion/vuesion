# State management

# Persist your state
This boilerplate comes with a vuex middleware that allows you to persist the application state.

## Cookie Persist

File: `./src/app/store.ts`:
```js
          new PersistCookieStorage(
            ['app'],
            {
              cookieOptions: {
                expires: 365,
              },
              beforePersist: beforePersistCookieStorage,
            },
          ),
```

This can be used, for example, to store an access token in a cookie that can be used later for api calls to server-side-render the app.

Following part in `/src/server/isomorphic.ts` is responsible for extracting the cookie data and pass it into the initial state of the app.

```js
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
```

## Localstorage Persist

File: `./src/app/store.ts`:
```js
new PersistLocalStorage(['counter'], beforePersistLocalStorage),
```

This will save the `counter` module in the LocalStorage and hydrates the state back into the initial state before the client side app takes over.
