### 1.4.0 (2018-10-27)

##### Chores

*  add new contributors ([6a2c7b9b](https://github.com/devCrossNet/vue-starter/commit/6a2c7b9bfd48eaf418f4352e4b6fa8a54f8eaa0a))

##### Documentation Changes

*  update quick start / install ([997837cb](https://github.com/devCrossNet/vue-starter/commit/997837cb31063649e78786d388ab74e0cef7e707))
*  fix cleanup docs ([#267](https://github.com/devCrossNet/vue-starter/pull/267)) ([b0d881e4](https://github.com/devCrossNet/vue-starter/commit/b0d881e439a448737e30b91bdf13e14f581f6976))
* **config:**  fix spelling mistake ([#255](https://github.com/devCrossNet/vue-starter/pull/255)) ([4e6dfc2c](https://github.com/devCrossNet/vue-starter/commit/4e6dfc2c867b344817c805d0a7a2582876b5b0db))

##### New Features

* **vue-input:**  add auto-focus for SPA's ([05996b33](https://github.com/devCrossNet/vue-starter/commit/05996b338bafd966130d82a32980da26022267d2))
* **vue-tooltip:**  add property to programmatically suppress tooltip ([#263](https://github.com/devCrossNet/vue-starter/pull/263)) ([d625656c](https://github.com/devCrossNet/vue-starter/commit/d625656cdeb5761a8434cccb5852bca44ad88066))
* **vue-data-table:**  add row to scoped slot; add sortable, fitContent ([#256](https://github.com/devCrossNet/vue-starter/pull/256)) ([fb7ed420](https://github.com/devCrossNet/vue-starter/commit/fb7ed42041f401c6bb68dc586fcff6ae180db3a0))
* **i18n:**  update portuguese translations ([#253](https://github.com/devCrossNet/vue-starter/pull/253)) ([38655445](https://github.com/devCrossNet/vue-starter/commit/38655445997e50ffcf3758d2b52186286d9cb05f))

##### Bug Fixes

*  module typings ([#271](https://github.com/devCrossNet/vue-starter/pull/271)) ([efe654b3](https://github.com/devCrossNet/vue-starter/commit/efe654b3dca89f2f5c679b8031e85e4683ec4125))
*  remove performance budget in dev-mode ([a58728e0](https://github.com/devCrossNet/vue-starter/commit/a58728e0d203478f28a3c738931d9dd5327aaccd))
*  remove empty img alt tag rules ([f5ad9605](https://github.com/devCrossNet/vue-starter/commit/f5ad960518f72978b8b8732f5c40ff3b5bb8aa24))
* **typings:**  add rootState to ActionContext ([#262](https://github.com/devCrossNet/vue-starter/pull/262)) ([22dcbb36](https://github.com/devCrossNet/vue-starter/commit/22dcbb36bd8c02bc34ef2fd62714f912ce12add0))

##### Performance Improvements

*  add webpack performance budget ([ee944cf2](https://github.com/devCrossNet/vue-starter/commit/ee944cf2f31fb66271e8c4a865343821fa40dc3e))

##### Tests

* **vuex-persist:**  replace localStorage with mock implementation ([#272](https://github.com/devCrossNet/vue-starter/pull/272)) ([0c129940](https://github.com/devCrossNet/vue-starter/commit/0c129940908356cf1b58f3adfe6a652d142834c2))

### 1.3.0 (2018-10-06)

##### Chores

*  add new contributors ([7c42780a](https://github.com/devCrossNet/vue-starter/commit/7c42780abc7b629144d68365989b095cb958f2bf))
*  catch errors for prefetch in a unified way ([#230](https://github.com/devCrossNet/vue-starter/pull/230)) ([20f959fc](https://github.com/devCrossNet/vue-starter/commit/20f959fc2d530bdb5dc8d38343f3dab87381e01a))
*  improve 404 page wording ([#228](https://github.com/devCrossNet/vue-starter/pull/228)) ([937e1151](https://github.com/devCrossNet/vue-starter/commit/937e1151df7ad6c556be10d5df7c08a14a2ca00a))

##### Documentation Changes

* **readme:**  add issue-hunt and all-contributors ([#233](https://github.com/devCrossNet/vue-starter/pull/233)) ([2d84ee50](https://github.com/devCrossNet/vue-starter/commit/2d84ee50aca76913b14b85b99922bdacc6d2b50d))
*  add missing snipped to 3rd party integration guide ([12b18047](https://github.com/devCrossNet/vue-starter/commit/12b18047c9854c08568b7dec7e04f3ce60d97f48))

##### New Features

* **vue-tab-group:**  add is-active property to pre-select tab-item ([#248](https://github.com/devCrossNet/vue-starter/pull/248)) ([0f5f2316](https://github.com/devCrossNet/vue-starter/commit/0f5f23168c4aa43d9ceba1dafb372c2b285ba8c6))
* **vue-modal:**  emit close event on ESC press ([#247](https://github.com/devCrossNet/vue-starter/pull/247)) ([b38c8401](https://github.com/devCrossNet/vue-starter/commit/b38c84018c70307f41249c7aa042413a88a4603d))
* **components:**  add Breadcrumb ([#234](https://github.com/devCrossNet/vue-starter/pull/234)) ([ac425a0d](https://github.com/devCrossNet/vue-starter/commit/ac425a0d4db0ad6d0a09855b6614e680d50406dd))
*  don't change route on 404 ([#229](https://github.com/devCrossNet/vue-starter/pull/229)) ([d00dabb2](https://github.com/devCrossNet/vue-starter/commit/d00dabb2e94e7632a347064632fc28ef3d5f70c9))

##### Refactors

*  improve test setup for connected components ([#246](https://github.com/devCrossNet/vue-starter/pull/246)) ([115d5fad](https://github.com/devCrossNet/vue-starter/commit/115d5fadfa08997e92b894017ff889a6ac36f3af))
*  add return type for prefetch ([#243](https://github.com/devCrossNet/vue-starter/pull/243)) ([1c15c1bf](https://github.com/devCrossNet/vue-starter/commit/1c15c1bf2ab7143bbd966c66fc6e600e18970852))
* **dev:**  add type checking and linting ([#238](https://github.com/devCrossNet/vue-starter/pull/238)) ([0db3242e](https://github.com/devCrossNet/vue-starter/commit/0db3242efc8fbd32d960878ef29f811400c54c9a))

##### Tests

* **vue-select:**  add test for disabled property ([#239](https://github.com/devCrossNet/vue-starter/pull/239)) ([907dfd22](https://github.com/devCrossNet/vue-starter/commit/907dfd22275baa3bc91cac8b2cca52985c0bea16))

#### 1.2.2 (2018-09-13)

##### Chores

*  update dependencies ([#224](https://github.com/devCrossNet/vue-starter/pull/224)) ([b5dba93b](https://github.com/devCrossNet/vue-starter/commit/b5dba93b2ab068f9db37ac20b5a76f2791f8d637))

##### Documentation Changes

*  add progressive-web-app section ([#227](https://github.com/devCrossNet/vue-starter/pull/227)) ([3387b957](https://github.com/devCrossNet/vue-starter/commit/3387b9575c48c43aca2abcbf2342b7975871c6d4))
*  add guide to integrate with 3rd party UI libraries ([#225](https://github.com/devCrossNet/vue-starter/pull/225)) ([8b3357bc](https://github.com/devCrossNet/vue-starter/commit/8b3357bc197e0070a5f219a8b1b21f3e79f6bb37))
*  add a recommended architecture section ([#222](https://github.com/devCrossNet/vue-starter/pull/222)) ([b7b575b4](https://github.com/devCrossNet/vue-starter/commit/b7b575b425ec1039c84bc02e3cb53766b69db7f2))
*  add tutorial how to prefetch data on the server side ([#221](https://github.com/devCrossNet/vue-starter/pull/221)) ([9b162bb3](https://github.com/devCrossNet/vue-starter/commit/9b162bb369e7185cc9687492cbe5b66ff831fec2))

##### Bug Fixes

*  dockerfile ([#215](https://github.com/devCrossNet/vue-starter/pull/215)) ([fb3b908b](https://github.com/devCrossNet/vue-starter/commit/fb3b908bc0aacad2c843e566a93634d4287e4f63))

##### Performance Improvements

*  optimize Dockerfile ([d0348a5f](https://github.com/devCrossNet/vue-starter/commit/d0348a5f1968510158f38c2cc61d66fe34ce4c13))

#### 1.2.1 (2018-08-16)

##### Chores

*  update issue templates ([4d52e7ff](https://github.com/devCrossNet/vue-starter/commit/4d52e7ffee6972ca5f291daca948ce16110d360b))

##### Documentation Changes

* **zh-cn:**  add redirects.md ([#206](https://github.com/devCrossNet/vue-starter/pull/206)) ([56490aa3](https://github.com/devCrossNet/vue-starter/commit/56490aa35d6a0a23b3ea073ecdf66cb6d773bcb2))

##### Bug Fixes

*  update engines to match README ([#209](https://github.com/devCrossNet/vue-starter/pull/209)) ([2a139fd9](https://github.com/devCrossNet/vue-starter/commit/2a139fd9d6976ae5ef3277dafca4a5dfed37c9d4))

### 1.2.0 (2018-08-04)

##### Documentation Changes

*  improve localisation quality for zh-cn ([#202](https://github.com/devCrossNet/vue-starter/pull/202)) ([39c57ed0](https://github.com/devCrossNet/vue-starter/commit/39c57ed031302cd53b9ec2c29a796d5020c2d3ba))

##### New Features

*  redirect from route guards ([#204](https://github.com/devCrossNet/vue-starter/pull/204)) ([a05def33](https://github.com/devCrossNet/vue-starter/commit/a05def33cfbb81bf69c40eedd0f6ddc563fa2387))
*  add programmatic server side redirect ([#201](https://github.com/devCrossNet/vue-starter/pull/201)) ([ea3afe3a](https://github.com/devCrossNet/vue-starter/commit/ea3afe3af80534d662a366174190ddfad76f583c))
*  add server-side redirect ([#199](https://github.com/devCrossNet/vue-starter/pull/199)) ([9c036f73](https://github.com/devCrossNet/vue-starter/commit/9c036f737ae1b39ba00bb2db97f8b7c10483d66a))
*  replace font-awesome with SVG's ([#180](https://github.com/devCrossNet/vue-starter/pull/180)) ([da9422fb](https://github.com/devCrossNet/vue-starter/commit/da9422fbc3f8c59c53f51cdc7dcc1be886fcce9f))
* **components:**
  *  add navigation-progress ([#186](https://github.com/devCrossNet/vue-starter/pull/186)) ([ab74de66](https://github.com/devCrossNet/vue-starter/commit/ab74de664cc95a7fd4493f61352e6f54e185ed7a))
  *  add cookie consent ([#179](https://github.com/devCrossNet/vue-starter/pull/179)) ([a30fad4c](https://github.com/devCrossNet/vue-starter/commit/a30fad4cee871a58cc59f6e1e042825459ef1092))

##### Bug Fixes

* **vue-modal:**  change overlay event listener for Firefox ([#205](https://github.com/devCrossNet/vue-starter/pull/205)) ([678954ad](https://github.com/devCrossNet/vue-starter/commit/678954adf2646ec4d62fd7e8b0e962327e5e10d2))

##### Refactors

* **routes:**  simplify error-handling code ([#187](https://github.com/devCrossNet/vue-starter/pull/187)) ([a24d0961](https://github.com/devCrossNet/vue-starter/commit/a24d0961385ef96175a76f898a63f4f8a6ccf2e6))
* **vuex:**  change default-state object to a factory function ([#183](https://github.com/devCrossNet/vue-starter/pull/183)) ([66d31fb7](https://github.com/devCrossNet/vue-starter/commit/66d31fb7193d2234d1a2755e4a6f71b935b1f8d8))

##### Tests

* **e2e:**  add 404 HTTP status integration test ([#200](https://github.com/devCrossNet/vue-starter/pull/200)) ([c65619ae](https://github.com/devCrossNet/vue-starter/commit/c65619ae3bfcfc75cbc30c926d75f06b55448af8))

#### 1.1.4 (2018-07-25)

##### Chores

*  remove language translations ([79915ed1](https://github.com/devCrossNet/vue-starter/commit/79915ed19813c5b82897c563b4eaea584ff3527a))
*  add new heroku api key ([7dcb8d12](https://github.com/devCrossNet/vue-starter/commit/7dcb8d126efbb51d5bfcc9d1b714884bb75c297f))

##### Documentation Changes

*  localization for zh-cn ([#190](https://github.com/devCrossNet/vue-starter/pull/190)) ([ebc70a53](https://github.com/devCrossNet/vue-starter/commit/ebc70a53a5c4c8d1ac9c6a7e354227033b46bd86))

##### Bug Fixes

* **build:**  don't use app config in spa build ([ec14fa06](https://github.com/devCrossNet/vue-starter/commit/ec14fa065488b3e98c71465594cc26d34c9e438b))

#### 1.1.3 (2018-07-24)

##### Bug Fixes

*  proper 404 page ([#189](https://github.com/devCrossNet/vue-starter/pull/189)) ([a7bac441](https://github.com/devCrossNet/vue-starter/commit/a7bac4417e38d06eb90064cd5fab8fee38fb4b78))

#### 1.1.2 (2018-07-14)

##### Bug Fixes

* **server-utils:**  add string interpolation to logger ([7e5a930d](https://github.com/devCrossNet/vue-starter/commit/7e5a930ddde09e8b2b4b7b2ec4eb8c9ea9b8b40e))

#### 1.1.1 (2018-07-07)

##### Bug Fixes

* **update-script:**  remove .update.json and winston, fix folder creation ([6890ddca](https://github.com/devCrossNet/vue-starter/commit/6890ddca69199afede37bd64ee0d5c65578c3b75))

### 1.1.0 (2018-06-30)

##### Chores

*  update dependencies ([#176](https://github.com/devCrossNet/vue-starter/pull/176)) ([cf3a10d7](https://github.com/devCrossNet/vue-starter/commit/cf3a10d78ff53929d75f71503010942943604c30))
*  update contributing guidelines ([fdc2fee3](https://github.com/devCrossNet/vue-starter/commit/fdc2fee3f3b3062f45daba7bdf4189745bb96f8f))
*  add version to README.md ([b2ae228a](https://github.com/devCrossNet/vue-starter/commit/b2ae228a7d08f2b3b1d634da75b30f1975549be7))
* **http-service:**  remove default authorization header ([#156](https://github.com/devCrossNet/vue-starter/pull/156)) ([3d057535](https://github.com/devCrossNet/vue-starter/commit/3d05753500f45d0482d37c84e82f35b39b71c1b7))

##### Documentation Changes

* **cli:**  add hint for paths in names ([#168](https://github.com/devCrossNet/vue-starter/pull/168)) ([a66dfffe](https://github.com/devCrossNet/vue-starter/commit/a66dfffe53c3da62cc32c248cd78d4a7d8f7f4c3))
* **contributing:**  add "chore" to list of commit message types ([#157](https://github.com/devCrossNet/vue-starter/pull/157)) ([24b6be90](https://github.com/devCrossNet/vue-starter/commit/24b6be90ecf064be1a3165eaaefd27489b274900))
*  improve wording ([#154](https://github.com/devCrossNet/vue-starter/pull/154)) ([752b946e](https://github.com/devCrossNet/vue-starter/commit/752b946ec232f93777038a28de6e1dc67b43e401))

##### New Features

* **vue-pagination:**  add keyboard navigation ([dc025687](https://github.com/devCrossNet/vue-starter/commit/dc02568782ac39ed8311e11b0c0b54ff427fc3af))
* **components:**
  *  add toggle ([#175](https://github.com/devCrossNet/vue-starter/pull/175)) ([43e0b80e](https://github.com/devCrossNet/vue-starter/commit/43e0b80e388aacc56aa78f371e918f84573e39d9))
  *  add data-table ([#167](https://github.com/devCrossNet/vue-starter/pull/167)) ([05267b4d](https://github.com/devCrossNet/vue-starter/commit/05267b4dd77bb2a564c3ac32f91c703956b3bb24))
  *  add carousel ([#166](https://github.com/devCrossNet/vue-starter/pull/166)) ([bb12ac04](https://github.com/devCrossNet/vue-starter/commit/bb12ac042573c02ea76d3a637b496c47d8fda050))
  *  add text truncate component ([#165](https://github.com/devCrossNet/vue-starter/pull/165)) ([27a69d02](https://github.com/devCrossNet/vue-starter/commit/27a69d02efb1972f3d746e8274b3df851e6f470a))
* **vue-slider:**  accessibility for keyboard users ([#160](https://github.com/devCrossNet/vue-starter/pull/160)) ([7735f9c4](https://github.com/devCrossNet/vue-starter/commit/7735f9c486c74d2d51fe4cbfba2ce13b3d0f004f))
* **vue-date-picker:**  open calendar on focus ([#159](https://github.com/devCrossNet/vue-starter/pull/159)) ([57a2b148](https://github.com/devCrossNet/vue-starter/commit/57a2b1487dc0cd0fac642b4160665f5caf60c0aa))
* **scripts:**  add script to update the vue-starter ([#152](https://github.com/devCrossNet/vue-starter/pull/152)) ([f5b53e32](https://github.com/devCrossNet/vue-starter/commit/f5b53e32981a121ff05910a272fb6ce0f31f6122))
*  add runtime config ([#150](https://github.com/devCrossNet/vue-starter/pull/150)) ([c383f1b1](https://github.com/devCrossNet/vue-starter/commit/c383f1b1c616abeb8995424983d336993ef9a3e6))
* **vue-modal:**  add smooth scrolling ([c17dbacf](https://github.com/devCrossNet/vue-starter/commit/c17dbacfe80eba77a7703ad9fb0381d71fd84db0))

##### Bug Fixes

* **performance:**  increase http cache time ([f56c0f8e](https://github.com/devCrossNet/vue-starter/commit/f56c0f8e260d88b48e0df2690cabd3eba6052146))
* **vue-calendar:**  don't display empty days as currentDay ([#158](https://github.com/devCrossNet/vue-starter/pull/158)) ([2663cc82](https://github.com/devCrossNet/vue-starter/commit/2663cc82d4f3909e87f51d295ce96d2a07874c2e))
* **vue-nav-bar:**  close nav bar on logo click ([#161](https://github.com/devCrossNet/vue-starter/pull/161)) ([e3bb2563](https://github.com/devCrossNet/vue-starter/commit/e3bb256331eb1364c2d12182ccc5e623fbf8fdec))

##### Refactors

* **http-service:**  set store from outside to prevent circular deps ([#169](https://github.com/devCrossNet/vue-starter/pull/169)) ([374f17f9](https://github.com/devCrossNet/vue-starter/commit/374f17f920478444633211ae7b21376d27de9913))

## 1.0.0 (2018-05-31)

##### Chores

*  update dependencies ([80f48fdf](https://github.com/devCrossNet/vue-starter/commit/80f48fdfee97d0c5f5a7c124b13c8211aac5a2b5))
*  update dependencies ([47a29c87](https://github.com/devCrossNet/vue-starter/commit/47a29c8775c83890a92e596e5735f39af6f8c259))
*  reformat webpack configs ([bf7730fb](https://github.com/devCrossNet/vue-starter/commit/bf7730fb0d19cad62d7c7047d4f1951ad8cde996))
*  add Dockerfile to dockerize the app ([e10c363d](https://github.com/devCrossNet/vue-starter/commit/e10c363d0565b195da1cbd6a9ba8bf8881c18ae6))
*  update dependencies ([83138a0d](https://github.com/devCrossNet/vue-starter/commit/83138a0df564344f8aadd38cc8e773bc357d05ee))
*  upgrade to vue-loader v15 ([#127](https://github.com/devCrossNet/vue-starter/pull/127)) ([15dd9ebe](https://github.com/devCrossNet/vue-starter/commit/15dd9ebef46eaeec0d80c8d6dc4504124daf5d52))
*  update docs ([#121](https://github.com/devCrossNet/vue-starter/pull/121)) ([42dfe250](https://github.com/devCrossNet/vue-starter/commit/42dfe250101d47aaea34b3ee2509de8866070501))
*  update dependencies ([#112](https://github.com/devCrossNet/vue-starter/pull/112)) ([8aae9734](https://github.com/devCrossNet/vue-starter/commit/8aae973413f46ca3eecfa1290fd1a5ec45abadda))
*  update README.md ([#114](https://github.com/devCrossNet/vue-starter/pull/114)) ([3106190d](https://github.com/devCrossNet/vue-starter/commit/3106190dc179825a74eede3aebf1e7b79036ae53))
*  update docs ([#96](https://github.com/devCrossNet/vue-starter/pull/96)) ([0d6c6f75](https://github.com/devCrossNet/vue-starter/commit/0d6c6f7539999cdaa7215024ecd0d1da1dab0724))
*  update CONTRIBUTING.md ([b8f41ac6](https://github.com/devCrossNet/vue-starter/commit/b8f41ac6e75473cabe8a9d2311e7085eef423f11))
*  update dependencies ([6ced40f8](https://github.com/devCrossNet/vue-starter/commit/6ced40f8fe71073efd22d4acf2a12c6b98ef8543))
*  update dependencies ([#74](https://github.com/devCrossNet/vue-starter/pull/74)) ([fc9ebb6e](https://github.com/devCrossNet/vue-starter/commit/fc9ebb6e5975441138250ba2b8f849c471dfa171))
*  reformat code ([a0981214](https://github.com/devCrossNet/vue-starter/commit/a0981214dfb4592a82f2138e21895123fbb7ae5b))
*  update dependencies ([fa97dd05](https://github.com/devCrossNet/vue-starter/commit/fa97dd05762a2b96a1922758ddff993658828866))
*  update dependencies ([2a40190a](https://github.com/devCrossNet/vue-starter/commit/2a40190a4774de235d68840b643d70ef19a3a683))
*  change slack button in README.md ([bb988fd8](https://github.com/devCrossNet/vue-starter/commit/bb988fd87844d19f21f0d4d6e793b09f04e19178))
*  add slack button to README.md ([3e45f752](https://github.com/devCrossNet/vue-starter/commit/3e45f75260d49e72f67cecc3199af22b7af1d425))
*  add tweet button to README.md ([4afef1ec](https://github.com/devCrossNet/vue-starter/commit/4afef1ec89ffbc108f42182db3e3f18c2b8f15b1))
*  add type definitions ([90c3adbb](https://github.com/devCrossNet/vue-starter/commit/90c3adbb1f91b6adb5627d7e6a16d7bdaae65cc2))
*  update dependencies ([e86b6cd6](https://github.com/devCrossNet/vue-starter/commit/e86b6cd6a28b842db82bf58f786940e75578297a))
*  optimize build ([aa92efd8](https://github.com/devCrossNet/vue-starter/commit/aa92efd8994fcdb71283aca9ef47a4941b7adc56))
*  update dependencies ([4067f405](https://github.com/devCrossNet/vue-starter/commit/4067f40579c0a1cc7ec0084d0724b14f56c00a55))
*  update README.md ([aaf6c709](https://github.com/devCrossNet/vue-starter/commit/aaf6c709e5c613dd3af3661d6770f4b413f961f7))
*  update docs ([37730879](https://github.com/devCrossNet/vue-starter/commit/37730879d86e0de3d13014089896510f1a7c0b6c))
*  update docs ([c2deba86](https://github.com/devCrossNet/vue-starter/commit/c2deba867bb118a94cd82de55c97388c90bd2ac3))
*  update dependencies ([#30](https://github.com/devCrossNet/vue-starter/pull/30)) ([6909b49b](https://github.com/devCrossNet/vue-starter/commit/6909b49b9d6b1d481c945a789798cc1f926a9b27))
*  update dependencies ([70c3eb73](https://github.com/devCrossNet/vue-starter/commit/70c3eb7326d8f4f00925add282c93ff363e25790))
*  optimize build time ([ebb6f09b](https://github.com/devCrossNet/vue-starter/commit/ebb6f09bb361ffebaf0bdfb27b5904563c293fee))
*  add reference to anime.js to README.md ([a14b4d9e](https://github.com/devCrossNet/vue-starter/commit/a14b4d9e582049967fcac74b3a6af5d56f1e335e))
*  remove prestart script; add skip cleanup to travis.yml ([98c931b6](https://github.com/devCrossNet/vue-starter/commit/98c931b65789b167aa337edec872b1847553c64d))
*  remove postinstall script ([fe57afb0](https://github.com/devCrossNet/vue-starter/commit/fe57afb0e1ff2b9eb46871e4211fecb22ff59bb6))
*  specify engines in package.json ([bcfa8426](https://github.com/devCrossNet/vue-starter/commit/bcfa8426a08b93251c907e95c05d142283e9b5b2))
*  update README.md ([8ba669f5](https://github.com/devCrossNet/vue-starter/commit/8ba669f54a8abc542aab2b1add70302218951cd2))
*  update README.md ([ae67a651](https://github.com/devCrossNet/vue-starter/commit/ae67a651397d45b7a4c43826ec28c3c7f4cc216c))
*  update README.md ([4ec53c24](https://github.com/devCrossNet/vue-starter/commit/4ec53c24f083c30feb291d35464f16bd333011c7))
*  update README.md ([5c1766b4](https://github.com/devCrossNet/vue-starter/commit/5c1766b4c005d004bebd8cf2ddd07548a9976609))
*  change badge style in README.md; remove node v9 from CI ([b8ab87d1](https://github.com/devCrossNet/vue-starter/commit/b8ab87d174d682d85b3765c4654a460b19876ff8))
*  add codecov badge to README.md ([e0be2d1f](https://github.com/devCrossNet/vue-starter/commit/e0be2d1f6e9a70c2af4fca2270e73cbe2587a5ef))
*  add codecov and separate ci script ([8ad49737](https://github.com/devCrossNet/vue-starter/commit/8ad49737500015bf94d5775090d5eac72c7484cc))
*  add travis ci badge to README.md ([d91f507a](https://github.com/devCrossNet/vue-starter/commit/d91f507a32bd9de2877fc2570c0d4aabfbd71e1d))
*  add travis ci configuration ([f300ec09](https://github.com/devCrossNet/vue-starter/commit/f300ec09e1e633124ad65df9d0f9c5c9a059d84b))
*  update README.md ([92c312ec](https://github.com/devCrossNet/vue-starter/commit/92c312ec95f56cc5f7348fa059a3d6c646d9731e))
*  add CODE_OF_CONDUCT.md ([34ff6d95](https://github.com/devCrossNet/vue-starter/commit/34ff6d9503aa2f8e79d9c30cbf2fbec8c50aa367))
*  add LICENSE ([14e96734](https://github.com/devCrossNet/vue-starter/commit/14e967341ff2175874f5b45051b6dedc9c69d427))
* **dependencies:**  update vue test-utils ([5fc8690b](https://github.com/devCrossNet/vue-starter/commit/5fc8690b23c553fd37da85382b2084a051e0eb9d))
* **README:**
  *  add code-climate badge ([5b9a111f](https://github.com/devCrossNet/vue-starter/commit/5b9a111fa2af4f4a48d2cf7f520febaa53d6c702))
  *  add reference to heroku app ([#14](https://github.com/devCrossNet/vue-starter/pull/14)) ([fc8d5c01](https://github.com/devCrossNet/vue-starter/commit/fc8d5c0162e2702e33d04a1ad4f7775ae7ac3975))
* **build:**  add externals to isomorphic config ([032b49ab](https://github.com/devCrossNet/vue-starter/commit/032b49ab5e9e6637bf1e99f62d70ec3250194948))
* **ci:**
  *  add heroku to .travis.yml ([26033c7d](https://github.com/devCrossNet/vue-starter/commit/26033c7d65fd4e4e789ecad173aafa85643ec205))
  *  remove --dev option from npm install ([fc41ae9e](https://github.com/devCrossNet/vue-starter/commit/fc41ae9e0c0a6bc2385bcde499aa4cce1b368ab3))
* **webpack:**  add bundle-analyzer; add magic comments ([ab679e1b](https://github.com/devCrossNet/vue-starter/commit/ab679e1bfb4a20892e626dd77ceb0836e580f22b))

##### Documentation Changes

*  check for typos and update style of writing ([#143](https://github.com/devCrossNet/vue-starter/pull/143)) ([e11dfbbc](https://github.com/devCrossNet/vue-starter/commit/e11dfbbc6689a2ac8f98c6aca114365b9d958fe6))
*  add getting started guide and docs ([efdef9d6](https://github.com/devCrossNet/vue-starter/commit/efdef9d6f06850eb9dd9cc49f70a365ee66ff39b))

##### New Features

* **dev:**  reload express app on changes ([#136](https://github.com/devCrossNet/vue-starter/pull/136)) ([adcb5329](https://github.com/devCrossNet/vue-starter/commit/adcb5329c68da0e95c55de30397adb8e91acbcf5))
*  add client-side error logging ([#128](https://github.com/devCrossNet/vue-starter/pull/128)) ([18d82d60](https://github.com/devCrossNet/vue-starter/commit/18d82d605aa05fc684ac946ed4b0a90a51d2ebec))
*  proper error and 404 pages + SSR ([#122](https://github.com/devCrossNet/vue-starter/pull/122)) ([3df9db55](https://github.com/devCrossNet/vue-starter/commit/3df9db558823ee8707b0a4235d38b2718fa665cd))
*  add support for SPA build ([#111](https://github.com/devCrossNet/vue-starter/pull/111)) ([5385ca28](https://github.com/devCrossNet/vue-starter/commit/5385ca289007ac4677a51b97aaa930461d7e85cd))
*  add logging to express application ([#95](https://github.com/devCrossNet/vue-starter/pull/95)) ([84eb04ad](https://github.com/devCrossNet/vue-starter/commit/84eb04ad61cf6937cf8804bbb4ff24c0e411507b))
*  add app config and make it accessible in vuex store ([#67](https://github.com/devCrossNet/vue-starter/pull/67)) ([1e831923](https://github.com/devCrossNet/vue-starter/commit/1e831923e73cea1ecdd0c8b83098d048368ed814))
*  add required prop and $attrs to all form elements ([22388f3f](https://github.com/devCrossNet/vue-starter/commit/22388f3fa3c72228d2e10de95e19abc113669101))
*  add box-sizing for all elements ([90813577](https://github.com/devCrossNet/vue-starter/commit/908135776fb7e4a4e117fd13b061325aa4800428))
*  add recommendations from checkbot.io ([eb227387](https://github.com/devCrossNet/vue-starter/commit/eb2273877a6c03012ab2b2dba689adac2986df16))
*  add storybook and shared components generator ([#56](https://github.com/devCrossNet/vue-starter/pull/56)) ([9d04afab](https://github.com/devCrossNet/vue-starter/commit/9d04afab4bdaa0d2f9c5f0d868a9a339d20c471e))
*  load external stylesheets asynchronously ([2aaf8844](https://github.com/devCrossNet/vue-starter/commit/2aaf88449ea52a8a3f61d10dbbb023bba8e2b6ce))
*  redirect http traffic to https ([a3b229fa](https://github.com/devCrossNet/vue-starter/commit/a3b229fad86f64d9c6eb5cb6aca49784bce2faec))
* **components:**
  *  add example for form validation ([#126](https://github.com/devCrossNet/vue-starter/pull/126)) ([68ed033f](https://github.com/devCrossNet/vue-starter/commit/68ed033f3cc647675514c7497cedb455b93e4cf2))
  *  add vue-autocomplete ([#97](https://github.com/devCrossNet/vue-starter/pull/97)) ([ab40c579](https://github.com/devCrossNet/vue-starter/commit/ab40c579b714133bf9abcf029c20d9337c878930))
  *  add VueIcon ([#91](https://github.com/devCrossNet/vue-starter/pull/91)) ([cc826883](https://github.com/devCrossNet/vue-starter/commit/cc826883c2972157758775f5002804fc1f773454))
  *  add VueGridRow to existing grid system ([#90](https://github.com/devCrossNet/vue-starter/pull/90)) ([ee670f75](https://github.com/devCrossNet/vue-starter/commit/ee670f75b49bf2783d2cf94df6007cc56329bad1))
  *  add VueMarkdown ([88cc553c](https://github.com/devCrossNet/vue-starter/commit/88cc553ce082ad178175e572006a173716ca2d9c))
  *  add 'cssClass' property to all components ([72215a6f](https://github.com/devCrossNet/vue-starter/commit/72215a6f6c51b73ce031e627fd7877010e9298c6))
  *  add generic form with schema and validations ([2616151a](https://github.com/devCrossNet/vue-starter/commit/2616151ac3976b57fa9718c47f21e93d034f65b3))
  *  add notification stack ([dd495afe](https://github.com/devCrossNet/vue-starter/commit/dd495afea5aec604dd01c06fef13fd0ba6a3a98d))
  *  add calendar, date-picker, date-range-picker ([f4caedb7](https://github.com/devCrossNet/vue-starter/commit/f4caedb743470cd3d8c2cc4864295d7e5e3fb83b))
  *  add select ([19751a83](https://github.com/devCrossNet/vue-starter/commit/19751a83db62574720c1423c696dc96636503ad4))
  *  add pagination ([039d8e05](https://github.com/devCrossNet/vue-starter/commit/039d8e055d568292aae7aa5e09d19552e02d301e))
  *  add accordion ([6c55cc8b](https://github.com/devCrossNet/vue-starter/commit/6c55cc8ba98eae71d0f38088401b599ce2912d20))
  *  add RangeSlider ([#40](https://github.com/devCrossNet/vue-starter/pull/40)) ([b844bee2](https://github.com/devCrossNet/vue-starter/commit/b844bee2ef1ff9c0d3387368ed35647a68650854))
  *  add tooltip ([#37](https://github.com/devCrossNet/vue-starter/pull/37)) ([209d0da2](https://github.com/devCrossNet/vue-starter/commit/209d0da2582c7d2e6632204ff6dcdfe41f33be44))
  *  add checkbox / radio button ([#36](https://github.com/devCrossNet/vue-starter/pull/36)) ([bed3bdd1](https://github.com/devCrossNet/vue-starter/commit/bed3bdd1f242ec89b41747dc81a052d0f614d517))
  *  add header/description to components page ([04550498](https://github.com/devCrossNet/vue-starter/commit/045504985b0cda9d7b5e112481c5632cd08e089c))
  *  add first version of tab component ([2af814b4](https://github.com/devCrossNet/vue-starter/commit/2af814b42371f367c793a7dd8671df2bab6898f7))
  *  add collapse, add modal, refine navbar ([#11](https://github.com/devCrossNet/vue-starter/pull/11)) ([e4f59011](https://github.com/devCrossNet/vue-starter/commit/e4f590119d61be4e3693f870ddadb456bc14d54e))
  *  add initial set (button, grid, input, loader, navbar, panel) ([#8](https://github.com/devCrossNet/vue-starter/pull/8)) ([f29eb60c](https://github.com/devCrossNet/vue-starter/commit/f29eb60c84a825f75e1284649d82627ea3435f81))
* **vue-navbar:**  add event listener for closing the navbar ([#109](https://github.com/devCrossNet/vue-starter/pull/109)) ([c4afc26b](https://github.com/devCrossNet/vue-starter/commit/c4afc26b20eda4d033b31ca2541c2481eb4cace4))
* **vue-router:**  add scroll behaviour for hashes ([#65](https://github.com/devCrossNet/vue-starter/pull/65)) ([78769621](https://github.com/devCrossNet/vue-starter/commit/7876962104725ddb9c6bea4c1c6eeeabdbbafc1b))
* **VueButton:**  add font awesome icon support ([#68](https://github.com/devCrossNet/vue-starter/pull/68)) ([1ad535d7](https://github.com/devCrossNet/vue-starter/commit/1ad535d7c62821bca2f8536926282b50a928e431))
* **services:**  add HttpService ([afc5782f](https://github.com/devCrossNet/vue-starter/commit/afc5782f0d6413280102dcdd674514a6b796ca96))
* **vuex-persist:**  add 'beforePersist' hook ([dd558643](https://github.com/devCrossNet/vue-starter/commit/dd55864334f28e16f5ce5d7133e558f8362dfc07))
* **VueForm:**  handle dynamic slots ([45d63d70](https://github.com/devCrossNet/vue-starter/commit/45d63d70c103925b59ab0d3763a02943abe82269))
* **i18n:**
  *  support multi line comments in i18n magic comments ([bfdc4f8c](https://github.com/devCrossNet/vue-starter/commit/bfdc4f8c2a26c2ed6f1d8fd84bf5ec5b3adc9564))
  *  set defaultLang from acceptLanguage or cookie ([#33](https://github.com/devCrossNet/vue-starter/pull/33)) ([b7eb7e02](https://github.com/devCrossNet/vue-starter/commit/b7eb7e02fb97025776a8a2ae6d9d95595138d252))
  *  add possibility to add default messages with magic comments ([6459d179](https://github.com/devCrossNet/vue-starter/commit/6459d17952909864f10c26471d9280933807c80e))
  *  add brazilian portuguese translations ([#26](https://github.com/devCrossNet/vue-starter/pull/26)) ([20fc85a0](https://github.com/devCrossNet/vue-starter/commit/20fc85a0c75f67cd2533c57e612c2bda79eff502))
  *  add vue-i18n and language switch ([#6](https://github.com/devCrossNet/vue-starter/pull/6)) ([1c3b1e74](https://github.com/devCrossNet/vue-starter/commit/1c3b1e741c1115c34caefa5ba92c04c2f18ec8c8))
* **VueSelect:**  add change event ([1e5f31ea](https://github.com/devCrossNet/vue-starter/commit/1e5f31ea18910e38cf37b44a47c3d89c92fdeb9c))
* **vuex:**
  *  add tests for actions, getters and mutations + generators ([e49a5c2e](https://github.com/devCrossNet/vue-starter/commit/e49a5c2ecf69b96f106a155dc35cad672e006f72))
  *  add vuex-persist + LocalStorage and Cookie persister ([#29](https://github.com/devCrossNet/vue-starter/pull/29)) ([954f9a04](https://github.com/devCrossNet/vue-starter/commit/954f9a0459453123c27885be2e4ea3766644afdb))
* **pwa:**
  *  increase lighthouse score ([e00201bf](https://github.com/devCrossNet/vue-starter/commit/e00201bf154d675e12b2732ff1e91e872ced4110))
  *  add service worker support, refine accessibility ([#9](https://github.com/devCrossNet/vue-starter/pull/9)) ([cda2d93b](https://github.com/devCrossNet/vue-starter/commit/cda2d93b43bddf65d972e24651eaa1d71af6faeb))
* **css:**  add postcss plugins ([70d48b4a](https://github.com/devCrossNet/vue-starter/commit/70d48b4a9e477d9995e510dad3350d06610517b6))
* **test:**  add basic e2e test setup with cypress.io ([d06d9e79](https://github.com/devCrossNet/vue-starter/commit/d06d9e79193afb1a44ec02ece949776f179ae50e))
* **scripts:**  add extract-i18n-messages ([e9c660b7](https://github.com/devCrossNet/vue-starter/commit/e9c660b72f2efd3c133104954ce7bf7af813162f))
* **home:**
  *  add features and quick start guide ([773ca4f6](https://github.com/devCrossNet/vue-starter/commit/773ca4f66318732b6eb5b56c4558b81b5ba39375))
  *  add SEO information ([34137b59](https://github.com/devCrossNet/vue-starter/commit/34137b596e0505a06838f930c2ec8b3dde0f97d5))
  *  add back link to github ([fbd588eb](https://github.com/devCrossNet/vue-starter/commit/fbd588eb9584e9afb187965df5e51afccfc60f03))
  *  make stage responsive ([dc5d0843](https://github.com/devCrossNet/vue-starter/commit/dc5d0843d43ca87f72cb31182c2b5dc8d8b101d9))
* **PWA:**  refine sw.ts; remove http caching for rendered HTML ([574101ba](https://github.com/devCrossNet/vue-starter/commit/574101ba70fe5496ce3a43ab64cdec01afd3c83f))
* **SEO:**  add vue-meta to manipulate html-header tags and attributes ([#10](https://github.com/devCrossNet/vue-starter/pull/10)) ([1d9b6872](https://github.com/devCrossNet/vue-starter/commit/1d9b687232437d4c1575740bb4b738c201388482))

##### Bug Fixes

* **vue-autocomplete:**  trigger change event on every click ([54f37977](https://github.com/devCrossNet/vue-starter/commit/54f37977c3c26a8afb012d08f2b572ea17055a07))
* **vue-modal:**  make content scrollable ([c6d19fe4](https://github.com/devCrossNet/vue-starter/commit/c6d19fe4dd962e3a4c3533f60236953e8cefb156))
* **generators:**  change first parameter of registerModule to array ([#131](https://github.com/devCrossNet/vue-starter/pull/131)) ([1fa3fa2d](https://github.com/devCrossNet/vue-starter/commit/1fa3fa2dd70b22b7b1bdb90fc07d70a4af4408be))
* **vue-select:**  remove browser default styles ([cb8ab473](https://github.com/devCrossNet/vue-starter/commit/cb8ab4738f28482cfc9433ee52b858354b536b0b))
* **build:**
  *  change asset paths in SPA webpack config ([09ec7066](https://github.com/devCrossNet/vue-starter/commit/09ec7066d4068a238a4236e2067032838f58821c))
  *  replace process.env.NODE_ENV instead of process.env ([1ee7327e](https://github.com/devCrossNet/vue-starter/commit/1ee7327e702f51de7413c2ae0ff96b3aa1c9c3f5))
*  add production config ([9dd9ba5f](https://github.com/devCrossNet/vue-starter/commit/9dd9ba5f071e18bb8eaff129579447744d4fb56b))
*  merge update dependencies ([b65c9dbd](https://github.com/devCrossNet/vue-starter/commit/b65c9dbda1118396eda248b9b3c006a46b5a36aa))
*  spacings in Stage and VueFooter ([25146407](https://github.com/devCrossNet/vue-starter/commit/25146407620891488ef1357d1481856f6205cb0f))
*  replace FA js with FA font to prevent DOM diffs between server/client ([f35cd194](https://github.com/devCrossNet/vue-starter/commit/f35cd194359bff0d5f8d26c8b1757bdd91b059d2))
* **pwa:**  add manifest.json to index.html ([6a13c0df](https://github.com/devCrossNet/vue-starter/commit/6a13c0df5cd2fd5ec54002725088fb6b991fc4bc))
* **vue-grid:**  add padding for mobile phones ([3ab54501](https://github.com/devCrossNet/vue-starter/commit/3ab54501006ec5895e7017a194a7269f77b9c68c))
* **vue-calendar:**  handle negative paddingLeft ([89b01cf0](https://github.com/devCrossNet/vue-starter/commit/89b01cf093bb5c80c9c2c384667c02fb5829144e))
* **i18n:**
  *  rename en-EN to en-US ([588eb1be](https://github.com/devCrossNet/vue-starter/commit/588eb1be9dfa465068fae3f2d98a12105549f54a))
  *  set correct default-lang ([b4d0b917](https://github.com/devCrossNet/vue-starter/commit/b4d0b917ccb8dd3fef097f50929f52d0b8c351e7))
  *  set defaultLang from acceptLang if no defaultLang is specified in cookies ([341d9756](https://github.com/devCrossNet/vue-starter/commit/341d9756c8bdf2bdc79c9189eb7977255a822565))
* **http-service:**  append Auth header only if no Auth header is in cfg ([8284aefa](https://github.com/devCrossNet/vue-starter/commit/8284aefa0aaeeffaacd6cf7bb6ad4f02097bad23))
* **ci:**  upload code coverage report ([d3535ec6](https://github.com/devCrossNet/vue-starter/commit/d3535ec67f2be82c9ff4a763e7d03982a5c60810))
* **VueMarkdown:**  trim text before rendering ([#87](https://github.com/devCrossNet/vue-starter/pull/87)) ([89496d87](https://github.com/devCrossNet/vue-starter/commit/89496d87b3ae6664482ae33104d2beb1cc36a4d9))
* **lint:**  trailing comma check ([#76](https://github.com/devCrossNet/vue-starter/pull/76)) ([728e58ce](https://github.com/devCrossNet/vue-starter/commit/728e58ced902b5c3b2acd52e786366e6bc7465db))
* **VueCalendar:**  set correct start date ([58c2ab96](https://github.com/devCrossNet/vue-starter/commit/58c2ab96ab39a9b98ee55f41d4b8c2169651c071))
* **coverage:**  remove HttpService from coverage ([32b08f07](https://github.com/devCrossNet/vue-starter/commit/32b08f07bb9ca5533c0b6f16916424e43db5cfff))
* **tools:**
  *  escape double quotes in extract-i18n-messages ([d6c2c7c9](https://github.com/devCrossNet/vue-starter/commit/d6c2c7c9d7f99e107484a1b346a493e089c4299e))
  *  reformat generator blueprints ([a87c1828](https://github.com/devCrossNet/vue-starter/commit/a87c1828633d2e75bdbba6fb46c322244b2a531c))
* **services:**  remove default base url from HttpService ([2ce77fab](https://github.com/devCrossNet/vue-starter/commit/2ce77fab34906827d7778c3bf29210427495c3a3))
* **components:**
  *  fix typo ([0c4531e3](https://github.com/devCrossNet/vue-starter/commit/0c4531e363a8798a0d9e3c0af127c02ebe016c68))
  *  optimize for touch devices ([8da250d5](https://github.com/devCrossNet/vue-starter/commit/8da250d57537becb230054527b858c98647079f1))
* **VueForm:**  add div around dynamic components ([a3b1537d](https://github.com/devCrossNet/vue-starter/commit/a3b1537df561c1eceff96eede35168e659788ec7))
* **VueSelect:**  rename VueSelectOption to IVueSelectOption ([f95e770b](https://github.com/devCrossNet/vue-starter/commit/f95e770b32a3d8f66321a4c61d29ca35e3226885))
* **extract-i18n-messages:**  escape line-breaks, support html-tags ([324d1e65](https://github.com/devCrossNet/vue-starter/commit/324d1e6521a2142a1a01e3fa6a8e08d891586e53))
* **pagination:**  add cursor pointer for non touch devices ([48d5fc8d](https://github.com/devCrossNet/vue-starter/commit/48d5fc8dd95b4dba55b58b0f003382de3d9fbb70))
* **VueSlider:**  remove unnecessary branches, better mobile ux ([4b72baf6](https://github.com/devCrossNet/vue-starter/commit/4b72baf6810682951362f090354335ff95f29968))
* **css:**
  *  cssnano - remove default preset ([d13e92b8](https://github.com/devCrossNet/vue-starter/commit/d13e92b8c198ae5ee446c8c5f32a39e5ed67d663))
  *  disable z-index optimisation ([3e55a340](https://github.com/devCrossNet/vue-starter/commit/3e55a340f05dda5167357a241486331c6088fffb))
* **scripts:**  make extract-i18n-messages working again ([22467701](https://github.com/devCrossNet/vue-starter/commit/2246770193e6490322c10818bb38ee47b5695d01))
* **Stage:**  move text up for mobile because of ios safari ([b3e03e59](https://github.com/devCrossNet/vue-starter/commit/b3e03e5964232ecb713f3730321d6e2271625d68))
* **counter:**  add top margin ([e10888eb](https://github.com/devCrossNet/vue-starter/commit/e10888eb2a361b4f660bda6d0d8fff48239b3b06))
* **mobile:**  add additional touchstart events ([60420c32](https://github.com/devCrossNet/vue-starter/commit/60420c3209d9c6ae687b46834640197cb2dcea04))
* **grid:**  correct rendering of filled grit-items ([2ffc28fb](https://github.com/devCrossNet/vue-starter/commit/2ffc28fb695f208017f8623fb775c35a7505c25d))

##### Refactors

*  add some final touches for readability ([100e7826](https://github.com/devCrossNet/vue-starter/commit/100e78268bcc53263a4999c2f35147bb1ce2c241))
*  reduce complexity ([5076dc4d](https://github.com/devCrossNet/vue-starter/commit/5076dc4d281730bd7827a637ed3041de87cfa5a9))
*  move EventBus to shared/services ([5ea1a272](https://github.com/devCrossNet/vue-starter/commit/5ea1a27243d3c75eeb088c50ea6012f05be11a21))
*  move scripts/generators to ./tools, use tsc instead of webpack ([#32](https://github.com/devCrossNet/vue-starter/pull/32)) ([7affc927](https://github.com/devCrossNet/vue-starter/commit/7affc927b9b3f4d06756efb8a0a0e53e80dd21c5))
* **app-config:**  move AppConfig from server utils to app/config ([c6873c3d](https://github.com/devCrossNet/vue-starter/commit/c6873c3d4b860dd1426512901ae600e851a026b8))
* **components:**  add storybook; remove form; add badge ([#123](https://github.com/devCrossNet/vue-starter/pull/123)) ([c6eea020](https://github.com/devCrossNet/vue-starter/commit/c6eea020b41fd05398c3e882d4abc4774f068cce))
* **vuex-persist:**
  *  reduce complexity ([2a5aa819](https://github.com/devCrossNet/vue-starter/commit/2a5aa81975239deef6417567a8a70b1e45c8e285))
  *  rename whitelist to modules; remove ssr code from client bundle ([a8b0b766](https://github.com/devCrossNet/vue-starter/commit/a8b0b7668469503122d7ed630fa4b38e9305c345))
* **vuex:**
  *  use vuex modules by default ([#115](https://github.com/devCrossNet/vue-starter/pull/115)) ([3626cc0b](https://github.com/devCrossNet/vue-starter/commit/3626cc0be0fdb746b5562dcbb49a3711f48ff605))
  *  add types for vuex ([a2984c87](https://github.com/devCrossNet/vue-starter/commit/a2984c87672fd3682621b3132bcb4e961b28089b))
* **scripts:**  make i18n script testable ([ff6f7e5d](https://github.com/devCrossNet/vue-starter/commit/ff6f7e5dc96070ce8430eb8d880a2308e6474748))
* **i18n:**
  *  remove messages from bundle ([44d492b9](https://github.com/devCrossNet/vue-starter/commit/44d492b983afff1f70b50a0369e80449ed243577))
  *  change language codes to ISO standard ([775fde72](https://github.com/devCrossNet/vue-starter/commit/775fde7242aac3346fe1ef7254bce84f26d61e8f))
* **server:**
  *  split up index.ts ([#106](https://github.com/devCrossNet/vue-starter/pull/106)) ([3dae04e0](https://github.com/devCrossNet/vue-starter/commit/3dae04e09248913cd42fe27ca15f38a15cd2a2cd))
  *  change relative paths to dist folder ([a5d7fd08](https://github.com/devCrossNet/vue-starter/commit/a5d7fd0878538f6f25e8d82eaa9f87258d1dccdd))
* **http-service:**  make it work for i18n; update fresh token logic ([213170b4](https://github.com/devCrossNet/vue-starter/commit/213170b413a30a2b63327231a2b0de85ddaf140f))
* **storybook:**  use @typings instead of custom types ([48cbe454](https://github.com/devCrossNet/vue-starter/commit/48cbe4544479c6a45ea71e21f8d095e7beb634bf))
* **VueCalendar:**  move scss variables to _variables.scss ([586f9afd](https://github.com/devCrossNet/vue-starter/commit/586f9afdfbeabc46bf235f04c896d5e62264c5be))
* **tooltip:**  split out scss variables ([b62fa49a](https://github.com/devCrossNet/vue-starter/commit/b62fa49afe14f134e5f39061d2a46724dd114923))
* **scss:**  add mixins, restructure code ([#31](https://github.com/devCrossNet/vue-starter/pull/31)) ([cc38cffd](https://github.com/devCrossNet/vue-starter/commit/cc38cffd886db1ede4fc5552ee0b488b946ee4c8))
* **typescript:**  replace type any with type definitions where possible ([6f31bd9b](https://github.com/devCrossNet/vue-starter/commit/6f31bd9b2326af76bb1f6f124d75429d7cdd9757))

##### Tests

* **VueCalendar:**  fix tests ([c32fc8a3](https://github.com/devCrossNet/vue-starter/commit/c32fc8a3dc56fe55217fb06279c95d8cb60b1728))

