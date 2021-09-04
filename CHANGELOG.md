### 4.3.0 (2021-09-04)

##### Continuous Integration

- add Vuesion+ Calendar and Date picker ([cf266202](https://github.com/vuesion/vuesion/commit/cf2662021b0ad8013b7d7ee07d31cb43c38697e9))
- split vuesion+ components into separate repos ([5a03c042](https://github.com/vuesion/vuesion/commit/5a03c042c20ac14dafdcb20369a581c22978dcd3))

##### Documentation Changes

- **component-docs:** replace disclaimer with CTA ([170cb998](https://github.com/vuesion/vuesion/commit/170cb99852f8683c1c088552d5a7a35e7f743b99))
- **design-system:** update introduction text ([833055c6](https://github.com/vuesion/vuesion/commit/833055c6f2036e87fb4099059eb58a1d2c49d94b))
- update README.md ([2e46cdbc](https://github.com/vuesion/vuesion/commit/2e46cdbc7e4eebf278e7e70d18130fadea194e18))

##### New Features

- **vue-input:**
  - remove shadow on iOS ([8a97e5b3](https://github.com/vuesion/vuesion/commit/8a97e5b346d8ef61bb51fbb483e0b27a2382b2e8))
  - add size attribute property ([ec85478d](https://github.com/vuesion/vuesion/commit/ec85478d6d161a10adebade72da1555d2872014e))
- **components:** reduce description-gap for better y-alignment ([5125dc9f](https://github.com/vuesion/vuesion/commit/5125dc9fbba8b00f8539cccbacf8e27ff2bcd40f))
- **vue-select:** focus/scroll to item of the selected value ([c47a8961](https://github.com/vuesion/vuesion/commit/c47a8961fc3f45591d7684fe5f20a7110c1d516b))
- **i18n:** add full-icu package and scripts ([5166dad0](https://github.com/vuesion/vuesion/commit/5166dad07057341d962fba02b165488bd4ba5305))
- **jest-setup:** add stub for Element.scrollTo ([22c9f870](https://github.com/vuesion/vuesion/commit/22c9f870d770456079287c87ede30e541ed248ea))
- **dark-mode:** optimize surface colors ([69cda30c](https://github.com/vuesion/vuesion/commit/69cda30c1ad37b80e06e46cab3d19dcfae0e3d2d))
- **collapse-animation:** support dynamic child-height ([99d496c9](https://github.com/vuesion/vuesion/commit/99d496c9ecadcbffec956925b0f36b7376b17efd))
- **vue-menu:** change max-height to fit better in viewport ([53ae1ff8](https://github.com/vuesion/vuesion/commit/53ae1ff8b9ca878d7629fbb97003c1b4560e6453))

##### Bug Fixes

- **learn-more:** fix typo ([44e63f82](https://github.com/vuesion/vuesion/commit/44e63f8255832a6ac065ed502a09f7809f182db8))

##### Refactors

- **vue-dropdown:** simplify onKeyDown event handler ([a29db17c](https://github.com/vuesion/vuesion/commit/a29db17cb6220552cc18e3d375ec28091ef9da93))

### 4.2.0 (2021-08-17)

##### Chores

- **vuesion-config:** sort i18n properties ([480796a1](https://github.com/vuesion/vuesion/commit/480796a18c4c60714139a7eb7489745b89ddefa7))
- **i18n:** clean up translations ([a8ce8d7b](https://github.com/vuesion/vuesion/commit/a8ce8d7bcd8d0a2b562c621532dc97d4d2f0b558))

##### New Features

- update link to docs ([0c10effc](https://github.com/vuesion/vuesion/commit/0c10effcc71b8029286c786f1cbab39c225db3ea))
- add modern build option as default ([ea74a14a](https://github.com/vuesion/vuesion/commit/ea74a14a1e0cc2537ccdc43de9946a1b281ee0e9))
- add feature-list ([06c13a2d](https://github.com/vuesion/vuesion/commit/06c13a2d390c0f683e72d191772eeae2fc9d2094))
- add download page ([f0f4630e](https://github.com/vuesion/vuesion/commit/f0f4630e4e78aca863febbed9dfac609e8696a7d))
- **learn-more:** add link to documentation ([8dda5ba2](https://github.com/vuesion/vuesion/commit/8dda5ba26324a7da267d76adebb97b02d8e4eb6b))
- **landing-page-header:** add nav ([de560249](https://github.com/vuesion/vuesion/commit/de56024928d7e946c7a7ed68d7cea9980fc85069))
- **content-block:** add as property ([c1d6599a](https://github.com/vuesion/vuesion/commit/c1d6599af762c88957aea484838c13ae1b238a8f))

##### Bug Fixes

- **generators:**
  - prettier page.vue.hbs ([6cdeaa23](https://github.com/vuesion/vuesion/commit/6cdeaa23f32d47cce1e1185f15c9dd7673a644ca))
  - prettier page.vue.hbs ([5459aa0a](https://github.com/vuesion/vuesion/commit/5459aa0a8d2b869e90c1d5c89aaa68c6f75bfa66))
- **meta:** use title instead of description ([e020a72a](https://github.com/vuesion/vuesion/commit/e020a72a15bb128dffb5ba952d3afde99a1660a5))
- **feature-list:** fix typos ([aacee1a0](https://github.com/vuesion/vuesion/commit/aacee1a0e4b8bb20eb5b569ca275bbbdcaef5ddf))
- **pwa-meta:** let vue-meta handle the meta information ([66eea278](https://github.com/vuesion/vuesion/commit/66eea278116cd0b28751b5960ddfa2f9049b3fb8))
- **vue-select:** add role to custom-select ([73ea1892](https://github.com/vuesion/vuesion/commit/73ea189236360998272f57a0e629f8e9217ae32e))
- **vue-icon-vuesion:** remove aria attribute ([da473588](https://github.com/vuesion/vuesion/commit/da473588ac34788deb7768932f5a4b8e4d9983ee))
- **icon-list:** remove view-boards ([f12ed301](https://github.com/vuesion/vuesion/commit/f12ed30128565c96c7844a1d1def313e9ec65352))

##### Refactors

- **tokens:** rename --a11y-color to --a11y-default-color ([bc32d206](https://github.com/vuesion/vuesion/commit/bc32d2064a26d58c032de371d9070caa6d96972d))

### 4.1.0 (2021-08-11)

##### Continuous Integration

- enable vuesion+ components ([62f568c3](https://github.com/vuesion/vuesion/commit/62f568c3994d35c9e947732274807144a7272da7))

##### New Features

- **apollo-example:** add border-radius to image ([0ffebf4a](https://github.com/vuesion/vuesion/commit/0ffebf4a9728605bb419f22256750118d07e7092))
- **component-docs:** add vuesion+ disclaimer ([c5912447](https://github.com/vuesion/vuesion/commit/c5912447ec680055fc449b6e2523716ab6e75dda))
- **typo:** links - inherit font-weight ([315cdf8f](https://github.com/vuesion/vuesion/commit/315cdf8f1178bab17a502aabeca885b2fd959c23))
- **vue-select:** add align(-y)-menu properties ([6f0c8e12](https://github.com/vuesion/vuesion/commit/6f0c8e1218c92a32990baed35ee3bad05ffdeb3b))
- **vue-dropdown:** add align-y-menu property ([fa9809d5](https://github.com/vuesion/vuesion/commit/fa9809d5868533fc21738318359d51fc4ffbaeb8))
- **vue-card:** remove overflow hidden ([cb18815f](https://github.com/vuesion/vuesion/commit/cb18815f0a2597b9336a58112fa34458798103b3))

## 4.0.0 (2021-08-09)

##### Chores

- update contributors ([8cad7d88](https://github.com/vuesion/vuesion/commit/8cad7d88ab4c50a0ed6500ae642e5443b145e9e3))
- update README.md ([115156b0](https://github.com/vuesion/vuesion/commit/115156b086ad6f19a1eef8611985e6ad62a1d886))
- update PR template, funding and readme ([587b86f4](https://github.com/vuesion/vuesion/commit/587b86f469bac5b1e1d0f6fb39d39e659a3f05a5))
- remove scss files for premium components ([baedf707](https://github.com/vuesion/vuesion/commit/baedf70736c547e6ae4a675bc2028c21efd02e12))
- clean up static folder ([9cc2cb62](https://github.com/vuesion/vuesion/commit/9cc2cb62eb0ec390f07ca7509a97cab406580b71))
- update dependencies ([c38ffc62](https://github.com/vuesion/vuesion/commit/c38ffc62cfcffdaed51cd566282d84d367b34d0d))
- update dependencies ([#538](https://github.com/vuesion/vuesion/pull/538)) ([e334cc46](https://github.com/vuesion/vuesion/commit/e334cc46f80880af94a02adea202045e348eb51f))
- remove .env from git ([098814cd](https://github.com/vuesion/vuesion/commit/098814cd56f425194ce8fcaf50bc94d6b8c59d71))
- update vuesion packages ([#517](https://github.com/vuesion/vuesion/pull/517)) ([d6fa18a3](https://github.com/vuesion/vuesion/commit/d6fa18a3a3497d21ca56e2ba32b1bba053647277))
- update dependencies ([#515](https://github.com/vuesion/vuesion/pull/515)) ([683f2163](https://github.com/vuesion/vuesion/commit/683f2163a215642198df13a243f48c2abeb6315a))
- rebase onto master ([2c588549](https://github.com/vuesion/vuesion/commit/2c588549e58c1755fdc76ba9308750ac50d443b3))
- rebase onto next ([1b155fa6](https://github.com/vuesion/vuesion/commit/1b155fa6ddc285c6c1a77337ab29332cdf6228a4))
- updated packages ([796a55ff](https://github.com/vuesion/vuesion/commit/796a55ff269fe4e5c8a54cb938ed2d7c0ae7ef44))
- updated packages ([3d76036b](https://github.com/vuesion/vuesion/commit/3d76036b4a57cf6b4f039862a05785991f90fe10))
- upgrade prettier to v2 ([#499](https://github.com/vuesion/vuesion/pull/499)) ([5562b5f6](https://github.com/vuesion/vuesion/commit/5562b5f6e36a9781100b0691d9f8ce5a7fe105bd))
- update dependencies ([#498](https://github.com/vuesion/vuesion/pull/498)) ([c6d39be6](https://github.com/vuesion/vuesion/commit/c6d39be6b71ae9997bc1f2f64cc5d54346b245c7))
- use new outputDirectory option ([1f6af69b](https://github.com/vuesion/vuesion/commit/1f6af69ba07a1baf6a26a560198247a4537628c8))
- upgrade to node v12 ([051e8ceb](https://github.com/vuesion/vuesion/commit/051e8ceb1420f0df866ebc186d39d8f69aabe791))
- update vue test utils to latest stable ([421d57ac](https://github.com/vuesion/vuesion/commit/421d57ac23f455edcbd1503000e4252e12a172e8))
- **storybook:**
  - rename design system category to foundation ([57ea5a8d](https://github.com/vuesion/vuesion/commit/57ea5a8d786fb6241c73ef82c0d08c99d53ee548))
  - use new config conventions ([#516](https://github.com/vuesion/vuesion/pull/516)) ([fd02238a](https://github.com/vuesion/vuesion/commit/fd02238a4880c898f686057c91f93548ae48570a))
- **jest:** update config to include all .vue files ([7bc7c457](https://github.com/vuesion/vuesion/commit/7bc7c45743a66fbf1c4e358b7d4f3103a016aab3))

##### Continuous Integration

- checkout and deploy premium component repo ([#560](https://github.com/vuesion/vuesion/pull/560)) ([53abfe5d](https://github.com/vuesion/vuesion/commit/53abfe5dde3fa539fcfcb50f5d1ffe3d9abb469e))
- add .env-prod to config.yml ([0298e3b1](https://github.com/vuesion/vuesion/commit/0298e3b10988b1e2c3956a9a9132af14adeedffa))
- fix Dockerfile ([0ff68db0](https://github.com/vuesion/vuesion/commit/0ff68db004b4237b3789aac28ced5b9fa4767b8e))
- **docker-file:** add .vuesion folder ([19e83277](https://github.com/vuesion/vuesion/commit/19e83277d01c3600d7b187820b30b533268671cd))

##### Documentation Changes

- **design-system:**
  - layout ([ea06d08e](https://github.com/vuesion/vuesion/commit/ea06d08e94194657b42a296752f30e0d98c8e3e9))
  - typography, iconography and spacings ([8972765e](https://github.com/vuesion/vuesion/commit/8972765edd6aa69c3a308588455c90e406c1cc22))
  - color/utility tokens and color palette ([9498a4ac](https://github.com/vuesion/vuesion/commit/9498a4ac97f1d0b5b94337b66f4770743ba88847))
- **components:** update usage information ([b7409d63](https://github.com/vuesion/vuesion/commit/b7409d635a8555d152ef37cec7363cbd0baa5cc5))
- add README.md files ([3b8691a7](https://github.com/vuesion/vuesion/commit/3b8691a73a86a2c64a2cafe2bbc19ebf6e9f226f))

##### New Features

- **testimonials:** reduce avatar size ([810acb8f](https://github.com/vuesion/vuesion/commit/810acb8f120503ab49fbac59e5d1d9382c095f67))
- **landing-page:** refine content ([882539f8](https://github.com/vuesion/vuesion/commit/882539f8c61d34407c51c884f84b20f4b30e0444))
- **components:**
  - add LearnMore ([c61335d2](https://github.com/vuesion/vuesion/commit/c61335d29323d9b82026a22eda9ebe8a48e30096))
  - add ValueProposition ([61754601](https://github.com/vuesion/vuesion/commit/61754601aca9a5eb983cb96125da61d7f6920af6))
  - add Testimonials ([4f6c52a8](https://github.com/vuesion/vuesion/commit/4f6c52a8967ba44de49a5b21eb18a2ec19d3e499))
  - add LandingPageHeader ([1ff9d26e](https://github.com/vuesion/vuesion/commit/1ff9d26e02abff7f07bf460af3dcafca9ce09c54))
  - remove premium-tier components ([9857278c](https://github.com/vuesion/vuesion/commit/9857278ca5b20b804736b553318a86243b413710))
  - add vue-pop-over ([2c7bd6c7](https://github.com/vuesion/vuesion/commit/2c7bd6c73cddadb05e43fabdb206b38a62f97e00))
  - add vue-back-to-top ([e01a0f64](https://github.com/vuesion/vuesion/commit/e01a0f64330b102d7311d620a7714c75b7fbd932))
  - add layout components ([#544](https://github.com/vuesion/vuesion/pull/544)) ([4bd8b7ec](https://github.com/vuesion/vuesion/commit/4bd8b7ecf7d1c8711cfcda6784b16daed9ae6e48))
  - add vue-text ([e6ff689c](https://github.com/vuesion/vuesion/commit/e6ff689c88c47240efabd4f207e387f32cc45a1f))
- **vue-input:**
  - add size prop ([7ffaa8df](https://github.com/vuesion/vuesion/commit/7ffaa8df743979222bc518e4b9e1540ec40df80e))
  - add cursor pointer to icons ([dd9a7a33](https://github.com/vuesion/vuesion/commit/dd9a7a330cbf6eba361f551cbcdda249783603b7))
  - apply re-design, update tests and stories ([0f56dc36](https://github.com/vuesion/vuesion/commit/0f56dc364dd7ed43c5f6bff7f9848e56f447dc0a))
- **vue-dropdown:**
  - add size prop ([43eaca7a](https://github.com/vuesion/vuesion/commit/43eaca7a099bae39c47641fe244aa2809ccce064))
  - apply re-design, update tests and stories ([81dbcfec](https://github.com/vuesion/vuesion/commit/81dbcfec9303101281bda8417281033aac34f74e))
- **vue-select:**
  - add size prop ([6b95f9b8](https://github.com/vuesion/vuesion/commit/6b95f9b89e3dda591fca82b59c51dfcba0d333c0))
  - change min-width ([db6e67a1](https://github.com/vuesion/vuesion/commit/db6e67a11f9b14ba87a4e716a928bcd80475ea2e))
  - apply re-design, update tests and stories ([dbb8af74](https://github.com/vuesion/vuesion/commit/dbb8af74a381abc5d055bed0dbd8284bf134be4e))
- **toast:** add success toast type ([c3b06cc7](https://github.com/vuesion/vuesion/commit/c3b06cc7056067741eeb9e8ac629be0f075c1cf7))
- **design-system:**
  - update icons, color-palette and tokens ([f955f76d](https://github.com/vuesion/vuesion/commit/f955f76db0680b30ff94e131ba09604acf44cee4))
  - update icons ([436c374b](https://github.com/vuesion/vuesion/commit/436c374b04df0de0252d7a5e4e82692d87b98118))
- tweak dark-theme ([9f23051d](https://github.com/vuesion/vuesion/commit/9f23051d893e43e7d24ddfd2a416f60ad4743110))
- optimize stories for mobile viewport ([eaeab867](https://github.com/vuesion/vuesion/commit/eaeab867c19f20eedbac0a7e22d8f29a29c9cd72))
- register icons globally ([9cbe4a1a](https://github.com/vuesion/vuesion/commit/9cbe4a1a3ceaaee9702ed9d8d31fc8ef426ed06b))
- add nuxtjs/color-mode ([2f01661e](https://github.com/vuesion/vuesion/commit/2f01661e5ff427a3874150f491c4352d91dc84bc))
- add nuxtjs/html-validator ([674f0a2f](https://github.com/vuesion/vuesion/commit/674f0a2f4868166b8921a5a2678d6d274c3f22b9))
- add nuxtjs/robots ([7cc3e606](https://github.com/vuesion/vuesion/commit/7cc3e60644d7da0ba3566798c71bc52bbec0860a))
- add nuxt/eslint-module ([c1b400f8](https://github.com/vuesion/vuesion/commit/c1b400f8b74ced3a42a60f1b180412d0f898e04f))
- add type-gen for swagger ([#549](https://github.com/vuesion/vuesion/pull/549)) ([a8081a85](https://github.com/vuesion/vuesion/commit/a8081a85ddff51cce55ce812012dbfe906bdbc10))
- add pwa update script ([#548](https://github.com/vuesion/vuesion/pull/548)) ([afd133df](https://github.com/vuesion/vuesion/commit/afd133df394e5aab5fd79e78451bce5cce377d81))
- add vue-apollo ([#547](https://github.com/vuesion/vuesion/pull/547)) ([a999afd2](https://github.com/vuesion/vuesion/commit/a999afd29c9e135cf1e25a20691bf81d0277116d))
- add logging with winston ([#546](https://github.com/vuesion/vuesion/pull/546)) ([16ed6da8](https://github.com/vuesion/vuesion/commit/16ed6da84807db5ab9cd3226a9f142d131caa2e4))
- use @nuxtjs/auth ([#519](https://github.com/vuesion/vuesion/pull/519)) ([14f07ba1](https://github.com/vuesion/vuesion/commit/14f07ba1030f1b3b2802fcc798090f58d21f72a7))
- use @nuxtjs/composition-api ([#518](https://github.com/vuesion/vuesion/pull/518)) ([23b2bcbf](https://github.com/vuesion/vuesion/commit/23b2bcbf1fef116420c304b586bcbaa7004d3ffc))
- add vuesion service ([#509](https://github.com/vuesion/vuesion/pull/509)) ([5298fe50](https://github.com/vuesion/vuesion/commit/5298fe50a702fe4d737f2f742566117ddeb71007))
- counter page fetch example ([f8ed3bcd](https://github.com/vuesion/vuesion/commit/f8ed3bcd1443453a247796255ea5df5899d8013f))
- add http-service ([0b8f62a5](https://github.com/vuesion/vuesion/commit/0b8f62a5d6ba0c2fa8173f2bc30cce761f3bf984))
- add app-config ([3c2dea97](https://github.com/vuesion/vuesion/commit/3c2dea97630a8cfd7ec94252932ea97d8f6a8054))
- add vuex-persist ([6544678a](https://github.com/vuesion/vuesion/commit/6544678a6c4ddf7d6b0c3ca86b089e59de3c8bfd))
- add vuex-persist ([67703638](https://github.com/vuesion/vuesion/commit/6770363830a668f19114c7e7d9495c6a670eb3b5))
- added storybook packages ([24bb890c](https://github.com/vuesion/vuesion/commit/24bb890c260f8e1a9f9664696eaaadc5b76c6398))
- added design system stories ([1f5f435f](https://github.com/vuesion/vuesion/commit/1f5f435f46b75f425047cf253d5c41d50822a767))
- added all component stories ([ebb4f724](https://github.com/vuesion/vuesion/commit/ebb4f7249412dba53872974a9240891d1af83c6f))
- added ci script ([e955e2fc](https://github.com/vuesion/vuesion/commit/e955e2fc667d0ae8899ad455f15f5d54bee84d1a))
- updated nuxt ([2c1af9f3](https://github.com/vuesion/vuesion/commit/2c1af9f302157047d3ef99daff42998a4071dfcf))
- updated jest ([34738b06](https://github.com/vuesion/vuesion/commit/34738b0679f726e706c89932c7769f06b8364748))
- added cookie-parser, compression, and helmet ([ff0ca593](https://github.com/vuesion/vuesion/commit/ff0ca593c4101787eddd989cbef99f281d5dbdc9))
- got routes and auth working ([bf7ce0e7](https://github.com/vuesion/vuesion/commit/bf7ce0e7aa737f0ba260850cefbe73fb688d90d0))
- reorganized tests, added tests, plus cleanup ([e4b5dd07](https://github.com/vuesion/vuesion/commit/e4b5dd07d259424044928d7c8cdb444c07cfd620))
- got vee validate working and fixed some tests ([87a06d12](https://github.com/vuesion/vuesion/commit/87a06d1286acf7238990ac37d7258ff720d3854c))
- added eslint rules and worked on vallidation ([bc9a9339](https://github.com/vuesion/vuesion/commit/bc9a933991d5b63833821380eb07177869e77218))
- almost have validate working now ([a6c91f76](https://github.com/vuesion/vuesion/commit/a6c91f762e52a32b5fa57856e781c1999b208391))
- added testing library package ([fee43669](https://github.com/vuesion/vuesion/commit/fee43669dbdf389b2abd8e6b76dd619c07464a65))
- got more components and tests working ([10784c4d](https://github.com/vuesion/vuesion/commit/10784c4dd08335ff75f7c45ef6f975c1abf6af66))
- got most tests passing + cleanup ([b5a6b4a3](https://github.com/vuesion/vuesion/commit/b5a6b4a352b4e9f6303f86173510d974314f5918))
- moved app into src ([35043f59](https://github.com/vuesion/vuesion/commit/35043f59c142ab90c1189c265cbaa8ebb2fe9c0e))
- got most components working ([5a9e86ad](https://github.com/vuesion/vuesion/commit/5a9e86adff36794d69dc0389e14b36c3e140fc78))
- initial commit ([d9b91036](https://github.com/vuesion/vuesion/commit/d9b9103614c000a4c30ce08653626ac4c76e8efb))
- support theming ([06da52e0](https://github.com/vuesion/vuesion/commit/06da52e03809d22377a74a6ae6d3fdfade9d14c9))
- **vue-columns:**
  - pass alignments as prop to vue-column ([a045517a](https://github.com/vuesion/vuesion/commit/a045517ab31a6dcfd56e5a99088b6cf83c2eecb0))
  - add full-page prop ([baf9b926](https://github.com/vuesion/vuesion/commit/baf9b926fad5c7f78d275a85cf6fa28fbbf33735))
  - add revert property ([d59d9deb](https://github.com/vuesion/vuesion/commit/d59d9debfbd6e9d4af8732e691aff4579fb6114b))
- **get-dom-ref:** add vue components as type ([63bd0586](https://github.com/vuesion/vuesion/commit/63bd05867cab3f088291456ceeb652ceeb05c768))
- **vue-box:** add alignment properties ([37faa615](https://github.com/vuesion/vuesion/commit/37faa615572604e92433f03c16d3377150498d0e))
- **vue-checkbox:**
  - add hide-label prop ([2359fbc2](https://github.com/vuesion/vuesion/commit/2359fbc2acb92a4535c4d6a04873595e167232c0))
  - apply re-design, update tests and stories ([926ec0b9](https://github.com/vuesion/vuesion/commit/926ec0b9f9b314dfd8c481533524d69f9098659b))
- **vue-markdown:** change table cell spacing ([25b5b671](https://github.com/vuesion/vuesion/commit/25b5b671a320cabbcb0d0677b6dc7dca317487a5))
- **ci:** update running order ([3bdf698a](https://github.com/vuesion/vuesion/commit/3bdf698aeedaa54ea6d2f524b942f846c18d6641))
- **cypress:** increase timeouts ([b1b2a93f](https://github.com/vuesion/vuesion/commit/b1b2a93fb0e6331646f5619e50724db450bf9551))
- **icons:** sync with Figma icon set ([83066476](https://github.com/vuesion/vuesion/commit/83066476c0646732c1cbfe462729193fcd1bd44b))
- **vue-tab-group:** apply re-design, update tests and stories ([913a083a](https://github.com/vuesion/vuesion/commit/913a083ad63b067c0b392602e981371e6c293eac))
- **vue-sidebar:** apply re-design, update tests and stories ([21bbeec1](https://github.com/vuesion/vuesion/commit/21bbeec167d9ffe6894b78392e46e8d130cc6d3c))
- **vue-navbar:** apply re-design, update tests and stories ([de9e16ec](https://github.com/vuesion/vuesion/commit/de9e16ecbbea22475a732f7a9240a350b6f157a3))
- **vue-avatar:** apply re-design, update tests and stories ([e64bec95](https://github.com/vuesion/vuesion/commit/e64bec951ad6745759000c90f892963940d10178))
- **vue-tooltip:** apply re-design, update tests and stories ([7e902305](https://github.com/vuesion/vuesion/commit/7e9023054b2db7be5014ccd8d7b84d205aca08f5))
- **vue-toast:** apply re-design, update tests and stories ([e0e9bb53](https://github.com/vuesion/vuesion/commit/e0e9bb537936093a1731db391dad5bd6bb2611b0))
- **vue-footer:** apply re-design, update tests and stories ([be82a82c](https://github.com/vuesion/vuesion/commit/be82a82c594b4778f9c81b6ce10766af913b0ffd))
- **vue-accordion:** apply re-design, update tests and stories ([f6087c9c](https://github.com/vuesion/vuesion/commit/f6087c9cb96fc66db7bc98684fb950c1ea91b004))
- **vue-pagination:** apply re-design, update tests and stories ([75d13ac1](https://github.com/vuesion/vuesion/commit/75d13ac1db0ef68c17ef0f26b2aba3c6eeb84030))
- **vue-modal:**
  - apply re-design, update tests and stories ([e230c933](https://github.com/vuesion/vuesion/commit/e230c933396d0930d44074c5bbed4342ea892f5b))
  - apply re-design, update tests and stories ([39a08200](https://github.com/vuesion/vuesion/commit/39a082008cf8d694c3519109041f136eaa8134ee))
- **vue-card:** apply re-design, update tests and stories ([9b29a4e6](https://github.com/vuesion/vuesion/commit/9b29a4e62e1dfdab0edfa58a7c05bc5a13f61c1c))
- **vue-collapse:** apply re-design, update tests and stories ([00b6d0c9](https://github.com/vuesion/vuesion/commit/00b6d0c97a995a2a81736220bd3082589ecd6fc9))
- **vue-breadcrumb:** apply re-design, update tests and stories ([824819f2](https://github.com/vuesion/vuesion/commit/824819f25efe83efaef70e99dc9f0b71ead16f33))
- **vue-back-to-top:** apply re-design, update tests and stories ([f6947586](https://github.com/vuesion/vuesion/commit/f69475860642df84c40be811431d26f086572214))
- **vue-menu:** apply re-design, update tests and stories ([c1a87057](https://github.com/vuesion/vuesion/commit/c1a87057d28f8dd3ac45c46f473960cffcec9476))
- **vue-textarea:** apply re-design, update tests and stories ([321714fd](https://github.com/vuesion/vuesion/commit/321714fdee2825341f8d9667994a87e4429313f5))
- **vue-slider:** apply re-design, update tests and stories ([d97a2da8](https://github.com/vuesion/vuesion/commit/d97a2da80101a044921614ea3f3d3ddef77bb49f))
- **vue-toggle:** apply re-design, update tests and stories ([8fe52be7](https://github.com/vuesion/vuesion/commit/8fe52be7593b530550bfd9a3ec05460b10ab66eb))
- **vue-loader:** apply re-design, update tests and stories ([ca75d72e](https://github.com/vuesion/vuesion/commit/ca75d72ef0201cd3c5498605f709caaa55f85007))
- **vue-radio:** apply re-design, update tests and stories ([e9ac9fa5](https://github.com/vuesion/vuesion/commit/e9ac9fa5e9493936f9f76b078b11eb4986c8f3f4))
- **vue-button:** apply re-design, update tests and stories ([5e63c241](https://github.com/vuesion/vuesion/commit/5e63c241e54b6b2ed875fa3106efbf9056f9239c))
- **vue-image:** move to data display, update tests and stories ([e1097d64](https://github.com/vuesion/vuesion/commit/e1097d64d20e7621f9193335b01746d9c0cbf7d6))
- **vue-badge:** apply re-design, update tests and stories ([aae11318](https://github.com/vuesion/vuesion/commit/aae113184737bac9574fdddda17b5178493a52c1))
- **vue-column:** add align-y prop ([70b4704d](https://github.com/vuesion/vuesion/commit/70b4704da7244a9d9b95f3da6d181f35c51f1bc5))
- **i18n:** add formatFallbackMessages ([260f71e7](https://github.com/vuesion/vuesion/commit/260f71e71e36bea821ff8df4a7aa88f6336a8814))
- **vue-text:** add align property ([e0c70738](https://github.com/vuesion/vuesion/commit/e0c707384803de9066016c9266499a0c975210dc))
- **layout-components:** support space value null ([753cfac3](https://github.com/vuesion/vuesion/commit/753cfac3da8637d2428d021d97d01a9d1abee708))
- **vue-inline:**
  - add revert and no-wrap properties ([3a0e3323](https://github.com/vuesion/vuesion/commit/3a0e3323cfed48de298d38713d276bd1930709be))
  - add align-y property ([8ad0cae7](https://github.com/vuesion/vuesion/commit/8ad0cae723fd1e919a0ef8a5fb38663924f9b413))
- **generators:** add interface ([#540](https://github.com/vuesion/vuesion/pull/540)) ([3be17d42](https://github.com/vuesion/vuesion/commit/3be17d4212841f746b3086fdcd98f9e75a0c9159))

##### Bug Fixes

- **landing-page-header:** add closing ) for background-image url ([5e1a8345](https://github.com/vuesion/vuesion/commit/5e1a83459f43d58d3714d69770774f9723986cc2))
- **vue-select:**
  - fix typings ([f3544605](https://github.com/vuesion/vuesion/commit/f3544605af089e63a465cdf42170f4d1145ceedb))
  - change menu position if hidden label ([bebf3445](https://github.com/vuesion/vuesion/commit/bebf3445c8f8d65a7df841c085b59e04e7d20e8a))
  - use computed instead of ref for watching v-model ([#533](https://github.com/vuesion/vuesion/pull/533)) ([2cd766c3](https://github.com/vuesion/vuesion/commit/2cd766c32e44e9ffb3ea569f5b0e75de0e88d399))
- **vue-button:** fix spacing for icon only button ([3b431b6e](https://github.com/vuesion/vuesion/commit/3b431b6e52a4ae8cbddb88f6326004e6683d7813))
- html validation errors ([3afc90b6](https://github.com/vuesion/vuesion/commit/3afc90b6ab52812a2356dac8818c090dcce71879))
- add changes from design-review ([0fd04cf0](https://github.com/vuesion/vuesion/commit/0fd04cf0bd087861a7e3cf91c3e10a8c592eb5a7))
- add vuesion/models to dependencies ([123ddbe9](https://github.com/vuesion/vuesion/commit/123ddbe96013c3031a3e90c4ba292e1e65ed8e34))
- remove unused prop with-vertical-space ([#541](https://github.com/vuesion/vuesion/pull/541)) ([d57ebd39](https://github.com/vuesion/vuesion/commit/d57ebd39e5109d4a64e2f2bfca6db87e0300140f))
- theme, locale change ([deec6a79](https://github.com/vuesion/vuesion/commit/deec6a793a23557c0c1721999512609e5ac22579))
- make vee-validate examples working ([cb5ab7b1](https://github.com/vuesion/vuesion/commit/cb5ab7b1ea09d04cc5d9a83318152a7ff26b7d09))
- server static storybook directory ([e1b2de2e](https://github.com/vuesion/vuesion/commit/e1b2de2ea466d868b2f24c15be3741f917020c1e))
- jest coverage location and minor adjustments ([cb6f078e](https://github.com/vuesion/vuesion/commit/cb6f078e1eec172b257fb8dbd1e30196c0185961))
- final part of workaround to change capitalization of folder ([1d55d5a4](https://github.com/vuesion/vuesion/commit/1d55d5a4c319a0de20cb20b8334e8e71b24b6a09))
- workaround to change capitalization of folder ([b40211e6](https://github.com/vuesion/vuesion/commit/b40211e608fe76b3f66df5c4a06957096cf1654f))
- run tests in ci script ([e6c0ab97](https://github.com/vuesion/vuesion/commit/e6c0ab9772f0e9ffd09034e7133d0d411d3d3aac))
- got coverage working and updated all jest related dependencies ([b768d95e](https://github.com/vuesion/vuesion/commit/b768d95e66b97e9117ae8d2185cbf4255cfefd9b))
- minor import fixes ([43f12c6c](https://github.com/vuesion/vuesion/commit/43f12c6c9cf1bc2a964ae178d9c69e8bd05584b8))
- handled injection not found in FormExample test ([3ee50d01](https://github.com/vuesion/vuesion/commit/3ee50d01f6e351f0534f19d0d6d0c7726a876e43))
- use nuxt-link instead of router-link ([dcea1826](https://github.com/vuesion/vuesion/commit/dcea18265d169d193128597915f838f408cd7677))
- update deprecated method calls in tests ([cb14ecf0](https://github.com/vuesion/vuesion/commit/cb14ecf0d5efe72bd0fe074e355bf05035b4846f))
- all counter tests passing now ([9636573f](https://github.com/vuesion/vuesion/commit/9636573f29e583706cb6a6967daf12b9db4cfa2a))
- all VueDatePicker tests passing now ([10b80d26](https://github.com/vuesion/vuesion/commit/10b80d2609cee53da34e16466f33be273545e301))
- all VueTextArea tests passing now ([03985be3](https://github.com/vuesion/vuesion/commit/03985be39a4c0a6bb3760589b9a00d0ac6aed83f))
- vue input tests passing now ([5152648c](https://github.com/vuesion/vuesion/commit/5152648cad73013791500cb59fa2db66f4557de4))
- work around vue-jest error with ts-jest dependency ([95d0d2d3](https://github.com/vuesion/vuesion/commit/95d0d2d3100a97556470dd23f666b72529024a11))
- removed unnecessary dependency ([d556d3d3](https://github.com/vuesion/vuesion/commit/d556d3d394b32186d43f9c6f99a885180337d3fa))
- minor VueTextarea fixes ([7177f82c](https://github.com/vuesion/vuesion/commit/7177f82c5534c044f3415225409851609f71a51c))
- counter import in test ([de2ada69](https://github.com/vuesion/vuesion/commit/de2ada69b6729a75684a624bdf659f3ab70d6dd4))
- helmet import ([dba4c351](https://github.com/vuesion/vuesion/commit/dba4c3515370e87e21f250d6ec88783ec50673dd))
- use vuesion getIntInRange ([a18f3598](https://github.com/vuesion/vuesion/commit/a18f3598a38bddb0d1ea84e7fda386afd766ffee))
- got nav bar hamburger button to display ([6f75b3b7](https://github.com/vuesion/vuesion/commit/6f75b3b75745d7018ec7acb508ac8a54ab15a844))
- fix state type in connected component tests ([3877aaad](https://github.com/vuesion/vuesion/commit/3877aaadd140658fa9c5ebcaad312553902f35d0))
- fix memory leak caused by vee-validate ([f728f51c](https://github.com/vuesion/vuesion/commit/f728f51cbe4c7fe988c9077dad58ab98af3699ac))
- **vue-inline:** interpolate revert prop ([1a9a6d61](https://github.com/vuesion/vuesion/commit/1a9a6d6136d186c3a421757fe72f5c080053b208))
- **layout-components:** typings and wrong function call ([d03397a2](https://github.com/vuesion/vuesion/commit/d03397a2cac76ef24ef8d6a52fc631473bf1e99c))
- **vue-column:** support array values for full-width ([8f263231](https://github.com/vuesion/vuesion/commit/8f263231a6060b1a0e42cd0fb31ac9f7173a7926))
- **vue-slider:** use parseFloat instead of parseInt ([#534](https://github.com/vuesion/vuesion/pull/534)) ([c2e5c5cf](https://github.com/vuesion/vuesion/commit/c2e5c5cf63cc3f09d38ee1dc59fbca855ed5caa3))
- **components:** use id as labels for-attribute value ([#531](https://github.com/vuesion/vuesion/pull/531)) ([3ffe4547](https://github.com/vuesion/vuesion/commit/3ffe45473645bcd808148338b20176dcd2744cce))
- **response-interceptor:** revert to old solution ([59aefc0b](https://github.com/vuesion/vuesion/commit/59aefc0b48fb5267b64eba85eadee32652e5592e))
- **story-book:** add padding to content preview ([56e0a8e0](https://github.com/vuesion/vuesion/commit/56e0a8e0bf78c3ef985e519e2e20f4f86698b665))

##### Refactors

- add common scss variables for input sizes ([5e56cae8](https://github.com/vuesion/vuesion/commit/5e56cae8490daca2396c180e459ebc6b11dd5375))
- clean up token usage in components ([b7cdbd03](https://github.com/vuesion/vuesion/commit/b7cdbd031bacc9abaae8e96abe95b7b823e6e4c5))
- sync token naming with figma ([7a087ad7](https://github.com/vuesion/vuesion/commit/7a087ad7f96e3fd6eaa3c1e71320f68c22609621))
- remove vue-grid ([48c6d291](https://github.com/vuesion/vuesion/commit/48c6d2917880365e851149b9ee486d0e4af2116b))
- remove link color tokens ([b643cee0](https://github.com/vuesion/vuesion/commit/b643cee085eb60c84e6266ef1da5dfe6e0d34be4))
- split interaction and brand variation tokens ([6a3efd40](https://github.com/vuesion/vuesion/commit/6a3efd40f7280a79704c75dcf09450de0fbf6f40))
- turn functions into arrows ([ed719413](https://github.com/vuesion/vuesion/commit/ed71941305a00ff23bd5c1836665d290e9c16174))
- move components to atomic design folders ([fbdf5673](https://github.com/vuesion/vuesion/commit/fbdf567316d6100424db8c5cf8d232161ac595e2))
- move animations to shared components ([1f6b793c](https://github.com/vuesion/vuesion/commit/1f6b793c94283c7a5763664dbe1577abd7fef177))
- remove directives ([8cc4393f](https://github.com/vuesion/vuesion/commit/8cc4393fc7a2dd6dd6f9f47cb6b8fda14de8f940))
- rename @vuesion packages ([fdc55203](https://github.com/vuesion/vuesion/commit/fdc55203038899b81e9a527edaafb4a80c598756))
- switch to eslint ([#490](https://github.com/vuesion/vuesion/pull/490)) ([ee515e50](https://github.com/vuesion/vuesion/commit/ee515e509ccc7eeff6598aa8f41ee331af78dbc0))
- **design-system:**
  - update color-palette ([b4a21a13](https://github.com/vuesion/vuesion/commit/b4a21a13cceb45e5a91d6c57a37c0e9f60046676))
  - remove color-suffix from color tokens ([6413e4c1](https://github.com/vuesion/vuesion/commit/6413e4c1109ae0946fbe4be2fcc784cdd455e386))
  - update color-tokens and text-styles ([#543](https://github.com/vuesion/vuesion/pull/543)) ([67cbb336](https://github.com/vuesion/vuesion/commit/67cbb336f1d48a3d75e4ece86d3983682772052d))
  - change text-color tokens ([da2cec55](https://github.com/vuesion/vuesion/commit/da2cec55c2d9614b9e0d41d39019cad2dc7dbd35))
  - align naming with Figma ([48d391ce](https://github.com/vuesion/vuesion/commit/48d391ceb826193d53c1598f4c0c3172ba1f14fa))
  - move components to shared folder ([ca784478](https://github.com/vuesion/vuesion/commit/ca7844784fd531299cfbc6bd3256a78749097bd4))
- **i18n:**
  - clean up date formats ([76c1afad](https://github.com/vuesion/vuesion/commit/76c1afad7745bdd590a4536be858da06a93b8d2c))
  - add dateTimeFormats ([4ab878a5](https://github.com/vuesion/vuesion/commit/4ab878a5ce6cea42ac7fc635db3bec2fd981bac8))
- **components:**
  - move premium components to separate folder ([0bc2e6cc](https://github.com/vuesion/vuesion/commit/0bc2e6cccd380a28930c0f038c1af03acef9dc6f))
  - unify component properties ([#514](https://github.com/vuesion/vuesion/pull/514)) ([3f602ff1](https://github.com/vuesion/vuesion/commit/3f602ff1024b34cf2ba42677552ecd1e6fe37998))
- **vue-button:**
  - add icons as props ([dc6dc051](https://github.com/vuesion/vuesion/commit/dc6dc0510fd89a81080a182ab626278eaee444d5))
  - use composition api + re-design ([46e6fa2e](https://github.com/vuesion/vuesion/commit/46e6fa2e4f0f775d6ba9e1a5e7d11fbfcc8e43c1))
- **vue-text:**
  - rename appearance to look ([e67634ea](https://github.com/vuesion/vuesion/commit/e67634ea44ef20bce29b1e1a0ac792097961ec2b))
  - change text color names ([07103620](https://github.com/vuesion/vuesion/commit/07103620be69eef2aa8f74b47b5db4bb8e722786))
- **assets:** restructure design-system folder ([03ea8035](https://github.com/vuesion/vuesion/commit/03ea80355a4bfddab25e9785b344408fe9687fe7))
- **vue-columns:**
  - use gap fallback-solution ([ee2598e4](https://github.com/vuesion/vuesion/commit/ee2598e476bebfa933a8a324d1ceb728cd42ad4d))
  - switch to flex-gap ([5135f311](https://github.com/vuesion/vuesion/commit/5135f3114773d6eb1e40f170e44caa2b75f2f78b))
- **prop-validators:**
  - split align validator into x/y ([c394d443](https://github.com/vuesion/vuesion/commit/c394d443cc2aa6ed3c27b72d6f89d6ac346b0b39))
  - add generic responsive prop validator ([78878f49](https://github.com/vuesion/vuesion/commit/78878f498738ab2c658ad08fde96ba0daa140d88))
- **generators:** update page blueprint ([74c05986](https://github.com/vuesion/vuesion/commit/74c05986a0d93db235c0e2a5428169afa125c867))
- **vue-grid:** use composition api + re-design ([#501](https://github.com/vuesion/vuesion/pull/501)) ([81fc5250](https://github.com/vuesion/vuesion/commit/81fc5250043e491db01a1e978d7f9dc58c5351dc))
- **vue-input:** use composition api + re-design ([#500](https://github.com/vuesion/vuesion/pull/500)) ([6c0560d0](https://github.com/vuesion/vuesion/commit/6c0560d0ce1f13d772cfb160c86d62fc50ec141f))
- **vue-modal:**
  - use composition api and testing-lib ([#492](https://github.com/vuesion/vuesion/pull/492)) ([952fe615](https://github.com/vuesion/vuesion/commit/952fe615774c43006eb71b8a329015affcb5e1f1))
  - use composition api and testing-lib ([#492](https://github.com/vuesion/vuesion/pull/492)) ([60578039](https://github.com/vuesion/vuesion/commit/60578039a688e0fa058eda853b2d05291a22a9bd))
- **prefetch:** call App.prefetch first, then AuthGuard ([#493](https://github.com/vuesion/vuesion/pull/493)) ([6020ece9](https://github.com/vuesion/vuesion/commit/6020ece91f2f110aae1823b1261b5c24503a7b60))
- **storybook-addon-vue-info:** update to latest version ([#489](https://github.com/vuesion/vuesion/pull/489)) ([9c7eabe3](https://github.com/vuesion/vuesion/commit/9c7eabe31222c1e45cc1d2c80fbfc0fea360fb60))

##### Code Style Changes

- minor linting fix ([65f3760c](https://github.com/vuesion/vuesion/commit/65f3760c42b611227f1710a36ab3719b238051e4))
- fixed import order in interceptor files ([0137533a](https://github.com/vuesion/vuesion/commit/0137533a5a9e04f633cca695106e7ee7e9d080a9))
- cleaned up eslint file ([b2675b84](https://github.com/vuesion/vuesion/commit/b2675b848cc7259402758aec2bf424259016ad69))
- ignore console log that is meant for production ([a48f71b5](https://github.com/vuesion/vuesion/commit/a48f71b5bfc4b83c4a3d864e1c93d30a1982cd3b))
- added commented lines that are not working ([ebb363cd](https://github.com/vuesion/vuesion/commit/ebb363cd5da75c0d1d7357bfed7c26931a5a64db))
- minor linting ([266dccba](https://github.com/vuesion/vuesion/commit/266dccba13f1cf5d56c34b524f133f273f919222))

##### Tests

- add example test for apollo and composition-api ([#552](https://github.com/vuesion/vuesion/pull/552)) ([611fb265](https://github.com/vuesion/vuesion/commit/611fb26548fd8f83a91ff36347e8d21f2f55decd))
- add @testing-library/vue for better testing ([#491](https://github.com/vuesion/vuesion/pull/491)) ([4caef2d7](https://github.com/vuesion/vuesion/commit/4caef2d7830044c35b7b09720a13166c8220fcc0))
- **e2e:** add test for apollo ([#551](https://github.com/vuesion/vuesion/pull/551)) ([6c565050](https://github.com/vuesion/vuesion/commit/6c5650503df16ae2eff740513aff7169cf8e3181))

#### 3.7.3 (2020-09-26)

##### Chores

- remove version badge and use new twitter badge ([#512](https://github.com/vuesion/vuesion/pull/512)) ([6c0974aa](https://github.com/vuesion/vuesion/commit/6c0974aa15df7da052a28da62f22ace7f866f39b))
- add german translations ([#511](https://github.com/vuesion/vuesion/pull/511)) ([7990dcf6](https://github.com/vuesion/vuesion/commit/7990dcf6a8ff567d443bece428735674c6bf1292))

##### Bug Fixes

- spa example config.json ([0c69149d](https://github.com/vuesion/vuesion/commit/0c69149d786520acbf1b8a2464d35679b3cc95e8))
- memory leak related to logging within server-side rendering ([#520](https://github.com/vuesion/vuesion/pull/520)) ([88ba3688](https://github.com/vuesion/vuesion/commit/88ba368852988841798a6d25c5baa2ff58883efc))

##### Tests

- **calendar:** correct existing test ([#496](https://github.com/vuesion/vuesion/pull/496)) ([b6223771](https://github.com/vuesion/vuesion/commit/b622377156ec7b8d7424eb76ee0cd01f5521d829))

#### 3.7.2 (2019-10-13)

##### Chores

- **style-guide:** rename examples folder to example ([2bb66082](https://github.com/vuesion/vuesion/commit/2bb66082beda01b5d3982200d52c9a340d656da5))

##### Bug Fixes

- **vue-calendar:** fix left padding for negative values ([#476](https://github.com/vuesion/vuesion/pull/476)) ([478b9cb4](https://github.com/vuesion/vuesion/commit/478b9cb4efde19c105a221eedbeef928c9397ff0))
- **generators:** make delete mutation reactive ([#474](https://github.com/vuesion/vuesion/pull/474)) ([47f74a45](https://github.com/vuesion/vuesion/commit/47f74a45d5c11c1beea476c8af946c38bb1888a5))

##### Tests

- increase coverage for components in isolation ([#475](https://github.com/vuesion/vuesion/pull/475)) ([6d662cff](https://github.com/vuesion/vuesion/commit/6d662cfffa768c9d5f2d4e6222c7617ed2aafa04))

#### 3.7.1 (2019-10-09)

##### Chores

- update dependencies ([#469](https://github.com/vuesion/vuesion/pull/469)) ([8552f936](https://github.com/vuesion/vuesion/commit/8552f936fa903ea7c69fb35fc692d73f918897bf))

### 3.7.0 (2019-10-01)

##### Chores

- **generators:** make the templates generic with hints ([04fbabbc](https://github.com/vuesion/vuesion/commit/04fbabbc6c5f2aee2161d7399427be66e9b4b66d))

##### New Features

- **generators:** add blueprint for CRUD module ([#467](https://github.com/vuesion/vuesion/pull/467)) ([05ee8d92](https://github.com/vuesion/vuesion/commit/05ee8d92cf423a469d13d229e3978d55437a7b15))
- **vue-slider:** handle focusout event ([4f2f8179](https://github.com/vuesion/vuesion/commit/4f2f8179b52a00b0cdbbec36439f03dfc68b0e42))
- **vue-autocomplete:** only prevent default when list is open ([01c4592a](https://github.com/vuesion/vuesion/commit/01c4592a2960fb85b03a2af56523d2af01957ac1))

### 3.6.0 (2019-09-21)

##### Chores

- add FUNDING.yml ([21b83c53](https://github.com/vuesion/vuesion/commit/21b83c53ce4833f02509df4b3e032dfcfb9b680a))

##### New Features

- **vue-slider:** improve SSR support ([#461](https://github.com/vuesion/vuesion/pull/461)) ([477a2079](https://github.com/vuesion/vuesion/commit/477a20794e6a9df1b2619507eb31f050575f4756))
- **vue-autocomplete:** add v-model support ([#451](https://github.com/vuesion/vuesion/pull/451)) ([f2874a07](https://github.com/vuesion/vuesion/commit/f2874a07409e8d2e30e9d9a032f1c02ca7ae16ee))

##### Bug Fixes

- **components:** remove duplicate event handlers ([#462](https://github.com/vuesion/vuesion/pull/462)) ([0abd6e5f](https://github.com/vuesion/vuesion/commit/0abd6e5f3a0f3b3e3ed23f7f37f41ec342e0b71a))

##### Tests

- simplify tests for connected components ([#450](https://github.com/vuesion/vuesion/pull/450)) ([2f3a0203](https://github.com/vuesion/vuesion/commit/2f3a0203c38b64923c4ac26b50759665c1c9f2bf))

### 3.5.0 (2019-08-26)

##### New Features

- **vue-autocomplete:** add autofocus and validation ([#448](https://github.com/vuesion/vuesion/pull/448)) ([89b4ad76](https://github.com/vuesion/vuesion/commit/89b4ad76db658fec01d88ea0b0ffc013a3b15fc5))

### 3.4.0 (2019-08-25)

##### Chores

- update contributors ([e72d178f](https://github.com/vuesion/vuesion/commit/e72d178f2b83c395941b495a058a50f28e85f126))
- update dependencies ([275eade0](https://github.com/vuesion/vuesion/commit/275eade00da90b5e3d2085a6a3ca15098fc3d362))
- updarte README.md ([#434](https://github.com/vuesion/vuesion/pull/434)) ([1409c41d](https://github.com/vuesion/vuesion/commit/1409c41deba72f29c73268c999e9359a8f1b268f))
- add helmet ([#433](https://github.com/vuesion/vuesion/pull/433)) ([4b41a332](https://github.com/vuesion/vuesion/commit/4b41a3329fabaf3542cf96d8099b7f8a6dd55c41))

##### New Features

- **vue-select:**
  - add required indicator ([d41de496](https://github.com/vuesion/vuesion/commit/d41de49658c59e322991398d95136b2331399915))
  - add label ([#444](https://github.com/vuesion/vuesion/pull/444)) ([7269c888](https://github.com/vuesion/vuesion/commit/7269c88867c68521fe64ff9555b52e1921de809d))
- **components:** add textarea ([#440](https://github.com/vuesion/vuesion/pull/440)) ([d104951c](https://github.com/vuesion/vuesion/commit/d104951c8d6ea36fc21f4c09d8e4477cf385621d))

##### Bug Fixes

- **vue-data-table:** add custom css class property ([#446](https://github.com/vuesion/vuesion/pull/446)) ([7bebf23e](https://github.com/vuesion/vuesion/commit/7bebf23e04ff0fef4a9c63bde3e9aa7e1c2a6987))
- **components:** align input elements ([#445](https://github.com/vuesion/vuesion/pull/445)) ([2ae57bc2](https://github.com/vuesion/vuesion/commit/2ae57bc21be138d280bf4d65db0a26c09d16cf5f))
- **vue-slider:** remove focus indicator after move end ([#443](https://github.com/vuesion/vuesion/pull/443)) ([eba0d9b0](https://github.com/vuesion/vuesion/commit/eba0d9b07b4c31b10b9f8589e9c70669288fdf5a))

#### 3.3.1 (2019-08-12)

##### Chores

- **deps:** update vuesion packages ([b79db603](https://github.com/vuesion/vuesion/commit/b79db603ece4490d202f615f90053c502d052f07))

### 3.3.0 (2019-08-05)

##### Chores

- update dependencies ([fc4cae23](https://github.com/vuesion/vuesion/commit/fc4cae23875d38c46b647b42bbcf239cfa66e098))

##### New Features

- **components:** add star rating ([#425](https://github.com/vuesion/vuesion/pull/425)) ([681b23eb](https://github.com/vuesion/vuesion/commit/681b23ebf66df81f2713adf6b6018f8c3c04f201))
- update vuesion/service version ([#427](https://github.com/vuesion/vuesion/pull/427)) ([ae0909a4](https://github.com/vuesion/vuesion/commit/ae0909a40b83df94888748d0548f30b23841e626))
- update installation to use the new create cli ([c08e44a9](https://github.com/vuesion/vuesion/commit/c08e44a9535f35ba8ad05e6c708d782c0c7fa665))

#### 3.2.3 (2019-06-09)

##### Bug Fixes

- **storybook:** merge webpack resolve attributes ([163c95d8](https://github.com/vuesion/vuesion/commit/163c95d8fe33dbe2fb337ef125e69028367d03f8))

#### 3.2.2 (2019-05-30)

##### Chores

- update dependencies ([27d1b9a7](https://github.com/vuesion/vuesion/commit/27d1b9a78eecc3c82ce5ce4d23e094a9c37c0665))

#### 3.2.1 (2019-05-30)

##### Bug Fixes

- **datepicker:** add methods to stories ([f057d3b0](https://github.com/vuesion/vuesion/commit/f057d3b0887ec81fa270bf2b4540808cc6094f49))

### 3.2.0 (2019-05-19)

##### Chores

- update vuesion packages ([f0c0aced](https://github.com/vuesion/vuesion/commit/f0c0aced647ae778babb1d5b01bb1c4d2a477dde))

##### Documentation Changes

- move docs to vuesion/docs ([#412](https://github.com/vuesion/vuesion/pull/412)) ([152d7f44](https://github.com/vuesion/vuesion/commit/152d7f44115468e4f15c30ef01772ae0dbea3d15))

##### New Features

- **vue-markdown:** prop for using router or native links ([#411](https://github.com/vuesion/vuesion/pull/411)) ([76b792f2](https://github.com/vuesion/vuesion/commit/76b792f27ae9c430245c570bd815987a821e0822))
- add devServer watchOptions to vuesion cfg ([#403](https://github.com/vuesion/vuesion/pull/403)) ([eaca388d](https://github.com/vuesion/vuesion/commit/eaca388de5ecec48d9ed64f28811199403043931))

##### Bug Fixes

- **vue-calender:** year view for min/max date ([#413](https://github.com/vuesion/vuesion/pull/413)) ([b277cade](https://github.com/vuesion/vuesion/commit/b277cade4df45d86214100a53f21bd8ee168df48))
- **generators:** implement conditionals, fix kebabCase ([#410](https://github.com/vuesion/vuesion/pull/410)) ([1a57b508](https://github.com/vuesion/vuesion/commit/1a57b5085fb73c5494e5a6997872c22649ddf03d))

### 3.1.0 (2019-05-02)

##### Chores

- update dependencies ([#402](https://github.com/vuesion/vuesion/pull/402)) ([6c3f29d9](https://github.com/vuesion/vuesion/commit/6c3f29d9b31a640907b2608e80bf910e771d519e))
- update discord invite link ([358f4165](https://github.com/vuesion/vuesion/commit/358f41658a44517deeddae8dc7c89858a89f8d13))
- add discord server ([76e3b5b5](https://github.com/vuesion/vuesion/commit/76e3b5b5483e4a8f294529ed6c2374db9ba7fd65))
- **readme:**
  - add shield for license scan ([1b728725](https://github.com/vuesion/vuesion/commit/1b7287256b3c2f8e6e2339f79dbb017f413b30c5))
  - add support section ([edb9a76d](https://github.com/vuesion/vuesion/commit/edb9a76d7d9878f8c42b884e9bc7bf11552ccb07))

##### Continuous Integration

- fix pipeline by running spa build not in parallel ([f3c14ea3](https://github.com/vuesion/vuesion/commit/f3c14ea321e5267b894c9b276d67aebc185900a6))

##### Documentation Changes

- **deployment:** grammar fixes and minor rewrite ([#399](https://github.com/vuesion/vuesion/pull/399)) ([65ce528e](https://github.com/vuesion/vuesion/commit/65ce528e9d60505485d7e40a2558a319c859a7d2))
- grammar fixes ([#398](https://github.com/vuesion/vuesion/pull/398)) ([811a8942](https://github.com/vuesion/vuesion/commit/811a8942dbcab9e2730800b2b72d0b0c0a0b35fc))

##### New Features

- **spa:** render static pages ([#400](https://github.com/vuesion/vuesion/pull/400)) ([f51b9ae1](https://github.com/vuesion/vuesion/commit/f51b9ae1e9b2e4093f52e5907b3073f6d6ffbdfc))

## 3.0.0 (2019-04-10)

##### Chores

- update vuesion packages ([220c9fff](https://github.com/vuesion/vuesion/commit/220c9fffcdf02986dd1c88ba86bc64b167480e1c))
- update contributors ([c2dd892d](https://github.com/vuesion/vuesion/commit/c2dd892dc3eab483280c9737f8945244df279bd6))
- enforce LF line endings ([5b62057a](https://github.com/vuesion/vuesion/commit/5b62057a52e6c0e626812154f92c077cf63a39ad))
- update circle-ci test reporter id ([8b88cb91](https://github.com/vuesion/vuesion/commit/8b88cb91487dc560e6da3814ffa74e7c9241a9bc))
- update CHANGELOG.md ([5627cda0](https://github.com/vuesion/vuesion/commit/5627cda03459c4fff523d0e5ed1f1f1bc211a36c))
- update README.md ([62b14a9c](https://github.com/vuesion/vuesion/commit/62b14a9c6f0df6b7052f89136788d768b879d473))
- add official twitter account ([f284fe6e](https://github.com/vuesion/vuesion/commit/f284fe6ee4f85026f995189a852b8916dc57b7a9))
- update contributors ([2411a21d](https://github.com/vuesion/vuesion/commit/2411a21d7bf1fe63cd147db4af66e7eeee65b109))
- update README.md ([#384](https://github.com/vuesion/vuesion/pull/384)) ([b851565d](https://github.com/vuesion/vuesion/commit/b851565d759d92be052af270878090158cecd272))
- rename storybook name to vuesion ([3690246f](https://github.com/vuesion/vuesion/commit/3690246f33e49934c8335a19d0fb9718fc8c1f5a))
- **brand:** iteration on colors and typo ([#392](https://github.com/vuesion/vuesion/pull/392)) ([7604279e](https://github.com/vuesion/vuesion/commit/7604279e1a87911dd4da2c37d6bba648e7478a07))
- **storybook:** apply brand colors ([d1415900](https://github.com/vuesion/vuesion/commit/d14159005139ed35d0016c990a804805c065b79d))

##### Documentation Changes

- add FAQ section ([#396](https://github.com/vuesion/vuesion/pull/396)) ([020926e5](https://github.com/vuesion/vuesion/commit/020926e53ddd0519fd9eb27b8edbd6780c68a305))
- fix link to 3rd party UI libs tutorial ([#395](https://github.com/vuesion/vuesion/pull/395)) ([0560cc16](https://github.com/vuesion/vuesion/commit/0560cc16f8e7aff0704379601f90ed178759e3fb))

##### New Features

- custom webpack aliases ([#393](https://github.com/vuesion/vuesion/pull/393)) ([36de6312](https://github.com/vuesion/vuesion/commit/36de6312b603e59f8812047c02bf4c96444e000d))
- **components:** add vue-image ([#386](https://github.com/vuesion/vuesion/pull/386)) ([287b2ac8](https://github.com/vuesion/vuesion/commit/287b2ac850cc8ca653d4b6bc7709f9d9b7108e35))

##### Bug Fixes

- **home-section:** add fallback for older browser ([d0b77fc5](https://github.com/vuesion/vuesion/commit/d0b77fc5678dd6a49f8abe831e0506952586f538))
- **vue-sidebar:** remove gap to the navbar ([#377](https://github.com/vuesion/vuesion/pull/377)) ([76ca0a48](https://github.com/vuesion/vuesion/commit/76ca0a481da6494ec72cf69d3c050b3f041ca663))
- **vue-modal:** remove min-width ([#376](https://github.com/vuesion/vuesion/pull/376)) ([6166eae2](https://github.com/vuesion/vuesion/commit/6166eae2379df3ece2a3c844f5a7e0332fa0773c))

##### Refactors

- apply best practices for v-for and v-if ([#389](https://github.com/vuesion/vuesion/pull/389)) ([f4a6f7c6](https://github.com/vuesion/vuesion/commit/f4a6f7c62cc03f910c4cd5594086295823ad4b87))
- accessibility iteration ([#388](https://github.com/vuesion/vuesion/pull/388)) ([fc82e784](https://github.com/vuesion/vuesion/commit/fc82e784967b3a10bb75310145e84e6dbe955000))
- re-branding ([#383](https://github.com/vuesion/vuesion/pull/383)) ([9e4ee93b](https://github.com/vuesion/vuesion/commit/9e4ee93b53f4975e4be3c355b57b5d6b52a8d462))
- rename space variables ([#380](https://github.com/vuesion/vuesion/pull/380)) ([d9facdf0](https://github.com/vuesion/vuesion/commit/d9facdf001c85a4657815b81e833d2bd34c0ec85))
- change name to vuesion ([#371](https://github.com/vuesion/vuesion/pull/371)) ([e8bf36fa](https://github.com/vuesion/vuesion/commit/e8bf36fa22bd124055cb46315faec94aab645f0f))
- **vue-loader:** add dynamic variations ([#375](https://github.com/vuesion/vuesion/pull/375)) ([0d846001](https://github.com/vuesion/vuesion/commit/0d8460010e332dbf211b4b9f369e6d021ba8f212))
- **vue-badge:** add dynamic variations ([#374](https://github.com/vuesion/vuesion/pull/374)) ([9dcf4deb](https://github.com/vuesion/vuesion/commit/9dcf4debc6bc9251fa38de53f16bef24cc65bbb2))
- **vue-button:** add dynamic variations ([#373](https://github.com/vuesion/vuesion/pull/373)) ([21815e91](https://github.com/vuesion/vuesion/commit/21815e91404d092d44212ae61dcdbc4ced2a8353))
- **design-system:** color-palette ([#370](https://github.com/vuesion/vuesion/pull/370)) ([8f18bf99](https://github.com/vuesion/vuesion/commit/8f18bf9962debbd5f2a0fad32487944914cb243c))

### 2.3.0 (2019-04-01)

##### Chores

- update README.md ([ae277ef9](https://github.com/vuesion/vuesion/commit/ae277ef9848ee59ccd5e67c74838ae620bcdfac8))
- update dependencies ([#385](https://github.com/vuesion/vuesion/pull/385)) ([6b88988e](https://github.com/vuesion/vuesion/commit/6b88988e033b1d90381ff3c80bece57b4692f842))

##### New Features

- **storybook:** update storybook ([#372](https://github.com/vuesion/vuesion/pull/372)) ([aa9bb465](https://github.com/vuesion/vuesion/commit/aa9bb4656d4e9e02d4940ff67a287c493f0f2b88))
- **directives:** add v-sr-only ([#364](https://github.com/vuesion/vuesion/pull/364)) ([92054141](https://github.com/vuesion/vuesion/commit/920541415e3812a322944020cfc0f2d8d2bba1b4))
- **vue-tab-group:** adds reactivity to title prop ([#363](https://github.com/vuesion/vuesion/pull/363)) ([7be6f5b0](https://github.com/vuesion/vuesion/commit/7be6f5b0fdf5ff78d079eb5ec796c15e1108fc3c))

##### Refactors

- add prop validators ([#367](https://github.com/vuesion/vuesion/pull/367)) ([71c4a649](https://github.com/vuesion/vuesion/commit/71c4a64965162b31bf44f56b6ea444888f12cf57))
- **vue-collapse:** remove magic number ([#366](https://github.com/vuesion/vuesion/pull/366)) ([1f207681](https://github.com/vuesion/vuesion/commit/1f2076819de0061c7e928a763c75f48a12e3dde2))
- **storybook:** register router as global decorator ([#365](https://github.com/vuesion/vuesion/pull/365)) ([4554ae03](https://github.com/vuesion/vuesion/commit/4554ae03a20fdcabf7cb9d4544e1e55c9acf37f8))

### 2.2.0 (2019-03-02)

##### Chores

- **storybook:** align component structure with atomic design ([#355](https://github.com/vuesion/vuesion/pull/355)) ([a17a2627](https://github.com/vuesion/vuesion/commit/a17a26270b2228c48baaba9291b16659e0eca83e))
- update README.md ([3768a5b0](https://github.com/vuesion/vuesion/commit/3768a5b0f745759cae2179c29bc6f61e8a839959))

##### Documentation Changes

- update clean-up guide to include dashboard ([b514d69d](https://github.com/vuesion/vuesion/commit/b514d69dfe5febed6c943250eab7a6f9b24063cb))

##### New Features

- **vue-button:** support link as button ([#357](https://github.com/vuesion/vuesion/pull/357)) ([ce59f0ba](https://github.com/vuesion/vuesion/commit/ce59f0ba45ac4b74191c158406605701355d85b0))
- add auth demo ([#352](https://github.com/vuesion/vuesion/pull/352)) ([9d1983fc](https://github.com/vuesion/vuesion/commit/9d1983fce0d86eec1cc9c76a3e74250f3e4b96d3))

##### Bug Fixes

- **i18n:** handle cached locales in client correctly ([#356](https://github.com/vuesion/vuesion/pull/356)) ([d591596a](https://github.com/vuesion/vuesion/commit/d591596a411d7f47da25f0a843bd302d04c43ff8))

### 2.1.0 (2019-02-23)

##### Build System / Dependencies

- upgrade docker image to node:10 ([#347](https://github.com/vuesion/vuesion/pull/347)) ([b039293e](https://github.com/vuesion/vuesion/commit/b039293eb6ce1fe46bc82dbdc6ed041101c71d1b))

##### Chores

- update dependencies ([#346](https://github.com/vuesion/vuesion/pull/346)) ([6b869b51](https://github.com/vuesion/vuesion/commit/6b869b5124d1d41b732a3c5c4fff502d2a22d18f))
- update dependencies ([ab6b5d90](https://github.com/vuesion/vuesion/commit/ab6b5d909bf21810db30dd6171b85a38b034769c))
- optimize npm scripts ([#337](https://github.com/vuesion/vuesion/pull/337)) ([e8ff1545](https://github.com/vuesion/vuesion/commit/e8ff15456a1bbdfa887f58bd673d1658c859753c))

##### Continuous Integration

- switch to circleci ([#351](https://github.com/vuesion/vuesion/pull/351)) ([401a3727](https://github.com/vuesion/vuesion/commit/401a37276ba077f5d6a7e8f8813c110ee5077fc6))

##### Documentation Changes

- update contributors ([7d8127cb](https://github.com/vuesion/vuesion/commit/7d8127cb2b34be39c76aa0a1870f0d01a0732b25))
- add different kinds of deployments ([1350eb51](https://github.com/vuesion/vuesion/commit/1350eb5189d78f2147111de54f5c185bccd64847))

##### New Features

- upgrade to vue 2.6 ([#345](https://github.com/vuesion/vuesion/pull/345)) ([6a839de7](https://github.com/vuesion/vuesion/commit/6a839de76d3f130f9fc6a9ecb358def1d7e5de25))
- **storybook:** add viewport addon ([#344](https://github.com/vuesion/vuesion/pull/344)) ([6973459b](https://github.com/vuesion/vuesion/commit/6973459b2b2364dd851fd43cea3f2c7ac8cef015))

##### Bug Fixes

- add type to all props ([72753216](https://github.com/vuesion/vuesion/commit/72753216d85e429e1747d3ee1eb47a14fb439cb0))
- use global css classes in global.scss ([#332](https://github.com/vuesion/vuesion/pull/332)) ([3b4230ff](https://github.com/vuesion/vuesion/commit/3b4230ff13d4e9d95c16bd94e0143e86ad37416d))

##### Refactors

- switch to vuesion org ([#348](https://github.com/vuesion/vuesion/pull/348)) ([e7b13edc](https://github.com/vuesion/vuesion/commit/e7b13edcddb7e56e425c9047e300175040cde46a))
- change promises to async/await ([#339](https://github.com/vuesion/vuesion/pull/339)) ([8594736c](https://github.com/vuesion/vuesion/commit/8594736c370ba97140cbe2de3fdb57ab55be81d6))
- **design-system:** replace relative path with alias ([c29d8768](https://github.com/vuesion/vuesion/commit/c29d8768e9d8e365987b1b9500eaac7193d40062))

#### 2.0.2 (2019-01-26)

##### Bug Fixes

- support Windows ([5ce5dbb8](https://github.com/vuesion/vuesion/commit/5ce5dbb885f9bbcd929819114398bf71903cc37b))

#### 2.0.1 (2019-01-21)

##### Chores

- update vue-starter-packages ([6bc71f14](https://github.com/vuesion/vuesion/commit/6bc71f140167c82f37f493c9cf75613120a9347a))

##### Documentation Changes

- update README.md ([33ad3f92](https://github.com/vuesion/vuesion/commit/33ad3f92e81710fc717c860bd0810ce4c83bc729))

##### Bug Fixes

- downgrade webpack because of breaking change ([3c4f11af](https://github.com/vuesion/vuesion/commit/3c4f11afde0514b5bea2349fe0b5c43b9f8a234d))

## 2.0.0 (2019-01-19)

##### Chores

- update vue-starter-packages ([749aba44](https://github.com/vuesion/vuesion/commit/749aba4402782b7ed517fa9eb8d2ae24c7b6c616))
- update design-system link ([7fa0e6a8](https://github.com/vuesion/vuesion/commit/7fa0e6a844d1a921a354f4bad50881d8403a2fa9))
- refine USPs and docs ([322776dc](https://github.com/vuesion/vuesion/commit/322776dc838c3e85daedff308dcaf24ea90008c6))
- update dependencies ([d0a7543d](https://github.com/vuesion/vuesion/commit/d0a7543d5169844486626e15b7fe40680518a52e))
- update dependencies ([#314](https://github.com/vuesion/vuesion/pull/314)) ([eb135fed](https://github.com/vuesion/vuesion/commit/eb135feddda53d9aa127eeb0a98667a0e599fb9a))
- update README.md ([a59088fd](https://github.com/vuesion/vuesion/commit/a59088fd7f42913bed84024ee058d16d513265b1))
- update dependencies ([c60a312a](https://github.com/vuesion/vuesion/commit/c60a312a5a7268f252e795840310a0a08c6214f9))
- update dependencies ([2b47ffd1](https://github.com/vuesion/vuesion/commit/2b47ffd112f4eb29aa4210859a12c8f65cb01be7))
- update dependencies ([d81a53ea](https://github.com/vuesion/vuesion/commit/d81a53ea1a26c761d31fa730b171615a660b16d9))
- update vue-starter presentation ([cd1973ce](https://github.com/vuesion/vuesion/commit/cd1973cec7f0cf3b41c304e47767e8b23b354614))
- **httpservice-interceptor:** re-authentication for multiple calls ([#304](https://github.com/vuesion/vuesion/pull/304)) ([eda957df](https://github.com/vuesion/vuesion/commit/eda957dff5d1b846b8cf129618588e4074ac4381))

##### Continuous Integration

- add silent flags ([39a6ab0f](https://github.com/vuesion/vuesion/commit/39a6ab0f60b161e4b8766ee12c8f10c1028d11aa))

##### Documentation Changes

- **read-me:**
  - fix formatting ([431b6ea0](https://github.com/vuesion/vuesion/commit/431b6ea08af6c795cc4163d58a9ee697d10c581d))
  - update lighthouse score ([763f829a](https://github.com/vuesion/vuesion/commit/763f829a2388d035d270e2546c1683faef91da96))
  - remove issue-hunt ([816bf4d0](https://github.com/vuesion/vuesion/commit/816bf4d0618841c1d6d394af5e09fb20ab2d10f8))
- update contributors ([b754a561](https://github.com/vuesion/vuesion/commit/b754a561143d36c974d0d8269054ed8f45bc3c24))
- update installation guide ([33c9901e](https://github.com/vuesion/vuesion/commit/33c9901ef0370645b4ff040ca9dc55bd97114817))
- change "npm run g" to "npm run generate" ([#325](https://github.com/vuesion/vuesion/pull/325)) ([36f936de](https://github.com/vuesion/vuesion/commit/36f936de632a4e2140008008e9812f00a6c6ac3b))
- move DesignSystem stories in it's own folder ([4b6482fd](https://github.com/vuesion/vuesion/commit/4b6482fd53e926ebf4182b451efbbe294c66391c))
- add design system storybook integration ([#275](https://github.com/vuesion/vuesion/pull/275)) ([b8020323](https://github.com/vuesion/vuesion/commit/b8020323f4b9b623f904b1b6b9e8d53c3254a553))
- add design-system ([bd3f501e](https://github.com/vuesion/vuesion/commit/bd3f501ef923090aeceec3a7ac7a859951d41a0b))
- **prettier:** add editor configuration to install guide ([81289d8d](https://github.com/vuesion/vuesion/commit/81289d8d1e977f44cf9f6a157f495aa1930d6594))

##### New Features

- **vue-markdown:** add reactivity ([9291551e](https://github.com/vuesion/vuesion/commit/9291551e1cde4fe44293fbb96c338a4e6285a2ea))
- **data-table:** add props for sort key and direction ([ebae511d](https://github.com/vuesion/vuesion/commit/ebae511d11aa6b34f8ac6ebba4d65322bc374128))
- **dropdown-menu:** add custom option renderer ([62569a63](https://github.com/vuesion/vuesion/commit/62569a63e8516cbc7d0250af1a9820d7986a694b))
- sync cookie state on redirect ([#300](https://github.com/vuesion/vuesion/pull/300)) ([4b7bcd27](https://github.com/vuesion/vuesion/commit/4b7bcd27666418995a1ba9d3d4525fcb4bb46424))
- add prettier ([#288](https://github.com/vuesion/vuesion/pull/288)) ([14b70767](https://github.com/vuesion/vuesion/commit/14b70767b1f1c203cea772c5bdd4663306b5754d))
- load vuex-modules on demand ([#273](https://github.com/vuesion/vuesion/pull/273)) ([b0a55392](https://github.com/vuesion/vuesion/commit/b0a553929e70ab7bb8ee7c358f218267a040f62b))
- **i18n:** extract messages in single line conditions ([#298](https://github.com/vuesion/vuesion/pull/298)) ([2785a15d](https://github.com/vuesion/vuesion/commit/2785a15d7dbe15333bd152be4b65fe7d1a986583))
- **vuex-persist:** add forceInitialState option ([#299](https://github.com/vuesion/vuesion/pull/299)) ([2fa3dad4](https://github.com/vuesion/vuesion/commit/2fa3dad490c265fb9c4e8e772cda2c39bb890277))
- **components:**
  - accessibility iteration ([#283](https://github.com/vuesion/vuesion/pull/283)) ([1bfa8c60](https://github.com/vuesion/vuesion/commit/1bfa8c602843abca1518dee419905302a8b311b5))
  - add donut chart ([#278](https://github.com/vuesion/vuesion/pull/278)) ([bd5b0800](https://github.com/vuesion/vuesion/commit/bd5b08009fbb710ba69a85acb8b128e9b6b5ed1a))
  - add headline component ([#274](https://github.com/vuesion/vuesion/pull/274)) ([c213674f](https://github.com/vuesion/vuesion/commit/c213674f2c01df425143462e2b911ea8fd88d0a8))
  - add dropdown menu ([#265](https://github.com/vuesion/vuesion/pull/265)) ([4f523243](https://github.com/vuesion/vuesion/commit/4f523243c88cfb7f9441314a1db971fc1fac1102))
  - add sidebar ([87e7e1c0](https://github.com/vuesion/vuesion/commit/87e7e1c018b7e32cd3f24ba02407e702b27e7a9f))
- **vue-tab-group:** add keyboard accessibility ([#280](https://github.com/vuesion/vuesion/pull/280)) ([f81b3052](https://github.com/vuesion/vuesion/commit/f81b3052fbeb0de72e7fb7d2d5bed01b659e6e1d))
- **vue-dropdown-menu:** add separator option ([#279](https://github.com/vuesion/vuesion/pull/279)) ([361f5c27](https://github.com/vuesion/vuesion/commit/361f5c2796f3496f11780b25b04a8d7f9b07dd1f))
- **storybook:** add a11y addon + fixes ([#266](https://github.com/vuesion/vuesion/pull/266)) ([c24ff813](https://github.com/vuesion/vuesion/commit/c24ff813f8f05b464f5415b389fef3619b4c8bac))
- **vue-data-table:** display all data if maxRows is set to 0 ([9c99083b](https://github.com/vuesion/vuesion/commit/9c99083b31dd8bf2f34f21adea64054b2b2a2a6c))

##### Bug Fixes

- **data-table:** sanitize regex ([993001e3](https://github.com/vuesion/vuesion/commit/993001e3d2b3f19593dae5ebd5d4180003d96a60))
- **generator-cli:** fix HttpService reference ([f78df43a](https://github.com/vuesion/vuesion/commit/f78df43a508ab81a185e051244c7c46c23420b9b))
- **tslint:** remove tslint autofix ([#309](https://github.com/vuesion/vuesion/pull/309)) ([e90d8ad1](https://github.com/vuesion/vuesion/commit/e90d8ad13197c1bba1bacaa2e47f26966b2a2b47))
- **tests:** get rid of wrapper:any ([be7bb3fd](https://github.com/vuesion/vuesion/commit/be7bb3fd5abfe01f8ee3334a223df28d0437d724))
- **vue-button:**
  - prevent multiple click handlers ([9d990369](https://github.com/vuesion/vuesion/commit/9d990369deb86314725d190ddac0a97362418a59))
  - set fixed width for button loading ([#277](https://github.com/vuesion/vuesion/pull/277)) ([ce8de82f](https://github.com/vuesion/vuesion/commit/ce8de82f77385ff03b5a0aff6936e7ece0b70c00))
- **vue-donut-chart:** reset usedColors on data change ([344a1ced](https://github.com/vuesion/vuesion/commit/344a1ced4aab5b06801b05112699e737a092c8c0))
- **vue-dropdown-menu:** stop propagating events ([0a891b73](https://github.com/vuesion/vuesion/commit/0a891b73da2d5b259b1e2566e8b0882d9e330d28))
- **store:** check for module state before deleting it ([dc33eb32](https://github.com/vuesion/vuesion/commit/dc33eb32d23157dbc3361364958a6300ef91fc1f))
- **vue-data-table:** remove margin from icon ([044f9330](https://github.com/vuesion/vuesion/commit/044f9330bc418ba8589bc661e2d2e4d958449afb))

##### Refactors

- **design-system:**
  - rename color palette ([e85d934b](https://github.com/vuesion/vuesion/commit/e85d934b023622de7279480ddc516935dff554fa))
  - prefix brand variables ([07184242](https://github.com/vuesion/vuesion/commit/0718424205b106a34385bd8e5ddab73d684b9b36))
- use vue-starter-service and vue-starter-vuex-persist ([#323](https://github.com/vuesion/vuesion/pull/323)) ([7bddaceb](https://github.com/vuesion/vuesion/commit/7bddacebff075a3dfe6ef519c48470470baffa77))
- webpack config ([#315](https://github.com/vuesion/vuesion/pull/315)) ([361ebf2f](https://github.com/vuesion/vuesion/commit/361ebf2fb0880e7182779ec7f9143eaaa50b6f6c))
- **components:**
  - remove unused default props ([270759e0](https://github.com/vuesion/vuesion/commit/270759e04f53eb40c36fe3ba6bc55b66c4571caf))
  - use provide/inject ([f402a16a](https://github.com/vuesion/vuesion/commit/f402a16a3655f7760f84f5d0b1e1fa0593154788))
  - use color enum instead of variant flags ([#310](https://github.com/vuesion/vuesion/pull/310)) ([06ff80a4](https://github.com/vuesion/vuesion/commit/06ff80a4d70a562633ecfdee7c1f49b5a6db4e60))
  - remove attr from wrapper divs ([#287](https://github.com/vuesion/vuesion/pull/287)) ([42ec5066](https://github.com/vuesion/vuesion/commit/42ec5066595daf98bbb8ccc3db9eab1f06c7c887))
  - remove required:false and default:null ([d69f6f9b](https://github.com/vuesion/vuesion/commit/d69f6f9b6f2bb396db862bade716d68e4c02183f))
- **http-service:**
  - use init function to pass deps to service ([b7a53d2c](https://github.com/vuesion/vuesion/commit/b7a53d2cb402e58d5341f20fc781892279e5fab2))
  - separate interceptors; add tests ([8c13ffac](https://github.com/vuesion/vuesion/commit/8c13ffac880afe910b2f796f4c3b2b6ca5217a54))
- **vuex-persist:** prepare to function as an own package ([983ea217](https://github.com/vuesion/vuesion/commit/983ea217d73bb9f2bb7dd0a27a46fba026289264))
- **webpack:** clean up configs ([ecd1d981](https://github.com/vuesion/vuesion/commit/ecd1d9811a17d303bad589fbbab338b832e94930))
- **i18n:** handle prettier formatting ([#308](https://github.com/vuesion/vuesion/pull/308)) ([8118154b](https://github.com/vuesion/vuesion/commit/8118154b580c0dc7a7fa079564ad9c0a59f10788))
- **storybook:**
  - use rules from base webpack config ([56b95df4](https://github.com/vuesion/vuesion/commit/56b95df41dfd706866bb8203b1a60321c7131bfc))
  - update storybook-addon-vue-info ([a47c7ed2](https://github.com/vuesion/vuesion/commit/a47c7ed22df3d1beea03df5616ce9ddf0588ebb8))
- **tests:** get rid of wrapper:any ([858a5593](https://github.com/vuesion/vuesion/commit/858a559307952977e46c774bc57a4c37d7e3d6d0))
- **dev-server:** use webpack hooks ([505298dd](https://github.com/vuesion/vuesion/commit/505298dd86fe6156c0dce08d459bf8ca642ccf55))
- **vue-panel:** rename to vue-card ([08090c8e](https://github.com/vuesion/vuesion/commit/08090c8eb0f0a0759667bc1902d26b32095b5d0a))
- **vue-data-table:**
  - remove calculated width ([faa31695](https://github.com/vuesion/vuesion/commit/faa31695e0c1beedd990d0c0610eaba9223d9e21))
  - extract scss variable into separate file ([02dfad19](https://github.com/vuesion/vuesion/commit/02dfad19227d6446bcfdf1f74e5376ed7a1f0ac4))
- **sidebar:** change tag to aside, height and width ([c8284617](https://github.com/vuesion/vuesion/commit/c828461712ba8253b5db585c9fbaa49ce830463f))
- **ui:**
  - rename variation warn to warning ([c822e138](https://github.com/vuesion/vuesion/commit/c822e138e2c78f3096c3f29a8d55b6ba1291fa36))
  - rename brand-warn to brand-warning ([2477eed6](https://github.com/vuesion/vuesion/commit/2477eed6c9cd577258ac76cb7926f2ac4c4906f9))
  - rename brand variant attention to warn ([bf249b03](https://github.com/vuesion/vuesion/commit/bf249b033268ea3e5b58b21595071a00f53631af))
  - namings, colors, fonts and spacings ([b9fb8016](https://github.com/vuesion/vuesion/commit/b9fb80164dc86fbf465e4707910ee9eb105642ce))
- **vue-modal:** center modal on desktop; stick to content width ([d6d71e4c](https://github.com/vuesion/vuesion/commit/d6d71e4cffe7d60972f36f81afd52fa513382918))

##### Tests

- add example for form validation ([#297](https://github.com/vuesion/vuesion/pull/297)) ([5894e2f7](https://github.com/vuesion/vuesion/commit/5894e2f79679c935e172974830b28e9e9c934856))

### 1.4.0 (2018-10-27)

##### Chores

- add new contributors ([6a2c7b9b](https://github.com/vuesion/vuesion/commit/6a2c7b9bfd48eaf418f4352e4b6fa8a54f8eaa0a))

##### Documentation Changes

- update quick start / install ([997837cb](https://github.com/vuesion/vuesion/commit/997837cb31063649e78786d388ab74e0cef7e707))
- fix cleanup docs ([#267](https://github.com/vuesion/vuesion/pull/267)) ([b0d881e4](https://github.com/vuesion/vuesion/commit/b0d881e439a448737e30b91bdf13e14f581f6976))
- **config:** fix spelling mistake ([#255](https://github.com/vuesion/vuesion/pull/255)) ([4e6dfc2c](https://github.com/vuesion/vuesion/commit/4e6dfc2c867b344817c805d0a7a2582876b5b0db))

##### New Features

- **vue-input:** add auto-focus for SPA's ([05996b33](https://github.com/vuesion/vuesion/commit/05996b338bafd966130d82a32980da26022267d2))
- **vue-tooltip:** add property to programmatically suppress tooltip ([#263](https://github.com/vuesion/vuesion/pull/263)) ([d625656c](https://github.com/vuesion/vuesion/commit/d625656cdeb5761a8434cccb5852bca44ad88066))
- **vue-data-table:** add row to scoped slot; add sortable, fitContent ([#256](https://github.com/vuesion/vuesion/pull/256)) ([fb7ed420](https://github.com/vuesion/vuesion/commit/fb7ed42041f401c6bb68dc586fcff6ae180db3a0))
- **i18n:** update portuguese translations ([#253](https://github.com/vuesion/vuesion/pull/253)) ([38655445](https://github.com/vuesion/vuesion/commit/38655445997e50ffcf3758d2b52186286d9cb05f))

##### Bug Fixes

- module typings ([#271](https://github.com/vuesion/vuesion/pull/271)) ([efe654b3](https://github.com/vuesion/vuesion/commit/efe654b3dca89f2f5c679b8031e85e4683ec4125))
- remove performance budget in dev-mode ([a58728e0](https://github.com/vuesion/vuesion/commit/a58728e0d203478f28a3c738931d9dd5327aaccd))
- remove empty img alt tag rules ([f5ad9605](https://github.com/vuesion/vuesion/commit/f5ad960518f72978b8b8732f5c40ff3b5bb8aa24))
- **typings:** add rootState to ActionContext ([#262](https://github.com/vuesion/vuesion/pull/262)) ([22dcbb36](https://github.com/vuesion/vuesion/commit/22dcbb36bd8c02bc34ef2fd62714f912ce12add0))

##### Performance Improvements

- add webpack performance budget ([ee944cf2](https://github.com/vuesion/vuesion/commit/ee944cf2f31fb66271e8c4a865343821fa40dc3e))

##### Tests

- **vuex-persist:** replace localStorage with mock implementation ([#272](https://github.com/vuesion/vuesion/pull/272)) ([0c129940](https://github.com/vuesion/vuesion/commit/0c129940908356cf1b58f3adfe6a652d142834c2))

### 1.3.0 (2018-10-06)

##### Chores

- add new contributors ([7c42780a](https://github.com/vuesion/vuesion/commit/7c42780abc7b629144d68365989b095cb958f2bf))
- catch errors for prefetch in a unified way ([#230](https://github.com/vuesion/vuesion/pull/230)) ([20f959fc](https://github.com/vuesion/vuesion/commit/20f959fc2d530bdb5dc8d38343f3dab87381e01a))
- improve 404 page wording ([#228](https://github.com/vuesion/vuesion/pull/228)) ([937e1151](https://github.com/vuesion/vuesion/commit/937e1151df7ad6c556be10d5df7c08a14a2ca00a))

##### Documentation Changes

- **readme:** add issue-hunt and all-contributors ([#233](https://github.com/vuesion/vuesion/pull/233)) ([2d84ee50](https://github.com/vuesion/vuesion/commit/2d84ee50aca76913b14b85b99922bdacc6d2b50d))
- add missing snipped to 3rd party integration guide ([12b18047](https://github.com/vuesion/vuesion/commit/12b18047c9854c08568b7dec7e04f3ce60d97f48))

##### New Features

- **vue-tab-group:** add is-active property to pre-select tab-item ([#248](https://github.com/vuesion/vuesion/pull/248)) ([0f5f2316](https://github.com/vuesion/vuesion/commit/0f5f23168c4aa43d9ceba1dafb372c2b285ba8c6))
- **vue-modal:** emit close event on ESC press ([#247](https://github.com/vuesion/vuesion/pull/247)) ([b38c8401](https://github.com/vuesion/vuesion/commit/b38c84018c70307f41249c7aa042413a88a4603d))
- **components:** add Breadcrumb ([#234](https://github.com/vuesion/vuesion/pull/234)) ([ac425a0d](https://github.com/vuesion/vuesion/commit/ac425a0d4db0ad6d0a09855b6614e680d50406dd))
- don't change route on 404 ([#229](https://github.com/vuesion/vuesion/pull/229)) ([d00dabb2](https://github.com/vuesion/vuesion/commit/d00dabb2e94e7632a347064632fc28ef3d5f70c9))

##### Refactors

- improve test setup for connected components ([#246](https://github.com/vuesion/vuesion/pull/246)) ([115d5fad](https://github.com/vuesion/vuesion/commit/115d5fadfa08997e92b894017ff889a6ac36f3af))
- add return type for prefetch ([#243](https://github.com/vuesion/vuesion/pull/243)) ([1c15c1bf](https://github.com/vuesion/vuesion/commit/1c15c1bf2ab7143bbd966c66fc6e600e18970852))
- **dev:** add type checking and linting ([#238](https://github.com/vuesion/vuesion/pull/238)) ([0db3242e](https://github.com/vuesion/vuesion/commit/0db3242efc8fbd32d960878ef29f811400c54c9a))

##### Tests

- **vue-select:** add test for disabled property ([#239](https://github.com/vuesion/vuesion/pull/239)) ([907dfd22](https://github.com/vuesion/vuesion/commit/907dfd22275baa3bc91cac8b2cca52985c0bea16))

#### 1.2.2 (2018-09-13)

##### Chores

- update dependencies ([#224](https://github.com/vuesion/vuesion/pull/224)) ([b5dba93b](https://github.com/vuesion/vuesion/commit/b5dba93b2ab068f9db37ac20b5a76f2791f8d637))

##### Documentation Changes

- add progressive-web-app section ([#227](https://github.com/vuesion/vuesion/pull/227)) ([3387b957](https://github.com/vuesion/vuesion/commit/3387b9575c48c43aca2abcbf2342b7975871c6d4))
- add guide to integrate with 3rd party UI libraries ([#225](https://github.com/vuesion/vuesion/pull/225)) ([8b3357bc](https://github.com/vuesion/vuesion/commit/8b3357bc197e0070a5f219a8b1b21f3e79f6bb37))
- add a recommended architecture section ([#222](https://github.com/vuesion/vuesion/pull/222)) ([b7b575b4](https://github.com/vuesion/vuesion/commit/b7b575b425ec1039c84bc02e3cb53766b69db7f2))
- add tutorial how to prefetch data on the server side ([#221](https://github.com/vuesion/vuesion/pull/221)) ([9b162bb3](https://github.com/vuesion/vuesion/commit/9b162bb369e7185cc9687492cbe5b66ff831fec2))

##### Bug Fixes

- dockerfile ([#215](https://github.com/vuesion/vuesion/pull/215)) ([fb3b908b](https://github.com/vuesion/vuesion/commit/fb3b908bc0aacad2c843e566a93634d4287e4f63))

##### Performance Improvements

- optimize Dockerfile ([d0348a5f](https://github.com/vuesion/vuesion/commit/d0348a5f1968510158f38c2cc61d66fe34ce4c13))

#### 1.2.1 (2018-08-16)

##### Chores

- update issue templates ([4d52e7ff](https://github.com/vuesion/vuesion/commit/4d52e7ffee6972ca5f291daca948ce16110d360b))

##### Documentation Changes

- **zh-cn:** add redirects.md ([#206](https://github.com/vuesion/vuesion/pull/206)) ([56490aa3](https://github.com/vuesion/vuesion/commit/56490aa35d6a0a23b3ea073ecdf66cb6d773bcb2))

##### Bug Fixes

- update engines to match README ([#209](https://github.com/vuesion/vuesion/pull/209)) ([2a139fd9](https://github.com/vuesion/vuesion/commit/2a139fd9d6976ae5ef3277dafca4a5dfed37c9d4))

### 1.2.0 (2018-08-04)

##### Documentation Changes

- improve localisation quality for zh-cn ([#202](https://github.com/vuesion/vuesion/pull/202)) ([39c57ed0](https://github.com/vuesion/vuesion/commit/39c57ed031302cd53b9ec2c29a796d5020c2d3ba))

##### New Features

- redirect from route guards ([#204](https://github.com/vuesion/vuesion/pull/204)) ([a05def33](https://github.com/vuesion/vuesion/commit/a05def33cfbb81bf69c40eedd0f6ddc563fa2387))
- add programmatic server side redirect ([#201](https://github.com/vuesion/vuesion/pull/201)) ([ea3afe3a](https://github.com/vuesion/vuesion/commit/ea3afe3af80534d662a366174190ddfad76f583c))
- add server-side redirect ([#199](https://github.com/vuesion/vuesion/pull/199)) ([9c036f73](https://github.com/vuesion/vuesion/commit/9c036f737ae1b39ba00bb2db97f8b7c10483d66a))
- replace font-awesome with SVG's ([#180](https://github.com/vuesion/vuesion/pull/180)) ([da9422fb](https://github.com/vuesion/vuesion/commit/da9422fbc3f8c59c53f51cdc7dcc1be886fcce9f))
- **components:**
  - add navigation-progress ([#186](https://github.com/vuesion/vuesion/pull/186)) ([ab74de66](https://github.com/vuesion/vuesion/commit/ab74de664cc95a7fd4493f61352e6f54e185ed7a))
  - add cookie consent ([#179](https://github.com/vuesion/vuesion/pull/179)) ([a30fad4c](https://github.com/vuesion/vuesion/commit/a30fad4cee871a58cc59f6e1e042825459ef1092))

##### Bug Fixes

- **vue-modal:** change overlay event listener for Firefox ([#205](https://github.com/vuesion/vuesion/pull/205)) ([678954ad](https://github.com/vuesion/vuesion/commit/678954adf2646ec4d62fd7e8b0e962327e5e10d2))

##### Refactors

- **routes:** simplify error-handling code ([#187](https://github.com/vuesion/vuesion/pull/187)) ([a24d0961](https://github.com/vuesion/vuesion/commit/a24d0961385ef96175a76f898a63f4f8a6ccf2e6))
- **vuex:** change default-state object to a factory function ([#183](https://github.com/vuesion/vuesion/pull/183)) ([66d31fb7](https://github.com/vuesion/vuesion/commit/66d31fb7193d2234d1a2755e4a6f71b935b1f8d8))

##### Tests

- **e2e:** add 404 HTTP status integration test ([#200](https://github.com/vuesion/vuesion/pull/200)) ([c65619ae](https://github.com/vuesion/vuesion/commit/c65619ae3bfcfc75cbc30c926d75f06b55448af8))

#### 1.1.4 (2018-07-25)

##### Chores

- remove language translations ([79915ed1](https://github.com/vuesion/vuesion/commit/79915ed19813c5b82897c563b4eaea584ff3527a))
- add new heroku api key ([7dcb8d12](https://github.com/vuesion/vuesion/commit/7dcb8d126efbb51d5bfcc9d1b714884bb75c297f))

##### Documentation Changes

- localization for zh-cn ([#190](https://github.com/vuesion/vuesion/pull/190)) ([ebc70a53](https://github.com/vuesion/vuesion/commit/ebc70a53a5c4c8d1ac9c6a7e354227033b46bd86))

##### Bug Fixes

- **build:** don't use app config in spa build ([ec14fa06](https://github.com/vuesion/vuesion/commit/ec14fa065488b3e98c71465594cc26d34c9e438b))

#### 1.1.3 (2018-07-24)

##### Bug Fixes

- proper 404 page ([#189](https://github.com/vuesion/vuesion/pull/189)) ([a7bac441](https://github.com/vuesion/vuesion/commit/a7bac4417e38d06eb90064cd5fab8fee38fb4b78))

#### 1.1.2 (2018-07-14)

##### Bug Fixes

- **server-utils:** add string interpolation to logger ([7e5a930d](https://github.com/vuesion/vuesion/commit/7e5a930ddde09e8b2b4b7b2ec4eb8c9ea9b8b40e))

#### 1.1.1 (2018-07-07)

##### Bug Fixes

- **update-script:** remove .update.json and winston, fix folder creation ([6890ddca](https://github.com/vuesion/vuesion/commit/6890ddca69199afede37bd64ee0d5c65578c3b75))

### 1.1.0 (2018-06-30)

##### Chores

- update dependencies ([#176](https://github.com/vuesion/vuesion/pull/176)) ([cf3a10d7](https://github.com/vuesion/vuesion/commit/cf3a10d78ff53929d75f71503010942943604c30))
- update contributing guidelines ([fdc2fee3](https://github.com/vuesion/vuesion/commit/fdc2fee3f3b3062f45daba7bdf4189745bb96f8f))
- add version to README.md ([b2ae228a](https://github.com/vuesion/vuesion/commit/b2ae228a7d08f2b3b1d634da75b30f1975549be7))
- **http-service:** remove default authorization header ([#156](https://github.com/vuesion/vuesion/pull/156)) ([3d057535](https://github.com/vuesion/vuesion/commit/3d05753500f45d0482d37c84e82f35b39b71c1b7))

##### Documentation Changes

- **cli:** add hint for paths in names ([#168](https://github.com/vuesion/vuesion/pull/168)) ([a66dfffe](https://github.com/vuesion/vuesion/commit/a66dfffe53c3da62cc32c248cd78d4a7d8f7f4c3))
- **contributing:** add "chore" to list of commit message types ([#157](https://github.com/vuesion/vuesion/pull/157)) ([24b6be90](https://github.com/vuesion/vuesion/commit/24b6be90ecf064be1a3165eaaefd27489b274900))
- improve wording ([#154](https://github.com/vuesion/vuesion/pull/154)) ([752b946e](https://github.com/vuesion/vuesion/commit/752b946ec232f93777038a28de6e1dc67b43e401))

##### New Features

- **vue-pagination:** add keyboard navigation ([dc025687](https://github.com/vuesion/vuesion/commit/dc02568782ac39ed8311e11b0c0b54ff427fc3af))
- **components:**
  - add toggle ([#175](https://github.com/vuesion/vuesion/pull/175)) ([43e0b80e](https://github.com/vuesion/vuesion/commit/43e0b80e388aacc56aa78f371e918f84573e39d9))
  - add data-table ([#167](https://github.com/vuesion/vuesion/pull/167)) ([05267b4d](https://github.com/vuesion/vuesion/commit/05267b4dd77bb2a564c3ac32f91c703956b3bb24))
  - add carousel ([#166](https://github.com/vuesion/vuesion/pull/166)) ([bb12ac04](https://github.com/vuesion/vuesion/commit/bb12ac042573c02ea76d3a637b496c47d8fda050))
  - add text truncate component ([#165](https://github.com/vuesion/vuesion/pull/165)) ([27a69d02](https://github.com/vuesion/vuesion/commit/27a69d02efb1972f3d746e8274b3df851e6f470a))
- **vue-slider:** accessibility for keyboard users ([#160](https://github.com/vuesion/vuesion/pull/160)) ([7735f9c4](https://github.com/vuesion/vuesion/commit/7735f9c486c74d2d51fe4cbfba2ce13b3d0f004f))
- **vue-date-picker:** open calendar on focus ([#159](https://github.com/vuesion/vuesion/pull/159)) ([57a2b148](https://github.com/vuesion/vuesion/commit/57a2b1487dc0cd0fac642b4160665f5caf60c0aa))
- **scripts:** add script to update the vue-starter ([#152](https://github.com/vuesion/vuesion/pull/152)) ([f5b53e32](https://github.com/vuesion/vuesion/commit/f5b53e32981a121ff05910a272fb6ce0f31f6122))
- add runtime config ([#150](https://github.com/vuesion/vuesion/pull/150)) ([c383f1b1](https://github.com/vuesion/vuesion/commit/c383f1b1c616abeb8995424983d336993ef9a3e6))
- **vue-modal:** add smooth scrolling ([c17dbacf](https://github.com/vuesion/vuesion/commit/c17dbacfe80eba77a7703ad9fb0381d71fd84db0))

##### Bug Fixes

- **performance:** increase http cache time ([f56c0f8e](https://github.com/vuesion/vuesion/commit/f56c0f8e260d88b48e0df2690cabd3eba6052146))
- **vue-calendar:** don't display empty days as currentDay ([#158](https://github.com/vuesion/vuesion/pull/158)) ([2663cc82](https://github.com/vuesion/vuesion/commit/2663cc82d4f3909e87f51d295ce96d2a07874c2e))
- **vue-nav-bar:** close nav bar on logo click ([#161](https://github.com/vuesion/vuesion/pull/161)) ([e3bb2563](https://github.com/vuesion/vuesion/commit/e3bb256331eb1364c2d12182ccc5e623fbf8fdec))

##### Refactors

- **http-service:** set store from outside to prevent circular deps ([#169](https://github.com/vuesion/vuesion/pull/169)) ([374f17f9](https://github.com/vuesion/vuesion/commit/374f17f920478444633211ae7b21376d27de9913))

## 1.0.0 (2018-05-31)

##### Chores

- update dependencies ([80f48fdf](https://github.com/vuesion/vuesion/commit/80f48fdfee97d0c5f5a7c124b13c8211aac5a2b5))
- update dependencies ([47a29c87](https://github.com/vuesion/vuesion/commit/47a29c8775c83890a92e596e5735f39af6f8c259))
- reformat webpack configs ([bf7730fb](https://github.com/vuesion/vuesion/commit/bf7730fb0d19cad62d7c7047d4f1951ad8cde996))
- add Dockerfile to dockerize the app ([e10c363d](https://github.com/vuesion/vuesion/commit/e10c363d0565b195da1cbd6a9ba8bf8881c18ae6))
- update dependencies ([83138a0d](https://github.com/vuesion/vuesion/commit/83138a0df564344f8aadd38cc8e773bc357d05ee))
- upgrade to vue-loader v15 ([#127](https://github.com/vuesion/vuesion/pull/127)) ([15dd9ebe](https://github.com/vuesion/vuesion/commit/15dd9ebef46eaeec0d80c8d6dc4504124daf5d52))
- update docs ([#121](https://github.com/vuesion/vuesion/pull/121)) ([42dfe250](https://github.com/vuesion/vuesion/commit/42dfe250101d47aaea34b3ee2509de8866070501))
- update dependencies ([#112](https://github.com/vuesion/vuesion/pull/112)) ([8aae9734](https://github.com/vuesion/vuesion/commit/8aae973413f46ca3eecfa1290fd1a5ec45abadda))
- update README.md ([#114](https://github.com/vuesion/vuesion/pull/114)) ([3106190d](https://github.com/vuesion/vuesion/commit/3106190dc179825a74eede3aebf1e7b79036ae53))
- update docs ([#96](https://github.com/vuesion/vuesion/pull/96)) ([0d6c6f75](https://github.com/vuesion/vuesion/commit/0d6c6f7539999cdaa7215024ecd0d1da1dab0724))
- update CONTRIBUTING.md ([b8f41ac6](https://github.com/vuesion/vuesion/commit/b8f41ac6e75473cabe8a9d2311e7085eef423f11))
- update dependencies ([6ced40f8](https://github.com/vuesion/vuesion/commit/6ced40f8fe71073efd22d4acf2a12c6b98ef8543))
- update dependencies ([#74](https://github.com/vuesion/vuesion/pull/74)) ([fc9ebb6e](https://github.com/vuesion/vuesion/commit/fc9ebb6e5975441138250ba2b8f849c471dfa171))
- reformat code ([a0981214](https://github.com/vuesion/vuesion/commit/a0981214dfb4592a82f2138e21895123fbb7ae5b))
- update dependencies ([fa97dd05](https://github.com/vuesion/vuesion/commit/fa97dd05762a2b96a1922758ddff993658828866))
- update dependencies ([2a40190a](https://github.com/vuesion/vuesion/commit/2a40190a4774de235d68840b643d70ef19a3a683))
- change slack button in README.md ([bb988fd8](https://github.com/vuesion/vuesion/commit/bb988fd87844d19f21f0d4d6e793b09f04e19178))
- add slack button to README.md ([3e45f752](https://github.com/vuesion/vuesion/commit/3e45f75260d49e72f67cecc3199af22b7af1d425))
- add tweet button to README.md ([4afef1ec](https://github.com/vuesion/vuesion/commit/4afef1ec89ffbc108f42182db3e3f18c2b8f15b1))
- add type definitions ([90c3adbb](https://github.com/vuesion/vuesion/commit/90c3adbb1f91b6adb5627d7e6a16d7bdaae65cc2))
- update dependencies ([e86b6cd6](https://github.com/vuesion/vuesion/commit/e86b6cd6a28b842db82bf58f786940e75578297a))
- optimize build ([aa92efd8](https://github.com/vuesion/vuesion/commit/aa92efd8994fcdb71283aca9ef47a4941b7adc56))
- update dependencies ([4067f405](https://github.com/vuesion/vuesion/commit/4067f40579c0a1cc7ec0084d0724b14f56c00a55))
- update README.md ([aaf6c709](https://github.com/vuesion/vuesion/commit/aaf6c709e5c613dd3af3661d6770f4b413f961f7))
- update docs ([37730879](https://github.com/vuesion/vuesion/commit/37730879d86e0de3d13014089896510f1a7c0b6c))
- update docs ([c2deba86](https://github.com/vuesion/vuesion/commit/c2deba867bb118a94cd82de55c97388c90bd2ac3))
- update dependencies ([#30](https://github.com/vuesion/vuesion/pull/30)) ([6909b49b](https://github.com/vuesion/vuesion/commit/6909b49b9d6b1d481c945a789798cc1f926a9b27))
- update dependencies ([70c3eb73](https://github.com/vuesion/vuesion/commit/70c3eb7326d8f4f00925add282c93ff363e25790))
- optimize build time ([ebb6f09b](https://github.com/vuesion/vuesion/commit/ebb6f09bb361ffebaf0bdfb27b5904563c293fee))
- add reference to anime.js to README.md ([a14b4d9e](https://github.com/vuesion/vuesion/commit/a14b4d9e582049967fcac74b3a6af5d56f1e335e))
- remove prestart script; add skip cleanup to travis.yml ([98c931b6](https://github.com/vuesion/vuesion/commit/98c931b65789b167aa337edec872b1847553c64d))
- remove postinstall script ([fe57afb0](https://github.com/vuesion/vuesion/commit/fe57afb0e1ff2b9eb46871e4211fecb22ff59bb6))
- specify engines in package.json ([bcfa8426](https://github.com/vuesion/vuesion/commit/bcfa8426a08b93251c907e95c05d142283e9b5b2))
- update README.md ([8ba669f5](https://github.com/vuesion/vuesion/commit/8ba669f54a8abc542aab2b1add70302218951cd2))
- update README.md ([ae67a651](https://github.com/vuesion/vuesion/commit/ae67a651397d45b7a4c43826ec28c3c7f4cc216c))
- update README.md ([4ec53c24](https://github.com/vuesion/vuesion/commit/4ec53c24f083c30feb291d35464f16bd333011c7))
- update README.md ([5c1766b4](https://github.com/vuesion/vuesion/commit/5c1766b4c005d004bebd8cf2ddd07548a9976609))
- change badge style in README.md; remove node v9 from CI ([b8ab87d1](https://github.com/vuesion/vuesion/commit/b8ab87d174d682d85b3765c4654a460b19876ff8))
- add codecov badge to README.md ([e0be2d1f](https://github.com/vuesion/vuesion/commit/e0be2d1f6e9a70c2af4fca2270e73cbe2587a5ef))
- add codecov and separate ci script ([8ad49737](https://github.com/vuesion/vuesion/commit/8ad49737500015bf94d5775090d5eac72c7484cc))
- add travis ci badge to README.md ([d91f507a](https://github.com/vuesion/vuesion/commit/d91f507a32bd9de2877fc2570c0d4aabfbd71e1d))
- add travis ci configuration ([f300ec09](https://github.com/vuesion/vuesion/commit/f300ec09e1e633124ad65df9d0f9c5c9a059d84b))
- update README.md ([92c312ec](https://github.com/vuesion/vuesion/commit/92c312ec95f56cc5f7348fa059a3d6c646d9731e))
- add CODE_OF_CONDUCT.md ([34ff6d95](https://github.com/vuesion/vuesion/commit/34ff6d9503aa2f8e79d9c30cbf2fbec8c50aa367))
- add LICENSE ([14e96734](https://github.com/vuesion/vuesion/commit/14e967341ff2175874f5b45051b6dedc9c69d427))
- **dependencies:** update vue test-utils ([5fc8690b](https://github.com/vuesion/vuesion/commit/5fc8690b23c553fd37da85382b2084a051e0eb9d))
- **README:**
  - add code-climate badge ([5b9a111f](https://github.com/vuesion/vuesion/commit/5b9a111fa2af4f4a48d2cf7f520febaa53d6c702))
  - add reference to heroku app ([#14](https://github.com/vuesion/vuesion/pull/14)) ([fc8d5c01](https://github.com/vuesion/vuesion/commit/fc8d5c0162e2702e33d04a1ad4f7775ae7ac3975))
- **build:** add externals to isomorphic config ([032b49ab](https://github.com/vuesion/vuesion/commit/032b49ab5e9e6637bf1e99f62d70ec3250194948))
- **ci:**
  - add heroku to .travis.yml ([26033c7d](https://github.com/vuesion/vuesion/commit/26033c7d65fd4e4e789ecad173aafa85643ec205))
  - remove --dev option from npm install ([fc41ae9e](https://github.com/vuesion/vuesion/commit/fc41ae9e0c0a6bc2385bcde499aa4cce1b368ab3))
- **webpack:** add bundle-analyzer; add magic comments ([ab679e1b](https://github.com/vuesion/vuesion/commit/ab679e1bfb4a20892e626dd77ceb0836e580f22b))

##### Documentation Changes

- check for typos and update style of writing ([#143](https://github.com/vuesion/vuesion/pull/143)) ([e11dfbbc](https://github.com/vuesion/vuesion/commit/e11dfbbc6689a2ac8f98c6aca114365b9d958fe6))
- add getting started guide and docs ([efdef9d6](https://github.com/vuesion/vuesion/commit/efdef9d6f06850eb9dd9cc49f70a365ee66ff39b))

##### New Features

- **dev:** reload express app on changes ([#136](https://github.com/vuesion/vuesion/pull/136)) ([adcb5329](https://github.com/vuesion/vuesion/commit/adcb5329c68da0e95c55de30397adb8e91acbcf5))
- add client-side error logging ([#128](https://github.com/vuesion/vuesion/pull/128)) ([18d82d60](https://github.com/vuesion/vuesion/commit/18d82d605aa05fc684ac946ed4b0a90a51d2ebec))
- proper error and 404 pages + SSR ([#122](https://github.com/vuesion/vuesion/pull/122)) ([3df9db55](https://github.com/vuesion/vuesion/commit/3df9db558823ee8707b0a4235d38b2718fa665cd))
- add support for SPA build ([#111](https://github.com/vuesion/vuesion/pull/111)) ([5385ca28](https://github.com/vuesion/vuesion/commit/5385ca289007ac4677a51b97aaa930461d7e85cd))
- add logging to express application ([#95](https://github.com/vuesion/vuesion/pull/95)) ([84eb04ad](https://github.com/vuesion/vuesion/commit/84eb04ad61cf6937cf8804bbb4ff24c0e411507b))
- add app config and make it accessible in vuex store ([#67](https://github.com/vuesion/vuesion/pull/67)) ([1e831923](https://github.com/vuesion/vuesion/commit/1e831923e73cea1ecdd0c8b83098d048368ed814))
- add required prop and \$attrs to all form elements ([22388f3f](https://github.com/vuesion/vuesion/commit/22388f3fa3c72228d2e10de95e19abc113669101))
- add box-sizing for all elements ([90813577](https://github.com/vuesion/vuesion/commit/908135776fb7e4a4e117fd13b061325aa4800428))
- add recommendations from checkbot.io ([eb227387](https://github.com/vuesion/vuesion/commit/eb2273877a6c03012ab2b2dba689adac2986df16))
- add storybook and shared components generator ([#56](https://github.com/vuesion/vuesion/pull/56)) ([9d04afab](https://github.com/vuesion/vuesion/commit/9d04afab4bdaa0d2f9c5f0d868a9a339d20c471e))
- load external stylesheets asynchronously ([2aaf8844](https://github.com/vuesion/vuesion/commit/2aaf88449ea52a8a3f61d10dbbb023bba8e2b6ce))
- redirect http traffic to https ([a3b229fa](https://github.com/vuesion/vuesion/commit/a3b229fad86f64d9c6eb5cb6aca49784bce2faec))
- **components:**
  - add example for form validation ([#126](https://github.com/vuesion/vuesion/pull/126)) ([68ed033f](https://github.com/vuesion/vuesion/commit/68ed033f3cc647675514c7497cedb455b93e4cf2))
  - add vue-autocomplete ([#97](https://github.com/vuesion/vuesion/pull/97)) ([ab40c579](https://github.com/vuesion/vuesion/commit/ab40c579b714133bf9abcf029c20d9337c878930))
  - add VueIcon ([#91](https://github.com/vuesion/vuesion/pull/91)) ([cc826883](https://github.com/vuesion/vuesion/commit/cc826883c2972157758775f5002804fc1f773454))
  - add VueGridRow to existing grid system ([#90](https://github.com/vuesion/vuesion/pull/90)) ([ee670f75](https://github.com/vuesion/vuesion/commit/ee670f75b49bf2783d2cf94df6007cc56329bad1))
  - add VueMarkdown ([88cc553c](https://github.com/vuesion/vuesion/commit/88cc553ce082ad178175e572006a173716ca2d9c))
  - add 'cssClass' property to all components ([72215a6f](https://github.com/vuesion/vuesion/commit/72215a6f6c51b73ce031e627fd7877010e9298c6))
  - add generic form with schema and validations ([2616151a](https://github.com/vuesion/vuesion/commit/2616151ac3976b57fa9718c47f21e93d034f65b3))
  - add notification stack ([dd495afe](https://github.com/vuesion/vuesion/commit/dd495afea5aec604dd01c06fef13fd0ba6a3a98d))
  - add calendar, date-picker, date-range-picker ([f4caedb7](https://github.com/vuesion/vuesion/commit/f4caedb743470cd3d8c2cc4864295d7e5e3fb83b))
  - add select ([19751a83](https://github.com/vuesion/vuesion/commit/19751a83db62574720c1423c696dc96636503ad4))
  - add pagination ([039d8e05](https://github.com/vuesion/vuesion/commit/039d8e055d568292aae7aa5e09d19552e02d301e))
  - add accordion ([6c55cc8b](https://github.com/vuesion/vuesion/commit/6c55cc8ba98eae71d0f38088401b599ce2912d20))
  - add RangeSlider ([#40](https://github.com/vuesion/vuesion/pull/40)) ([b844bee2](https://github.com/vuesion/vuesion/commit/b844bee2ef1ff9c0d3387368ed35647a68650854))
  - add tooltip ([#37](https://github.com/vuesion/vuesion/pull/37)) ([209d0da2](https://github.com/vuesion/vuesion/commit/209d0da2582c7d2e6632204ff6dcdfe41f33be44))
  - add checkbox / radio button ([#36](https://github.com/vuesion/vuesion/pull/36)) ([bed3bdd1](https://github.com/vuesion/vuesion/commit/bed3bdd1f242ec89b41747dc81a052d0f614d517))
  - add header/description to components page ([04550498](https://github.com/vuesion/vuesion/commit/045504985b0cda9d7b5e112481c5632cd08e089c))
  - add first version of tab component ([2af814b4](https://github.com/vuesion/vuesion/commit/2af814b42371f367c793a7dd8671df2bab6898f7))
  - add collapse, add modal, refine navbar ([#11](https://github.com/vuesion/vuesion/pull/11)) ([e4f59011](https://github.com/vuesion/vuesion/commit/e4f590119d61be4e3693f870ddadb456bc14d54e))
  - add initial set (button, grid, input, loader, navbar, panel) ([#8](https://github.com/vuesion/vuesion/pull/8)) ([f29eb60c](https://github.com/vuesion/vuesion/commit/f29eb60c84a825f75e1284649d82627ea3435f81))
- **vue-navbar:** add event listener for closing the navbar ([#109](https://github.com/vuesion/vuesion/pull/109)) ([c4afc26b](https://github.com/vuesion/vuesion/commit/c4afc26b20eda4d033b31ca2541c2481eb4cace4))
- **vue-router:** add scroll behaviour for hashes ([#65](https://github.com/vuesion/vuesion/pull/65)) ([78769621](https://github.com/vuesion/vuesion/commit/7876962104725ddb9c6bea4c1c6eeeabdbbafc1b))
- **VueButton:** add font awesome icon support ([#68](https://github.com/vuesion/vuesion/pull/68)) ([1ad535d7](https://github.com/vuesion/vuesion/commit/1ad535d7c62821bca2f8536926282b50a928e431))
- **services:** add HttpService ([afc5782f](https://github.com/vuesion/vuesion/commit/afc5782f0d6413280102dcdd674514a6b796ca96))
- **vuex-persist:** add 'beforePersist' hook ([dd558643](https://github.com/vuesion/vuesion/commit/dd55864334f28e16f5ce5d7133e558f8362dfc07))
- **VueForm:** handle dynamic slots ([45d63d70](https://github.com/vuesion/vuesion/commit/45d63d70c103925b59ab0d3763a02943abe82269))
- **i18n:**
  - support multi line comments in i18n magic comments ([bfdc4f8c](https://github.com/vuesion/vuesion/commit/bfdc4f8c2a26c2ed6f1d8fd84bf5ec5b3adc9564))
  - set defaultLang from acceptLanguage or cookie ([#33](https://github.com/vuesion/vuesion/pull/33)) ([b7eb7e02](https://github.com/vuesion/vuesion/commit/b7eb7e02fb97025776a8a2ae6d9d95595138d252))
  - add possibility to add default messages with magic comments ([6459d179](https://github.com/vuesion/vuesion/commit/6459d17952909864f10c26471d9280933807c80e))
  - add brazilian portuguese translations ([#26](https://github.com/vuesion/vuesion/pull/26)) ([20fc85a0](https://github.com/vuesion/vuesion/commit/20fc85a0c75f67cd2533c57e612c2bda79eff502))
  - add vue-i18n and language switch ([#6](https://github.com/vuesion/vuesion/pull/6)) ([1c3b1e74](https://github.com/vuesion/vuesion/commit/1c3b1e741c1115c34caefa5ba92c04c2f18ec8c8))
- **VueSelect:** add change event ([1e5f31ea](https://github.com/vuesion/vuesion/commit/1e5f31ea18910e38cf37b44a47c3d89c92fdeb9c))
- **vuex:**
  - add tests for actions, getters and mutations + generators ([e49a5c2e](https://github.com/vuesion/vuesion/commit/e49a5c2ecf69b96f106a155dc35cad672e006f72))
  - add vuex-persist + LocalStorage and Cookie persister ([#29](https://github.com/vuesion/vuesion/pull/29)) ([954f9a04](https://github.com/vuesion/vuesion/commit/954f9a0459453123c27885be2e4ea3766644afdb))
- **pwa:**
  - increase lighthouse score ([e00201bf](https://github.com/vuesion/vuesion/commit/e00201bf154d675e12b2732ff1e91e872ced4110))
  - add service worker support, refine accessibility ([#9](https://github.com/vuesion/vuesion/pull/9)) ([cda2d93b](https://github.com/vuesion/vuesion/commit/cda2d93b43bddf65d972e24651eaa1d71af6faeb))
- **css:** add postcss plugins ([70d48b4a](https://github.com/vuesion/vuesion/commit/70d48b4a9e477d9995e510dad3350d06610517b6))
- **test:** add basic e2e test setup with cypress.io ([d06d9e79](https://github.com/vuesion/vuesion/commit/d06d9e79193afb1a44ec02ece949776f179ae50e))
- **scripts:** add extract-i18n-messages ([e9c660b7](https://github.com/vuesion/vuesion/commit/e9c660b72f2efd3c133104954ce7bf7af813162f))
- **home:**
  - add features and quick start guide ([773ca4f6](https://github.com/vuesion/vuesion/commit/773ca4f66318732b6eb5b56c4558b81b5ba39375))
  - add SEO information ([34137b59](https://github.com/vuesion/vuesion/commit/34137b596e0505a06838f930c2ec8b3dde0f97d5))
  - add back link to github ([fbd588eb](https://github.com/vuesion/vuesion/commit/fbd588eb9584e9afb187965df5e51afccfc60f03))
  - make stage responsive ([dc5d0843](https://github.com/vuesion/vuesion/commit/dc5d0843d43ca87f72cb31182c2b5dc8d8b101d9))
- **PWA:** refine sw.ts; remove http caching for rendered HTML ([574101ba](https://github.com/vuesion/vuesion/commit/574101ba70fe5496ce3a43ab64cdec01afd3c83f))
- **SEO:** add vue-meta to manipulate html-header tags and attributes ([#10](https://github.com/vuesion/vuesion/pull/10)) ([1d9b6872](https://github.com/vuesion/vuesion/commit/1d9b687232437d4c1575740bb4b738c201388482))

##### Bug Fixes

- **vue-autocomplete:** trigger change event on every click ([54f37977](https://github.com/vuesion/vuesion/commit/54f37977c3c26a8afb012d08f2b572ea17055a07))
- **vue-modal:** make content scrollable ([c6d19fe4](https://github.com/vuesion/vuesion/commit/c6d19fe4dd962e3a4c3533f60236953e8cefb156))
- **generators:** change first parameter of registerModule to array ([#131](https://github.com/vuesion/vuesion/pull/131)) ([1fa3fa2d](https://github.com/vuesion/vuesion/commit/1fa3fa2dd70b22b7b1bdb90fc07d70a4af4408be))
- **vue-select:** remove browser default styles ([cb8ab473](https://github.com/vuesion/vuesion/commit/cb8ab4738f28482cfc9433ee52b858354b536b0b))
- **build:**
  - change asset paths in SPA webpack config ([09ec7066](https://github.com/vuesion/vuesion/commit/09ec7066d4068a238a4236e2067032838f58821c))
  - replace process.env.NODE_ENV instead of process.env ([1ee7327e](https://github.com/vuesion/vuesion/commit/1ee7327e702f51de7413c2ae0ff96b3aa1c9c3f5))
- add production config ([9dd9ba5f](https://github.com/vuesion/vuesion/commit/9dd9ba5f071e18bb8eaff129579447744d4fb56b))
- merge update dependencies ([b65c9dbd](https://github.com/vuesion/vuesion/commit/b65c9dbda1118396eda248b9b3c006a46b5a36aa))
- spacings in Stage and VueFooter ([25146407](https://github.com/vuesion/vuesion/commit/25146407620891488ef1357d1481856f6205cb0f))
- replace FA js with FA font to prevent DOM diffs between server/client ([f35cd194](https://github.com/vuesion/vuesion/commit/f35cd194359bff0d5f8d26c8b1757bdd91b059d2))
- **pwa:** add manifest.json to index.html ([6a13c0df](https://github.com/vuesion/vuesion/commit/6a13c0df5cd2fd5ec54002725088fb6b991fc4bc))
- **vue-grid:** add padding for mobile phones ([3ab54501](https://github.com/vuesion/vuesion/commit/3ab54501006ec5895e7017a194a7269f77b9c68c))
- **vue-calendar:** handle negative paddingLeft ([89b01cf0](https://github.com/vuesion/vuesion/commit/89b01cf093bb5c80c9c2c384667c02fb5829144e))
- **i18n:**
  - rename en-EN to en-US ([588eb1be](https://github.com/vuesion/vuesion/commit/588eb1be9dfa465068fae3f2d98a12105549f54a))
  - set correct default-lang ([b4d0b917](https://github.com/vuesion/vuesion/commit/b4d0b917ccb8dd3fef097f50929f52d0b8c351e7))
  - set defaultLang from acceptLang if no defaultLang is specified in cookies ([341d9756](https://github.com/vuesion/vuesion/commit/341d9756c8bdf2bdc79c9189eb7977255a822565))
- **http-service:** append Auth header only if no Auth header is in cfg ([8284aefa](https://github.com/vuesion/vuesion/commit/8284aefa0aaeeffaacd6cf7bb6ad4f02097bad23))
- **ci:** upload code coverage report ([d3535ec6](https://github.com/vuesion/vuesion/commit/d3535ec67f2be82c9ff4a763e7d03982a5c60810))
- **VueMarkdown:** trim text before rendering ([#87](https://github.com/vuesion/vuesion/pull/87)) ([89496d87](https://github.com/vuesion/vuesion/commit/89496d87b3ae6664482ae33104d2beb1cc36a4d9))
- **lint:** trailing comma check ([#76](https://github.com/vuesion/vuesion/pull/76)) ([728e58ce](https://github.com/vuesion/vuesion/commit/728e58ced902b5c3b2acd52e786366e6bc7465db))
- **VueCalendar:** set correct start date ([58c2ab96](https://github.com/vuesion/vuesion/commit/58c2ab96ab39a9b98ee55f41d4b8c2169651c071))
- **coverage:** remove HttpService from coverage ([32b08f07](https://github.com/vuesion/vuesion/commit/32b08f07bb9ca5533c0b6f16916424e43db5cfff))
- **tools:**
  - escape double quotes in extract-i18n-messages ([d6c2c7c9](https://github.com/vuesion/vuesion/commit/d6c2c7c9d7f99e107484a1b346a493e089c4299e))
  - reformat generator blueprints ([a87c1828](https://github.com/vuesion/vuesion/commit/a87c1828633d2e75bdbba6fb46c322244b2a531c))
- **services:** remove default base url from HttpService ([2ce77fab](https://github.com/vuesion/vuesion/commit/2ce77fab34906827d7778c3bf29210427495c3a3))
- **components:**
  - fix typo ([0c4531e3](https://github.com/vuesion/vuesion/commit/0c4531e363a8798a0d9e3c0af127c02ebe016c68))
  - optimize for touch devices ([8da250d5](https://github.com/vuesion/vuesion/commit/8da250d57537becb230054527b858c98647079f1))
- **VueForm:** add div around dynamic components ([a3b1537d](https://github.com/vuesion/vuesion/commit/a3b1537df561c1eceff96eede35168e659788ec7))
- **VueSelect:** rename VueSelectOption to IVueSelectOption ([f95e770b](https://github.com/vuesion/vuesion/commit/f95e770b32a3d8f66321a4c61d29ca35e3226885))
- **extract-i18n-messages:** escape line-breaks, support html-tags ([324d1e65](https://github.com/vuesion/vuesion/commit/324d1e6521a2142a1a01e3fa6a8e08d891586e53))
- **pagination:** add cursor pointer for non touch devices ([48d5fc8d](https://github.com/vuesion/vuesion/commit/48d5fc8dd95b4dba55b58b0f003382de3d9fbb70))
- **VueSlider:** remove unnecessary branches, better mobile ux ([4b72baf6](https://github.com/vuesion/vuesion/commit/4b72baf6810682951362f090354335ff95f29968))
- **css:**
  - cssnano - remove default preset ([d13e92b8](https://github.com/vuesion/vuesion/commit/d13e92b8c198ae5ee446c8c5f32a39e5ed67d663))
  - disable z-index optimisation ([3e55a340](https://github.com/vuesion/vuesion/commit/3e55a340f05dda5167357a241486331c6088fffb))
- **scripts:** make extract-i18n-messages working again ([22467701](https://github.com/vuesion/vuesion/commit/2246770193e6490322c10818bb38ee47b5695d01))
- **Stage:** move text up for mobile because of ios safari ([b3e03e59](https://github.com/vuesion/vuesion/commit/b3e03e5964232ecb713f3730321d6e2271625d68))
- **counter:** add top margin ([e10888eb](https://github.com/vuesion/vuesion/commit/e10888eb2a361b4f660bda6d0d8fff48239b3b06))
- **mobile:** add additional touchstart events ([60420c32](https://github.com/vuesion/vuesion/commit/60420c3209d9c6ae687b46834640197cb2dcea04))
- **grid:** correct rendering of filled grit-items ([2ffc28fb](https://github.com/vuesion/vuesion/commit/2ffc28fb695f208017f8623fb775c35a7505c25d))

##### Refactors

- add some final touches for readability ([100e7826](https://github.com/vuesion/vuesion/commit/100e78268bcc53263a4999c2f35147bb1ce2c241))
- reduce complexity ([5076dc4d](https://github.com/vuesion/vuesion/commit/5076dc4d281730bd7827a637ed3041de87cfa5a9))
- move EventBus to shared/services ([5ea1a272](https://github.com/vuesion/vuesion/commit/5ea1a27243d3c75eeb088c50ea6012f05be11a21))
- move scripts/generators to ./tools, use tsc instead of webpack ([#32](https://github.com/vuesion/vuesion/pull/32)) ([7affc927](https://github.com/vuesion/vuesion/commit/7affc927b9b3f4d06756efb8a0a0e53e80dd21c5))
- **app-config:** move AppConfig from server utils to app/config ([c6873c3d](https://github.com/vuesion/vuesion/commit/c6873c3d4b860dd1426512901ae600e851a026b8))
- **components:** add storybook; remove form; add badge ([#123](https://github.com/vuesion/vuesion/pull/123)) ([c6eea020](https://github.com/vuesion/vuesion/commit/c6eea020b41fd05398c3e882d4abc4774f068cce))
- **vuex-persist:**
  - reduce complexity ([2a5aa819](https://github.com/vuesion/vuesion/commit/2a5aa81975239deef6417567a8a70b1e45c8e285))
  - rename whitelist to modules; remove ssr code from client bundle ([a8b0b766](https://github.com/vuesion/vuesion/commit/a8b0b7668469503122d7ed630fa4b38e9305c345))
- **vuex:**
  - use vuex modules by default ([#115](https://github.com/vuesion/vuesion/pull/115)) ([3626cc0b](https://github.com/vuesion/vuesion/commit/3626cc0be0fdb746b5562dcbb49a3711f48ff605))
  - add types for vuex ([a2984c87](https://github.com/vuesion/vuesion/commit/a2984c87672fd3682621b3132bcb4e961b28089b))
- **scripts:** make i18n script testable ([ff6f7e5d](https://github.com/vuesion/vuesion/commit/ff6f7e5dc96070ce8430eb8d880a2308e6474748))
- **i18n:**
  - remove messages from bundle ([44d492b9](https://github.com/vuesion/vuesion/commit/44d492b983afff1f70b50a0369e80449ed243577))
  - change language codes to ISO standard ([775fde72](https://github.com/vuesion/vuesion/commit/775fde7242aac3346fe1ef7254bce84f26d61e8f))
- **server:**
  - split up index.ts ([#106](https://github.com/vuesion/vuesion/pull/106)) ([3dae04e0](https://github.com/vuesion/vuesion/commit/3dae04e09248913cd42fe27ca15f38a15cd2a2cd))
  - change relative paths to dist folder ([a5d7fd08](https://github.com/vuesion/vuesion/commit/a5d7fd0878538f6f25e8d82eaa9f87258d1dccdd))
- **http-service:** make it work for i18n; update fresh token logic ([213170b4](https://github.com/vuesion/vuesion/commit/213170b413a30a2b63327231a2b0de85ddaf140f))
- **storybook:** use @typings instead of custom types ([48cbe454](https://github.com/vuesion/vuesion/commit/48cbe4544479c6a45ea71e21f8d095e7beb634bf))
- **VueCalendar:** move scss variables to \_variables.scss ([586f9afd](https://github.com/vuesion/vuesion/commit/586f9afdfbeabc46bf235f04c896d5e62264c5be))
- **tooltip:** split out scss variables ([b62fa49a](https://github.com/vuesion/vuesion/commit/b62fa49afe14f134e5f39061d2a46724dd114923))
- **scss:** add mixins, restructure code ([#31](https://github.com/vuesion/vuesion/pull/31)) ([cc38cffd](https://github.com/vuesion/vuesion/commit/cc38cffd886db1ede4fc5552ee0b488b946ee4c8))
- **typescript:** replace type any with type definitions where possible ([6f31bd9b](https://github.com/vuesion/vuesion/commit/6f31bd9b2326af76bb1f6f124d75429d7cdd9757))

##### Tests

- **VueCalendar:** fix tests ([c32fc8a3](https://github.com/vuesion/vuesion/commit/c32fc8a3dc56fe55217fb06279c95d8cb60b1728))
