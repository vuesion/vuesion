# 跟上时代

::: tip 若你的版本 < 1.1.0 请注意
请下载文件[./tools/scripts/update.ts](https://github.com/devCrossNet/vue-starter/blob/master/tools/scripts/update.ts)
, 复制到 `./tools/scripts/update.ts` 然后添加以下脚本到 `package.json`:

```json
    "update": "npm run compile-tools && node ./tools/scripts/update.js",
```
:::

## 获取最新的更改
如果你想保持最新的vue-starter,请遵循以下步骤:

- 检查你的应用程序是否使用版本控制系统 (e.g. github, gitlab, butbucket, etc.)
- 清理你的更改列表
- 创建一个新分支
- 运行 `npm run update`

更新脚本将会比较你当前vue-starter的副本和vue-starter仓库里`devCrossNet/vue-starter:master分支的副本

这将创建、删除、添加或修改所有不同的文件.

这基本上等同于你重新在`devCrossNet/vue-starter:master`上建立你的项目（rebase变基,这个词不好理解,我暂时写成重新建立）.
但是通常, 你没有把vue-starter的历史保存在你自己的应用程序中,所以不可能变基.

## 和你的本地更改融合

现在通过改变记录看一下改变:

- 遍历所有文件并合并更改 (恢复可能破坏你应用的部分)
- 运行测试 & lint 你的项目: `npm run test:coverage`, `npm run test:tools`, `npm run lint`
- 运行程序

如果一切正常运行,融合到你的主分支.

如果不是的话,你可以通过对比本地副本和`devCrossNet/vue-starter:master`[更改记录CHANGELOG](https://github.com/devCrossNet/vue-starter/blob/master/CHANGELOG.md)来进行手动更新. 

## 主要版本更新

我们的愿景是为每一个主要版本提供升级脚本,它将更新文件和代码.
