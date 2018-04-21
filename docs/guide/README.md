# Introduction

## Why another starter project?

If you start a new project and you have to deliver high-quality code in very short time, 
it is often very helpful to use libraries because they provide you with solutions to already solved problems.

Over the years, I've found that this only works to a degree. In most projects I worked on, the number of phrases like 
_"I can not change that because the library does not support it."_ increased the further the project had progressed.

I've often been in situations where I had to write feature-requests, eject the webpack configuration in the first second of the project,
or I had to create a local fork of the library to implement the requested feature.

From this experience, I decided to implement all the use cases, that I experienced, in this starter.
If you use this starter, **the code is all yours**. You are less limited by a
library and you can add any additional use case you encounter. 

::: tip 
The limitations of your project are up to the imagination of your designers and your ability to implement their feature requests
:::

::: warning
I would not recommend this starter for beginners, **this starter is for experienced developers who need to deliver projects very quickly with the highest possible quality**.
:::

## Features

- Quick scaffolding with the [Generator CLI](generator-cli.md)
- Enterprise ready
- SEO with [vue-meta](https://github.com/declandewet/vue-meta)
- Industry-standard i18n support with [vue-i18n](https://github.com/kazupon/vue-i18n)
- Progressive-Web-App
- Component library
- Routing with data prefetching
- [Storybook integration](https://storybook.js.org/basics/guide-vue/)
- Predictable state management with [vuex](https://vuex.vuejs.org/en/)

## Todo

This is an every evolving project,
if you want to help or you have an idea how to improve this project - 
**feel free to file an [issue](https://github.com/devCrossNet/vue-starter/issues)**

## Why not vue-cli or nuxt.js ?

This boilerplate is opinionated, aiming to educate and empower users to essentially configure their own framework,
ideally suited to their needs. It also includes as few libraries as possible to keep you flexible and to enable you
to implement every product requirement that comes down the road.

Use cases for this boilerplate:
- The requirements for the product might change and you want to maintain maximum flexibility and control.
- You'd like to focus on developing skills that will transfer across any Vue project.
- You're working in a large team, so you need tooling to help everyone avoid common mistakes,
  write in a consistent style, and avoid bikeshedding in PRs.
