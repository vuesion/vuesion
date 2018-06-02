# Style Guide

The default style guide that is used in this project, is based on the [Vue Style Guide](https://vuejs.org/v2/style-guide/)
and the [Angular Style Guide](https://angular.io/guide/styleguide).

## File structure conventions

```
├── code-style-web-storm.xml  // code formatting rules for .idea
├── config                    // webpack configs
├── cypress                   // e2e tests
├── docs                      // can be deleted
├── i18n                      // language files used by vue-i18n
├── logs                      // express logs
├── src
│   ├── app                   // main app code
│   │   ├── app               // app module - contains main component
│   │   ├── config            // app config to pass data from the server environment to the client
│   │   ├── shared            // shared code
│   │   ├── ...               // new modules will be added on this directory level
│   │   ├── app.ts            // app setup
│   │   ├── router.ts         // global routing information
│   │   ├── state.ts          // global app state
│   │   └── store.ts          // vuex store
│   ├── client
│   │   ├── index.ts          // entry point for client application
│   │   └── sw.ts             // service worker
│   ├── index.template.html   // template, needed for SSR and webpack
│   ├── server
│   │   ├── dev               // dev server
│   │   ├── server.ts         // express app
│   │   ├── index.ts          // entry point for server application
│   │   ├── isomorphic.ts     // entry point for server-side rendering
│   │   ├── middlewares       // express middlewares
│   │   ├── routes            // express routes
│   │   └── utils             // utils for SSR
│   └── static                // static files mapped to /
└── tools
    ├── generators            // generator cli
    └── scripts               // productivity tools
```
### What is a Module?

A module is an encapsulated piece of domain logic in your application, this could be for example:

####  Use-cases for a module

**Dynamic page**: consists of a lot of view logic, at least one route and state-management

**Static page**: has no state-management but a route e.g. `/imprint`

**Domain logic with shared view components**: e.g. authentication state, actions, mutations plus login/signup forms but no routes

**Domain logic**: just plain logic with state-management but no routes and no components

_A module usually has routing information,  state management or both._

**You can easily create modules with `npm run g`**

### What is a Connected Component?

A connected component is a [Single File Component](https://vuejs.org/v2/guide/single-file-components.html) with VueX-mappings
and **it has to live inside a module**.

(_these components are different compared to normal components because it is required to set up a VueX mock store for testing_)

### What is a Component?

This is a simple [Single File Component](https://vuejs.org/v2/guide/single-file-components.html) without bindings,
it just takes props and emits events - this is called a **"stupid"** component.

A Component can be placed everywhere. Usually, they live in the first level of a module, but it can also be inside other component folders.

::: tip Testing
You should try to have as many "stupid" components as possible. They are much easier to test because you can just pass test objects, values, stubs and mocks as a property. And they are much better to reuse!

If you want to know how to archive this, have a look at [Container Components (in our vocabulary "Connected Components")](https://medium.com/@learnreact/container-components-c0e67432e005).
:::

## Naming Conventions

Naming is one of the hardest things in software development.
We can not support you with perfect names because we don't know your domain but we can help you to be consistent in naming files, modules, CSS classes, etc.

Let's consider you create a new page (module) with state-management, routes and a component named `FooBar`,
what would be the different variations for different contexts?

- module `fooBar`
- route `fooBar`
- connected component `FooBar`
- css class `fooBar` // we decided against the hyphen notation because you have to use lower camel-case anyway to reference it with `$style`
- actions `FooBarActions`
- getters `FooBarGetters`
- mutations `FooBarMutations`
- state interface `IFooBarState`
- default state `FooBarDefaultState`

::: tip Generator CLI
If you want to save some time and to keep the style guide consistent,
we recommended you to use the included **[Generator CLI](../guide/cli.md)** to generate new code.
:::
