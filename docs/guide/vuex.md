# Save your state

By default, VueX keeps the state in memory. But the problem with keeping the state in memory is,
that the state is reset as soon as the user reloads the page. 

There are many ways to persist state if the user reloads the page,
for example, you could keep variables in the query of the URL and restore the state if the page loads.

This approach is ok for a small amount of data that is not confidential, e.g. filters, sort directions, page number.

But sometimes you have to store confidential data like access tokens or big data objects like a list of products.
In these cases, you need to store your data in cookies or LocalStorage.

The vue-starter comes with a VueX middleware that allows you to decide to persist VueX modules in different storages.

## Persist to cookies

The vue-starter includes a CookieStorage adapter for the VueX-persist middleware.

::: tip Cookies
**Before you apply this tip, have a talk with a security engineer!**

Cookies are good for keeping access tokens. Cookies are available on the server too.
This means you can connect to protected APIs on the server to render the initial page for the user
with the correct data.
:::

The CookieStorage adapter is already referenced in the file `./src/app/store.ts`.

```js
import { PersistCookieStorage } from './shared/plugins/vuex-persist/PersistCookieStorage';

...

const beforePersistCookieStorage = (localState: IState): IState => {
  delete localState.app.config;
  delete localState.app.defaultMessages;
  delete localState.app.redirectTo;

  return localState;
};

...

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

To persist your state to a cookie, you have to initialize a 
new instance of `PersistCookieStorage` which takes a list of module names as 
the first parameter and an `options` object as the second parameter.

You can define the `cookieOptions`, which is a copy of the
[js-cookie](https://github.com/js-cookie/js-cookie#cookie-attributes) attributes
and a callback to delete state that should not be persisted to the cookie.

### Extracting cookie state on the server

The following part of `/src/server/isomorphic.ts` is responsible for extracting the cookie data and merging it into the initial state of the app.

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

::: warning Cookie size
Please keep in mind that most web servers have a default maximum header size of **4KB** for cookies,
so you should consider just saving necessary data.
:::

## Persist to LocalStorage

The vue-starter includes a LocalStorage adapter for the VueX-persist middleware.

::: tip LocalStorage
LocalStorage works well for saving mid-sized data, but be aware that it is only available on the **client**.
That means that data you save to it will not be rendered on the server. The DOM will always differ in this case.
:::

It is already referenced in the file `./src/app/store.ts`.

```js
import { PersistLocalStorage }  from './shared/plugins/vuex-persist/PersistLocalStorage';

...

const beforePersistLocalStorage = (localState: IState): IState => {
  delete localState.counter.incrementPending;
  delete localState.counter.decrementPending;

  return localState;
};

...

new PersistLocalStorage(['counter'], beforePersistLocalStorage),
```

To persist your state to LocalStorage, you have to initialize a 
new instance of `PersistLocalStorage` which takes a list of module names as 
the first parameter and a callback to delete state that should not be persisted
to LocalStorage as the second parameter.
