# NPM脚本

## 开发

### 运行开发环境
To run your app in development with hot-module-reloading just run `npm run dev`.

### 运行单元测试
- `npm test` runs tests once
- `npm run test:coverage` runs tests with coverage once

Find a detailed coverage report in `coverage/iconv-report/index.html`

### 运行 e2e 测试

For more information about the e2e test set up, have a look at [cypress.io](https://www.cypress.io/).

- run `npm run dev`
- open up a second terminal window
- run `npm run e2e`

### I18n国际化 & 提取信息
For details please have a look at the [i18n docs](i18n.md).

### Storybook
For details please have a look at the [Storybook 文档](storybook.md).


## 构建

### 生产构建
To build and run your app in production mode, please run `npm run build && npm start`.

### 无服务端渲染的单页面应用程序
If you don't need server side rendering and you just want to have static files, please run `npm run build:spa`.

### 持续集成
For your CI/CD build, we already created a `ci` script. It'll build the project, run the lint/test tasks and deploy the code coverage to codecov.

### 打包分析
If you're curious how your client application looks and which code you ship to your customers.
You can use the `npm run analyze-bundle` task to get an overview of the webpack bundle.
This command uses the [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer).

## 发行
To release a new version of your project run one of the following commands:

- `npm run release:major`
- `npm run release:minor`
- `npm run release:patch`

This will automatically generate a change log, change the version in `package.json` and will add a tag to the repository.
