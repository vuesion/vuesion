<img width="256px" height="256px" src="https://user-images.githubusercontent.com/1667598/55292014-ea98a800-53e5-11e9-82ca-11ba7bb2bbcd.png" alt="vuesion logo" align="center" />

# Vuesion

_**The most complete boilerplate for production-ready PWAs. With focus on performance, development speed, and best practices build with Nuxt.js**_

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/vuesion/vuesion/graphs/commit-activity)
[![CircleCI](https://circleci.com/gh/vuesion/vuesion.svg?style=svg)](https://circleci.com/gh/vuesion/vuesion)
[![Test Coverage](https://api.codeclimate.com/v1/badges/c8e3979ea94da8e9d683/test_coverage)](https://codeclimate.com/github/vuesion/vuesion/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/c8e3979ea94da8e9d683/maintainability)](https://codeclimate.com/github/vuesion/vuesion/maintainability)
[![Dependencies](https://img.shields.io/david/vuesion/vuesion.svg)](https://david-dm.org/vuesion/vuesion)
[![DevDependencies](https://img.shields.io/david/dev/vuesion/vuesion.svg)](https://david-dm.org/vuesion/vuesion?type=dev)
[![GitHub issues-closed](https://img.shields.io/github/issues-closed/vuesion/vuesion.svg)](https://GitHub.com/vuesion/vuesion/issues?q=is%3Aissue+is%3Aclosed)
[![GitHub release](https://img.shields.io/github/release/vuesion/vuesion.svg)](https://GitHub.com/vuesion/vuesion/releases/)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fvuesion%2Fvuesion.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fvuesion%2Fvuesion?ref=badge_shield)

# Live demo

Please visit the **[vuesion app on heroku!](https://vuesion.herokuapp.com/)**

Or have a look into the future and visit the **[vuesion-next app on heroku!](https://vuesion-next.herokuapp.com/)**

# Features

## Testing

- [Cypress.io E2E testing](https://www.cypress.io/)
- [Jest Testing framework](https://jestjs.io/)
- [Testing-library](https://testing-library.com/) to encourage good testing practices
- 250+ example tests included

## DX, Code quality and maintenance

- [TypeScript](https://www.typescriptlang.org/)
- [Eslint](https://eslint.org/)
- [Commit message linting](https://github.com/conventional-changelog/commitlint)
- [Prettier code formatting](https://prettier.io/)
- [Semantic releases](./.github/semantic.yml)
- [Changelog](https://www.npmjs.com/package/generate-changelog)
- [Husky pre-commit hooks](https://github.com/typicode/husky)
- [Dockerfile included](./Dockerfile)
- [.env support](./.env-prod)

## Core

- server-side-rendering, single-page-app or statically generated HTML with [Nuxt.js](https://nuxtjs.org/)
- [100% customizable Design-system with 35+ components including](vuesion.herokuapp.com/storybook)
  - layout, typography, button, input, select, checkbox, radio, (range-)slider, toggle, ...
  - theming/whitelabel support
- [Figma UIKit](https://www.figma.com/file/DvP4EE7gAJH3fsc4RFqZYc/Vuesion-Core?node-id=1686%3A4660)
- [SEO support](https://github.com/nuxt/vue-meta)
- [i18n support](https://i18n.nuxtjs.org/)
- [Authentication module](https://auth.nuxtjs.org/)
- [Axios module](https://axios.nuxtjs.org/)
- [Vue-Apollo module](https://github.com/nuxt-community/apollo-module)
  - with [apollo-composable](https://v4.apollo.vuejs.org/)
  - integrated with Authentication- and Axios module
- [PWA module](https://pwa.nuxtjs.org/)
- [State management with vuex](https://vuex.vuejs.org/)
- Code generators for
  - components
  - pages
  - interfaces and fixtures
  - vuex modules
- [Storybook](https://storybook.js.org/) with the following add-ons
  - [a11y](https://storybook.js.org/addons/@storybook/addon-a11y/)
  - [actions](https://storybook.js.org/addons/@storybook/addon-actions/)
  - [console](https://storybook.js.org/addons/@storybook/addon-console/)
  - [links](https://storybook.js.org/addons/@storybook/addon-links/)
  - [story-source](https://storybook.js.org/addons/@storybook/addon-storysource)
  - [viewport](https://storybook.js.org/addons/@storybook/addon-viewport/)
  - [theme-switcher](https://github.com/vuesion/packages/tree/master/packages/storybook-theme-switcher)
- Form validation with [vee-validate](https://vee-validate.logaretm.com/v3)
- [Composition-api module](https://composition-api.nuxtjs.org/)
- [Anime.js](https://animejs.com/) integration

# Getting started

> Important note for **Windows users only**: https://github.com/zkat/npx/issues/146#issuecomment-384016791

1. Run `npx @vuesion/create [project-name]` for example `npx @vuesion/create my-app` _(try the latest version by adding the `--next` flag)_
2. Change directory `cd my-app`
3. Run `npm run dev`

# Documentation

**[https://vuesion.github.io/docs/en/](https://vuesion.github.io/docs/en/)**

# Support this project

- [Give a :star:!](https://github.com/vuesion/vuesion/stargazers)
- [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=flat)](https://twitter.com/intent/tweet?text=Vuesion%20an%20enterprise%20ready%20boilerplate%20for%20isomorphic,%20progressive%20web%20apps%20with%20Vue.JS&url=https://github.com/vuesion/vuesion&via=vuesion1&hashtags=Vuesion,VueJS,SEO,Enterprise) it!
- Join the <a href="https://discord.gg/59x5cg2" target="_blank"><img src="https://cdn0.iconfinder.com/data/icons/square-logo-buttons/512/discord-1-128.png" height="20px" /> Discord community</a>!
- [Contribute!](https://github.com/vuesion/vuesion/blob/master/.github/CONTRIBUTING.md)
- [Fund an Issue!](https://issuehunt.io/r/vuesion/vuesion)

# Contribute

Contributions are always welcome! Please read the [contribution guidelines](https://github.com/vuesion/vuesion/blob/master/.github/CONTRIBUTING.md) first.

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars1.githubusercontent.com/u/1667598?v=4" width="64px;"/><br /><sub><b>Johannes Werner</b></sub>](https://twitter.com/_jwerner_)<br />[💻](https://github.com/vuesion/vuesion/commits?author=devCrossNet "Code") [🐛](https://github.com/vuesion/vuesion/issues?q=author%3AdevCrossNet "Bug reports") [📖](https://github.com/vuesion/vuesion/commits?author=devCrossNet "Documentation") [🎨](#design-devCrossNet "Design") [💡](#example-devCrossNet "Examples") [🔧](#tool-devCrossNet "Tools") | [<img src="https://avatars2.githubusercontent.com/u/2235499?s=460&v=4" width="64px;"/><br /><sub><b>Konstantin Kulinicenko</b></sub>](https://github.com/40818419)<br />[💻](https://github.com/vuesion/vuesion/commits?author=40818419 "Code") [🐛](https://github.com/vuesion/vuesion/issues?q=author%3A40818419 "Bug reports") [📖](https://github.com/vuesion/vuesion/commits?author=40818419 "Documentation") [💡](#example-40818419 "Examples") | [<img src="https://avatars2.githubusercontent.com/u/112532?v=4" width="64px;"/><br /><sub><b>xMartin</b></sub>](http://xmartin.de/)<br />[💻](https://github.com/vuesion/vuesion/commits?author=xMartin "Code") [🐛](https://github.com/vuesion/vuesion/issues?q=author%3AxMartin "Bug reports") [📖](https://github.com/vuesion/vuesion/commits?author=xMartin "Documentation") [💡](#example-xMartin "Examples") | [<img src="https://avatars0.githubusercontent.com/u/31165554?v=4" width="64px;"/><br /><sub><b>Silver·湫澲</b></sub>](http://saigao.fun)<br />[📖](https://github.com/vuesion/vuesion/commits?author=SilverLeaves "Documentation") [🌍](#translation-SilverLeaves "Translation") | [<img src="https://avatars2.githubusercontent.com/u/17932287?v=4" width="64px;"/><br /><sub><b>Stavros Liaskos</b></sub>](https://stavrosliaskos.com/)<br />[🐛](https://github.com/vuesion/vuesion/issues?q=author%3Astavros-liaskos "Bug reports") | [<img src="https://avatars3.githubusercontent.com/u/1898225?v=4" width="64px;"/><br /><sub><b>Marcelo Boeira</b></sub>](https://marceloboeira.com)<br />[🌍](#translation-marceloboeira "Translation") | [<img src="https://avatars3.githubusercontent.com/u/3583774?v=4" width="64px;"/><br /><sub><b>Rick Mann</b></sub>](http://teamteatime.net/)<br />[💻](https://github.com/vuesion/vuesion/commits?author=Riari "Code") |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars0.githubusercontent.com/u/43061?v=4" width="64px;"/><br /><sub><b>Ryan McGuire</b></sub>](http://www.EnigmaCurry.com)<br />[💻](https://github.com/vuesion/vuesion/commits?author=EnigmaCurry "Code") | [<img src="https://avatars3.githubusercontent.com/u/28268680?v=4" width="64px;"/><br /><sub><b>Jay McDoniel</b></sub>](https://github.com/jmcdo29)<br />[💻](https://github.com/vuesion/vuesion/commits?author=jmcdo29 "Code") | [<img src="https://avatars3.githubusercontent.com/u/3798005?v=4" width="64px;"/><br /><sub><b>Olivia Graham</b></sub>](http://livgrhm.com)<br />[💻](https://github.com/vuesion/vuesion/commits?author=livgrhm "Code") | [<img src="https://avatars3.githubusercontent.com/u/497957?v=4" width="64px;"/><br /><sub><b>Hugo Magalhães</b></sub>](http://hugomagalhaes.com)<br />[🌍](#translation-hugomn "Translation") | [<img src="https://avatars3.githubusercontent.com/u/7151993?v=4" width="64px;"/><br /><sub><b>glederer</b></sub>](https://github.com/glederer)<br />[📖](https://github.com/vuesion/vuesion/commits?author=glederer "Documentation") | [<img src="https://avatars3.githubusercontent.com/u/4436327?v=4" width="64px;"/><br /><sub><b>Tamer Mohamed</b></sub>](https://github.com/tamer-mohamed)<br />[💻](https://github.com/vuesion/vuesion/commits?author=tamer-mohamed "Code") | [<img src="https://avatars3.githubusercontent.com/u/13586702?v=4" width="64px;"/><br /><sub><b>Rizwan Zaheer</b></sub>](https://github.com/rizwanzaheer)<br />[📖](https://github.com/vuesion/vuesion/commits?author=rizwanzaheer "Documentation") |
| [<img src="https://avatars3.githubusercontent.com/u/39985706?v=4" width="64px;"/><br /><sub><b>rgrosjean</b></sub>](https://github.com/rgrosjean)<br />[💻](https://github.com/vuesion/vuesion/commits?author=rgrosjean "Code") | [<img src="https://avatars2.githubusercontent.com/u/4535719?v=4" width="64px;"/><br /><sub><b>Bernardo Corbella</b></sub>](https://corbella.me)<br />[💻](https://github.com/vuesion/vuesion/commits?author=bernardocorbella "Code") | [<img src="https://avatars3.githubusercontent.com/u/13518712?v=4" width="64px;"/><br /><sub><b>Mohit Tilwani</b></sub>](http://mohittilwani.com)<br />[💻](https://github.com/vuesion/vuesion/commits?author=MohitTilwani15 "Code") | [<img src="https://avatars2.githubusercontent.com/u/11791837?v=4" width="64px;"/><br /><sub><b>eipiminus1 </b></sub>](https://github.com/eipiminus1)<br />[📖](https://github.com/vuesion/vuesion/commits?author=eipiminus1 "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/89996?v=4" width="64px;"/><br /><sub><b>Jez McKean</b></sub>](http://jezmck.com)<br />[📖](https://github.com/vuesion/vuesion/commits?author=jezmck "Documentation") | [<img src="https://avatars1.githubusercontent.com/u/855206?v=4" width="64px;"/><br /><sub><b>Duylam Nguyen-Ngo</b></sub>](http://duylam.pleaserevise.xyz)<br />[🎨](#design-einfalles "Design") | [<img src="https://avatars2.githubusercontent.com/u/19751007?v=4" width="64px;"/><br /><sub><b>Martin Merschroth</b></sub>](https://www.merschroth.design/)<br />[🎨](#design-majroth "Design") |
| [<img src="https://avatars0.githubusercontent.com/u/1984124?v=4" width="64px;"/><br /><sub><b>Camila Peralta Wieland</b></sub>](http://www.camswork.com)<br />[🎨](#design-campunknita "Design") | [<img src="https://avatars1.githubusercontent.com/u/39228141?v=4" width="64px;"/><br /><sub><b>Alec M</b></sub>](http://alecsoftolio.com)<br />[📖](https://github.com/vuesion/vuesion/commits?author=HeavenlyEntity "Documentation") |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

# References

- [nuxt](https://nuxtjs.org/)
- [nuxt/auth](https://auth.nuxtjs.org/guide/setup/)
- [nuxt/axios](https://axios.nuxtjs.org/)
- [nuxt/composition-api](https://composition-api.nuxtjs.org/)
- [nuxt/pwa](https://pwa.nuxtjs.org/)
- [nuxt/i18n](https://i18n.nuxtjs.org/)
- [nuxt/apollo](https://github.com/nuxt-community/apollo-module)
- [Storybook](https://storybook.js.org/)
- [jest](https://jestjs.io/)
- [cypress.io](https://www.cypress.io/)
- [testing-library](https://testing-library.com/docs/vue-testing-library/intro/)
- [vee-validate](https://vee-validate.logaretm.com/v3)
- [animejs](https://animejs.com/)

# Contact

- [Discord](https://discord.gg/59x5cg2)
- [Twitter](https://twitter.com/vuesion1)

# License

[MIT](http://opensource.org/licenses/MIT)
