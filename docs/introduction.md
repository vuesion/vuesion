---
prev: ./
next: ./guide/install
---
# Introduction

## This is not just another starter project


When starting the development of a new project, it's often tempting to start with some libraries.
They provide solutions to already solved problems, so you can solve on the unique challenges of your application.

But you know that this only works to a certain degree. In most projects you are working on, the number of phrases like 
**_"I can not change that because the library does not support it."_** increases over time.

You've often been in situations where you had to write feature-requests, eject the webpack configuration in the first second of the project,
or you have to create a local fork of the library to implement the requested features.

Because you're not the only one with this experience,
we decided to implement all the use cases, that we experienced over time, in this starter.

It's not a library.

**The code is all yours** to modify and build upon. 

::: tip No Excuses
The limitations of your project are up to the imagination of the designers in your project and your ability to implement their feature requests.
:::

::: tip Productivity Tip
The key for high-performance engineering is a good balance between a variety of music genres,
for this reason, we provide you with a [Beast mode playlist on Youtube](https://www.youtube.com/playlist?list=PLcLlpvN8RJznCOm4dJ5rN5VJKFfy0hMNp)
:::

::: warning
**Use this project if you are an experienced developer who needs to deliver projects quickly with the highest possible quality.**

If you look for an easier way to get started with Vue and Webpack, 
[this template](https://github.com/vuejs-templates/webpack) may be more your cup of tea.
:::

## Features

- Quick scaffolding with the [Generator CLI](./guide/cli.md)
- Enterprise ready
- SEO with [vue-meta](https://github.com/declandewet/vue-meta)
- Industry-standard i18n support with [vue-i18n](https://github.com/kazupon/vue-i18n)
- Progressive-Web-App
- Component library
- Routing with data prefetching
- [Storybook integration](https://storybook.js.org/basics/guide-vue/)
- Predictable state management with [vuex](https://vuex.vuejs.org/en/)

## Recommended architecture

The vue-starter is build on top of the idea of micro-services or a service-oriented-architecture.

This is because a separation of concerns approach is much better to maintain over time and it's much easier to manage a single technology
per service instead of a mix of technologies e.g. PHP server-side-rendering and a Javascript client side app.

::: tip Deployment
The vue-starter project should be it's own deployable unit, it should be dreaded as it's own service in the architecture.
:::

::: tip Example
If the vue-starter needs to access a database - the database should be exposed as another service and the vue-starter
should access this service via RESTful API calls.
:::

#### Architecture diagram

<img :src="$withBase('/architecture.jpg')" alt="architecture"> 

## Todo

This is an ever-evolving project,
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
