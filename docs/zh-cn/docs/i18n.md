# I18n国际化
> 细节描述请查阅 [开始指南](../guide/i18n.md).

i18n国际化设置基于 [vue-i18n](https://kazupon.github.io/vue-i18n/en/).

## 重要的文件

- `src/app/shared/plugins/i18n.ts`, i18n设置了异步语言环境切换
- `src/server/isomorphic.ts`, 设置默认地区和默认消息
- `src/client/index.ts`, 从store读取默认消息并在i18n中使用它
- `package.json`, 为你的应用定义支持的地区 (由脚本和应用程序使用)
- `i18n/*.json`, 语言文件

## 提取信息

要提取所有运行的 i18n IDs 运行 `npm run extract-i18n-messages`.
这将在 `./i18n`文件夹中生成语言JSON文件

要添加新语言文件,请在 `package.json -> config."supported-locales"` 属性中添加新条目.

此脚本还允许你使用magic comment注释定义默认消息：

`$t('App.nav.components' /* Components */)`,
这将添加 `'Components'`作为默认值到所有 `'App.nav.components'` keys,
但将保留以前修改的值.
