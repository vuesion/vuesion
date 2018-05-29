---
prev: ./
next: ./guide/install
---
# Introduction

## This is not just another starter project

When starting the development of a new project, it's often tempting to start with some libraries. They provide solutions to already solved problems, so you can solve on the unique challenges of your application.

Over the years, I've found that the number of times phrases like _"I can't change that because the library doesn't support it"_ increased the further the project had progressed.

I often had to write feature-requests for libraries, remove the Webpack configuration at the start of the project, or had to create a local fork of the library to implement the required feature. To bring an end to that kind of mess, I decided to take all common use cases that I've encountered and bring them together in this starter. It's not a library. The **The code is all yours** to modify and build upon.

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

::: warning
**Vue Starter is for experienced developers who need to deliver projects quickly with the highest possible quality.** It's assumed that developers already have experience with Vue and the features listed above. Looking for an easier way to get started with Vue and Webpack? [This template](https://github.com/vuejs-templates/webpack) may be more your cup of tea.
:::

## Todo

If you want to help or you have an idea on how to improve this project **feel free to file an [issue](https://github.com/devCrossNet/vue-starter/issues)**

## Why not vue-cli or nuxt.js ?

This boilerplate is opinionated, aiming to educate and empower users to configure their own framework, suited to their needs. It includes as few libraries as possible to keep you flexible and to enable you to implement every product requirement that comes down the road.

Use cases for this boilerplate:
- The requirements for the product might change and you want to maintain maximum flexibility and control.
- You'd like to focus on developing skills that will transfer across any Vue project.
- You're working in a large team, so you need tooling to help everyone avoid common mistakes,
  write in a consistent style, and avoid bikeshedding in PRs.
