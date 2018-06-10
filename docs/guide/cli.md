# Create your first page

To create a new page, you have to add a new module to your application.

## What is a module?

A module is an encapsulated piece of domain logic in your application.

###  Use-cases for a module

**Dynamic page**: consists of a lot of view logic, at least one route and state-management

**Static page**: has no state-management but a route e.g. `/imprint`

**Domain logic with shared view components**: e.g. authentication state, actions, mutations plus login/signup forms but no routes

**Domain logic**: just plain logic with state-management but no routes and no components

## Create a module

Let's create a page that is dynamic and has to have stage-management,
run `npm run g` and you will be asked some questions:

```bash
? [PLOP] Please choose a generator. (Use arrow keys)
  component - Add a single file component 
❯ module - Add a module with VueX store and routes 
  connected - Add a VueX connected component 

```

choose `module` and continue with `enter`:

```bash
? [PLOP] Please choose a generator. module - Add a module with vuex store and routes
? What should it be called? 
```

This will be the name of your module, connected component and route.

Type `Foo` and press `enter`

```bash
? [PLOP] Please choose a generator. module - Add a module with vuex store and routes
? What should it be called? Foo
? Do you want routes? Yes
? Do you want vuex? Yes
```

press two more times `enter` and you will see that the CLI generated a few files:

```bash
[SUCCESS] add /vue-starter/src/app/foo/Foo/Foo.vue
[SUCCESS] add /vue-starter/src/app/foo/Foo/Foo.spec.ts
[SUCCESS] add /vue-starter/src/app/foo/routes.ts
[SUCCESS] add /vue-starter/src/app/foo/actions.spec.ts
[SUCCESS] add /vue-starter/src/app/foo/actions.ts
[SUCCESS] add /vue-starter/src/app/foo/getters.spec.ts
[SUCCESS] add /vue-starter/src/app/foo/getters.ts
[SUCCESS] add /vue-starter/src/app/foo/module.ts
[SUCCESS] add /vue-starter/src/app/foo/mutations.spec.ts
[SUCCESS] add /vue-starter/src/app/foo/mutations.ts
[SUCCESS] add /vue-starter/src/app/foo/state.ts
```

You will also see that the CLI already referenced the new files in the necessary places: `./src/app/router.ts`, `./src/app/state.ts` and `./src/app/store.ts`.

::: tip Name can include path
The name of a `module`, `connected` or `component` can be prefixed with a path.

For example `counter/MyNewComponent` will create a component inside the module `counter`.

**A `connected` component for example has to be prefixed with a path because it only can live inside a module.**
:::

## Verification

Go to [http://localhost:3000/foo](http://localhost:3000/foo) and you should see the `Counter` example again (this is the default blueprint for modules).

::: tip Does everything work?
To verify if you didn't break something, run `npm test`.
:::
