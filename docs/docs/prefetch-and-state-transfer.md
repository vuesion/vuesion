# Prefetch data and state transfer

# State transfer

State transfer describes the process of providing data on the server side to the client side application.
Vue.js provides this functionality out-of-the-box, it puts the initial state object for VueX in a global window variable
called `__INITIAL_STATE__`.

In the file `./src/app/store.ts` we use this window object to initialize our VueX store:

```js
...

const state: IState = (CLIENT && window.__INITIAL_STATE__) || DefaultState;

...
```

This enables us to transfer data that we already generated on the server to the client. With this we can prevent to do
the same work in the browser again.

This is really important if we fetch data from a remote API - **we don't want to do this twice per page!**

# How to fetch data from a remote API on the server side?

Usually we fetch data in the `created` or `mounted` function of a component this works well in the browser
and provides the component as early as possible with data.

In the context of server-side-rendering, this works a little bit different.

To execute API calls on the server, we have to know about these calls.
In order to to know about them, we need to make them static and find out which components that matches the current route
have this function.

If we have a look at the file `./src/server/isomorphic.ts`:

```js
...

      Promise
      .all(matchedComponents.map((component: Component) => {
        if ((component as any).prefetch) {
          return (component as any).prefetch({ store, route: router.currentRoute, router } as IPreLoad);
        }

        return Promise.resolve();
      }))
      
...
```

we see that the vue-starter set-up expects us to call this static function `prefetch`. 

This part of the code is
responsible for getting all the `prefetch` functions from all the components that match the current route.

If you want to see this concept in action, have a look at the file `./src/app/counter/Counter/Counter.vue`:

```js
...

    prefetch:   (options: IPreLoad) => {
      return options.store.dispatch('counter/increment');
    },
    
...
```

We always have to return a `Promise` as result of this function, the vue-starter makes sure that every Promise resolves
before it renders the page.

The function gets an `options` object as the first parameter - you can find the available options in the file `./src/server/isomorphic.ts`

```js
...

export interface IPreLoad {
  store?: Store<IState> | any;
  route?: Route | any;
  router?: VueRouter;
}
      
...
```
