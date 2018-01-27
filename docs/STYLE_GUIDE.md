# Style Guide

The default style guide, that we use in this project, is based on the [Vue.Js Style Guide](https://vuejs.org/v2/style-guide/) and the [Angular Style Guide](https://angular.io/guide/styleguide).

_If you want to save some time and to keep the style guide consistent, we recommend to use the included **[generator CLI](CLI.md)** to generate new code._

## Directory Structure

```
│
├── config                          // webpack configuration
├── cypress                         // cypress e2e tests
├── docs                            // docs for this starter, not needed in your project
├── i18n                            // language files used by vue-i18n
├── src
│   ├── app                         // main business logic for your website, shared by client and server
│   │   ├── App.vue                 // main component
│   │   ├── actions.ts              // combined actions, including all modules
│   │   ├── app.ts                  // app set up
│   │   ├── components              // module, not needed in your project
│   │   ├── counter                 // module, not needed in your project
│   │   ├── getters.ts              // combined getters, including all modules
│   │   ├── home                    // module and landing page
│   │   ├── index.template.html     // template, needed for SSR and webpack
│   │   ├── mutations.ts            // combined mutations, including all modules
│   │   ├── router.ts               // combined routes, including all modules
│   │   ├── shared                  // component, modules, plugins that are dependencies for more than one module
│   │   └── store.ts                // vuex-store set up
│   ├── assets                      // assets, served by express static middleware
│   ├── client                      // entry point for client application
│   └── server                      // express server that handles server-side-rendering
└── tools
    ├── generators                  // generator cli
    └── scripts                     // helper scripts

```

## What is a Module?

A module is an encapsulated piece of domain logic in your application, this could be for example:

- a dynamic page with lot of view logic and state management
- a static page without state management e.g. imprint
- domain logic with shared view components e.g. authentication logic + login/signup forms
- domain logic

_A module usually has routing information,  state management or both._

**You can easily create modules with `npm run g`**

## What is a Connected Component?

A connected component is a [Single File Component](https://vuejs.org/v2/guide/single-file-components.html) with vuex-mappings.
(_we added this distinction to a normal component, because the test-setup is a little bit different_)

## What is a Component?

This is a simple [Single File Component](https://vuejs.org/v2/guide/single-file-components.html)
