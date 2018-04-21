# vue-starter [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=flat)](https://twitter.com/intent/tweet?text=Vue-Starter%20an%20enterprise%20ready%20boilerplate%20for%20isomorphic,%20progressive%20web%20apps%20with%20Vue.JS&url=https://github.com/devCrossNet/vue-starter&via=_jwerner_&hashtags=VueJS,SEO,Enterprise,VueX) <a href="https://slack-vue-starter.herokuapp.com/" target="_blank"><img src="https://home-assistant.io/images/supported_brands/slack.png" height="20px" /></a>

> an enterprise ready boilerplate for isomorphic, progressive web apps with Vue.JS

[![Build Status](https://travis-ci.org/devCrossNet/vue-starter.svg?branch=master)](https://travis-ci.org/devCrossNet/vue-starter)
[![codecov](https://codecov.io/gh/devCrossNet/vue-starter/branch/master/graph/badge.svg)](https://codecov.io/gh/devCrossNet/vue-starter)
[![Dependencies](https://img.shields.io/david/devCrossNet/vue-starter.svg)](https://david-dm.org/devCrossNet/vue-starter)
[![DevDependencies](https://img.shields.io/david/dev/devCrossNet/vue-starter.svg)](https://david-dm.org/devCrossNet/vue-starter?type=dev)
[![GitHub repo size](https://img.shields.io/github/repo-size/devCrossNet/vue-starter.svg)]()
[![GitHub issue last update](https://img.shields.io/github/issues/detail/last-update/devCrossNet/vue-starter/979.svg)]()
[![Maintainability](https://api.codeclimate.com/v1/badges/2ff891c2cf949a6a818a/maintainability)](https://codeclimate.com/github/devCrossNet/vue-starter/maintainability)

# Live demo

If you want to see a preview before you decide for this starter, please visit the **[vue-starter app on heroku!](https://vue-starter.herokuapp.com/)**

![vue-starter](https://user-images.githubusercontent.com/1667598/34497260-2d39a7ac-effd-11e7-8d88-ff011f0b3244.gif)

# Features
**Quick scaffolding**

Create components, connected components, modules - and their tests - right from the CLI!

**Instant feedback**

Enjoy the best DX (Developer eXperience) and code your app at the speed of thought!
Your saved changes to the CSS and TypeScript are reflected instantaneously without refreshing the page.
Preserve application state even when you update something in the underlying code!

**SEO** (with [vue-meta](https://github.com/declandewet/vue-meta))

We support SEO (document head tags management) and server-side-rendering for search engines
that support indexing of JavaScript content. (eg. Google)

**Progressive-Web-App**

Offline-first support with service-workers and a lighthouse score as high as possible (for me - 90+).

**Enterprise ready**

Common style guide, TypeScript and the best test setup: Automatically guarantee code quality and non-breaking changes.

**Animations** (with [anime.js](http://animejs.com/))

A stable animations set up already included.

**Components**

A flexible component library that'll be extended over time.

**Storybook**

Storybook for Vue is a UI development environment for UI components. It allows interactive development, testing and sharing of UI components in various property states.

**Industry-standard i18n internationalization support**

Scalable apps need to support multiple languages, easily add and support multiple languages with [vue-i18n](https://github.com/kazupon/vue-i18n).

**Predictable state management**

Centralized State Management with [vuex](https://github.com/vuejs/vuex).

**Routing with data prefetching**

Server-side-rendering of prefetched data and transferring state from server to client.

**Configuration**

Default configuration is stored in `/src/app/config/default.json`, which can get overridden by providing valid JSON in the environment variable `CONFIG` on application startup or by an environment specific file.
For instance, in order to set a custom API endpoint, run `CONFIG='{"api":{"baseUrl": "http://custom.api.endpoint/"}}' npm run start`. Check documentation of [config](https://www.npmjs.com/package/config) module.

# Getting started

1. Install Node.js 8.7.x or higher. Use [nvm](https://github.com/creationix/nvm) to maintain multiple Node.js versions
2. Install npm version 5.4.x or higher
3. clone repository `git clone https://github.com/devCrossNet/vue-starter`
4. Install dependencies: `npm install`
5. Run `npm run dev`. The server runs on port `3000` by default, set `PORT` environment variable to configure a different port

# Documentation

- **[npm tasks](docs/NPM_SCRIPTS.md)**
- **[generator CLI](docs/CLI.md)**
- **[style guide](docs/STYLE_GUIDE.md)**
- **[i18n](docs/I18N.md)**
- **[vuex and vuex-persist](docs/VUEX.md)**
- **[components](docs/COMPONENTS.md)**

# FAQ

**Why should I use this boilerplate over vue-cli or nuxt.js?**
This boilerplate is opinionated, aiming to educate and empower users to essentially configure their own framework, ideally suited to their needs. It also includes as less libraries as possible to keep you flexible and to enable you to implement every product requirement that comes down the road.

Use cases for this boilerplate:
- The requirements for the product might change and you want to maintain maximum flexibility and control.
- You'd like to focus on developing skills that will transfer across any Vue project.
- You're working in a large team, so need tooling to help everyone avoid common mistakes, write in a consistent style, and avoid bikeshedding in PRs.

# Sponsors

<a href="https://careers.bcgdv.com/locations/berlin" title="BCG Digital Ventures">
  <img src="https://user-images.githubusercontent.com/1667598/38944976-89d5c03c-4335-11e8-92f4-910049c2166a.jpeg" alt="BCG Digital Ventures" />
</a>

# Reference resources

- [React Boilerplate](https://github.com/react-boilerplate/react-boilerplate)
- [vue-ssr-starter-kit](https://github.com/doabit/vue-ssr-starter-kit)
- [Angular](https://github.com/angular/angular)
- [vue-enterprise-boilerplate](https://github.com/chrisvfritz/vue-enterprise-boilerplate)

# License

[MIT](http://opensource.org/licenses/MIT)
