# FAQ

## Why not vue-cli or nuxt.js ?

This boilerplate is opinionated, aiming to educate and empower users to essentially configure their own framework,
ideally suited to their needs. It also includes as few libraries as possible to keep you flexible and to enable you
to implement every product requirement that comes down the road.

Use cases for this boilerplate:

- The requirements for the product might change and you want to maintain maximum flexibility and control.
- You'd like to focus on developing skills that will transfer across any Vue project.
- You're working in a large team, so you need tooling to help everyone avoid common mistakes,
  write in a consistent style, and avoid bikeshedding in PRs.

## Why are my properties not reactive?

In Vuex and on your component instance, properties must be defined in the initial state otherwise, they will not be
observed for changes.

[Please read the rules of reactivity.](https://vuex.vuejs.org/guide/mutations.html#mutations-follow-vue-s-reactivity-rules)

## I don't need to build my own design-system, can I use vuesion with a 3rd party UI framework?

Yes, you can! [See this tutorial.](tutorials/third-party.md)

## I don't need server-side-rendering, can I use vuesion to build a single-page-application?

Yes, [here is the tutorial!](guide/deployment.md#static-single-page-application)

**The following features are not available in the single-page-application build:**

- App Config
- Runtime Config
