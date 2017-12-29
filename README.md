# vue-starter

[![Build Status](https://travis-ci.org/devCrossNet/vue-starter.svg?branch=master)](https://travis-ci.org/devCrossNet/vue-starter)

## Development

### Setup

- Install Node.js 8.7.x or higher. Use [nvm](https://github.com/creationix/nvm) to maintain multiple Node.js versions.
- Install npm version 5.4.x or higher
- Install dependencies: `npm install`

### Running the application

Run `npm run dev`. The server runs on port `3000` by default, set `PORT` environment variable to configure a different port.

### Running unit tests

- `npm test` runs tests once
- `npm run test:coverage` runs tests with coverage once

Find a detailed coverage report in `coverage/iconv-report/index.html`

### Generators

This boilerplate comes with the possibility to generate modules, components and connected components to keep a common style guide and to make development faster.

To generate code just run `npm run generate` or `npm run g` and follow the instructions.

## Release

To release a new version of this project run one of the following commands:

- `npm run release:major`
- `npm run release:minor`
- `npm run release:patch`

This will also automatically generate a change log.

## Thanks to

- [React Boilerplate](https://github.com/react-boilerplate/react-boilerplate)
- [vue-ssr-starter-kit](https://github.com/doabit/vue-ssr-starter-kit)
- [Angular](https://github.com/angular/angular)
