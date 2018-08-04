# Redirect to another page

The vue-starter includes [VueRouter](https://router.vuejs.org/) to support navigating between pages.

::: tip Server-side routing vs. client-side routing
In isomorphic apps it is important to keep in mind that routing works differently if we are handling an initial page load,
which is handled on the server side, or if we are changing the URL later and transition between views on the client side.

A redirect on the server side usually means responding with HTTP status code 301 or 302 and instead of rendering a page,
sending a different URL to the client, that it is supposed to load instead.

On the client side, a redirect is usually just automatically changing the URL.
:::

## Static route configuration

VueRouter allows setting up routes that always redirect to another route in a very simple way.

Check out the example in `src/app/app/routes.ts`:

```js
import { RouteConfig } from 'vue-router/types/router';

export const AppRoutes: RouteConfig[] = [
  ...
  {
    path:      '/redirect',
    redirect:  '/',
  },
];
```

On requesting or navigating to the path `/redirect`, the URL will be automatically updated to `/` and the home page content will be rendered.

## Programmatic redirects

The vue-starter also supports triggering a redirect depending on certain conditions, for example you want the user to see the login page
if your API responds with "Unauthorized".

In module Vue files such as `src/app/counter/Counter/Counter.vue` the `prefetch` function gets the router instance passed as an argument.
Now you can call `router.push` to change the URL before the page is rendered, which means redirecting.

Example:
```js
    ...
    prefetch:   ({ store, router }: IPreLoad) => {
      return store
             .dispatch('counter/increment')
             // For this to work, make sure the error is not caught in the action!
             .catch((error) => {
               if (error.response.status === 401) {
                 router.push('/login');
               }
             });
    },
    ...
```
