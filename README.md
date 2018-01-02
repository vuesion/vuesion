# vue-starter
> an enterprise ready boilerplate for isomorphic, progressive web apps

[![Build Status](https://travis-ci.org/devCrossNet/vue-starter.svg?branch=master)](https://travis-ci.org/devCrossNet/vue-starter)
[![codecov](https://codecov.io/gh/devCrossNet/vue-starter/branch/master/graph/badge.svg)](https://codecov.io/gh/devCrossNet/vue-starter)
[![Dependencies](https://img.shields.io/david/devCrossNet/vue-starter.svg)](https://david-dm.org/devCrossNet/vue-starter)
[![DevDependencies](https://img.shields.io/david/dev/devCrossNet/vue-starter.svg)](https://david-dm.org/devCrossNet/vue-starter?type=dev)
[![GitHub repo size](https://img.shields.io/github/repo-size/devCrossNet/vue-starter.svg)]()
[![GitHub issue last update](https://img.shields.io/github/issues/detail/last-update/devCrossNet/vue-starter/979.svg)]()

# Goal

This starter should enable you to build an enterprise ready web-app as fast as possible.
The following use cases are already included:

- server-side-rendering
- SEO support
- lighthouse score as high as possible (90+)
- enterprise ready
- enable unit/integration tests to have 100% coverage
- animations
- flexible component library
- i18n support
- fast development / code generators

With its integrated generators, it is possible to generate components and whole modules.
This will save you a lot of time during development!

## Getting started

### Prerequisites
- Install Node.js 8.7.x or higher. Use [nvm](https://github.com/creationix/nvm) to maintain multiple Node.js versions.
- Install npm version 5.4.x or higher

### Installation
- Install dependencies: `npm install`

### Run the application
Run `npm run dev`. The server runs on port `3000` by default, set `PORT` environment variable to configure a different port.

### Run unit tests
- `npm test` runs tests once
- `npm run test:coverage` runs tests with coverage once

Find a detailed coverage report in `coverage/iconv-report/index.html`

### Generators
This boilerplate comes with the possibility to generate modules, components and connected components
to keep a common style guide and to make development faster.

To generate code just run `npm run generate` or `npm run g` and follow the instructions.

## Release
To release a new version of your project run one of the following commands:

- `npm run release:major`
- `npm run release:minor`
- `npm run release:patch`

This will also automatically generate a change log.

## Thanks to

- [React Boilerplate](https://github.com/react-boilerplate/react-boilerplate)
- [vue-ssr-starter-kit](https://github.com/doabit/vue-ssr-starter-kit)
- [Angular](https://github.com/angular/angular)
