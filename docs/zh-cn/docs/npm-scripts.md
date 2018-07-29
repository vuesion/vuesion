# NPM脚本

## 开发

### 运行开发环境
要在热更新的情况下运行你的应用程序,请运行 `npm run dev`.

### 运行单元测试
- `npm test` 运行一次测试
- `npm run test:coverage` 运行一次百分比覆盖测试

在 `coverage/iconv-report/index.html`查找详细的报道报告

### 运行 e2e 测试

有关e2e测试设置的更多信息,请查看 [cypress.io](https://www.cypress.io/).

- 运行 `npm run dev`
- 打开第二个终端窗口
- 运行 `npm run e2e`

### I18n国际化 & 提取信息
有关详细信息,请查看 [i18n 文档](i18n.md).

### Storybook
有关详细信息,请查看 [Storybook 文档](storybook.md).


## 构建

### 生产构建和运行
要在生产模式下构建和运行你的应用,请运行 `npm run build && npm start`.

### 无服务端渲染的单页面应用程序
如果你不需要服务器端渲染,而你只想拥有静态文件,请运行 `npm run build:spa`.

### 持续集成
为了你的 CI/CD 构建, 我们已经创建了 `ci` 脚本. 它将构建项目, 运行 lint/test 任务并将代码覆盖部署到codecov.

### 打包分析

你可以使用该`npm run analyze-bundle`来获取Webpack包的概述.此命令使用[webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer).

## 发行
要发布项目的新版本,请运行以下命令之一:

- `npm run release:major`
- `npm run release:minor`
- `npm run release:patch`

这将自动生成更改日志,更改package.json中的版本并将标记添加到仓库.