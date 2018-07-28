# 创建你的第一个页面

为了创建一个新页面,你需要增加一个模块到你的应用.

::: warning 此页文档有待完善
在翻译此篇文档时，有一些特殊的概念，不是很明白原作者是如何理解的.
比如容器组件,作者在原文中用connected组件,我也是在后面的文档中发现了引用文档才知道是容器组件.

我将持续改关注并参与善此文档.才疏学浅,敬请原谅.
:::

## 什么是模块?

模块是应用程序中的"领域"逻辑的封装.

###  模块用例

**动态页面**: 由许多视图逻辑、至少一个路由和状态管理组成

**静态页面**: 没有状态管理,只有一个路由 e.g. `/imprint`

**"领域"逻辑和共享的视图组件**: e.g. 认证状态, 动作, 突变 加上 登录/注册 表单 但是没有路由

**“领域”逻辑**: 只是普通逻辑以及状态管理的没有路由没有组件

## 创建一个模块

让我创建一个有状态管理的动态页面
运行 `npm run g` 然后你会被问一些问题:

```bash
? [PLOP] Please choose a generator. (Use arrow keys)
  component - Add a single file component 
❯ module - Add a module with VueX store and routes 
  connected - Add a VueX connected component 

```

选择 `module` 然后按下 `enter`:

```bash
? [PLOP] Please choose a generator. module - Add a module with vuex store and routes
? What should it be called? 
```

这将会是你的模块,connected和路由的名字

输入 `Foo` 然后按下`enter`

```bash
? [PLOP] Please choose a generator. module - Add a module with vuex store and routes
? What should it be called? Foo
? Do you want routes? Yes
? Do you want vuex? Yes
```

按下多次`enter` 然后你会看到CLI生成一些文件:

```bash
[SUCCESS] add /vue-starter/src/app/foo/Foo/Foo.vue
[SUCCESS] add /vue-starter/src/app/foo/Foo/Foo.spec.ts
[SUCCESS] add /vue-starter/src/app/foo/routes.ts
[SUCCESS] add /vue-starter/src/app/foo/actions.spec.ts
[SUCCESS] add /vue-starter/src/app/foo/actions.ts
[SUCCESS] add /vue-starter/src/app/foo/getters.spec.ts
[SUCCESS] add /vue-starter/src/app/foo/getters.ts
[SUCCESS] add /vue-starter/src/app/foo/module.ts
[SUCCESS] add /vue-starter/src/app/foo/mutations.spec.ts
[SUCCESS] add /vue-starter/src/app/foo/mutations.ts
[SUCCESS] add /vue-starter/src/app/foo/state.ts
```

你也会看到CLI已经引用了新的文件在必要的位置: `./src/app/router.ts`, `./src/app/state.ts` and `./src/app/store.ts`.

::: tip
connected组件是指容器组件
:::

::: tip 名称可以包含路径

`module`, `connected容器` , `component` 的名称会被添加一个路径前缀

例如`counter/MyNewComponent`将会在`counter`模块里创建一个组件

** `connected容器` 组件必须被添加一个路径前缀,因为它只能存在于一个模块里**
:::

## 验证

打开 [http://localhost:3000/foo](http://localhost:3000/foo) 你应该再一次看到 `Counter` 栗子 (这是一个模块的默认蓝图).

::: tip 一切都正常运行吗?
为了验证你的更改不会破坏东西, 运行 `npm test`进行测试.
:::
