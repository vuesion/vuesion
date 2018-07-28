# 风格指南

此项目中使用的默认样式指南是基于[Vue 风格指南](https://vuejs.org/v2/style-guide/)
和 [Angular风格指南](https://angular.io/guide/styleguide).

## 文件结构约定

```
├── code-style-web-storm.xml  // code formatting rules for .idea
├── config                    // webpack configs
├── cypress                   // e2e tests
├── docs                      // can be deleted
├── i18n                      // language files used by vue-i18n
├── logs                      // express logs
├── src
│   ├── app                   // main app code
│   │   ├── app               // app module - contains main component
│   │   ├── config            // app config to pass data from the server environment to the client
│   │   ├── shared            // shared code
│   │   ├── ...               // new modules will be added on this directory level
│   │   ├── app.ts            // app setup
│   │   ├── router.ts         // global routing information
│   │   ├── state.ts          // global app state
│   │   └── store.ts          // vuex store
│   ├── client
│   │   ├── index.ts          // entry point for client application
│   │   └── sw.ts             // service worker
│   ├── index.template.html   // template, needed for SSR and webpack
│   ├── server
│   │   ├── dev               // dev server
│   │   ├── server.ts         // express app
│   │   ├── index.ts          // entry point for server application
│   │   ├── isomorphic.ts     // entry point for server-side rendering
│   │   ├── middlewares       // express middlewares
│   │   ├── routes            // express routes
│   │   └── utils             // utils for SSR
│   └── static                // static files mapped to /
└── tools
    ├── generators            // generator cli
    └── scripts               // productivity tools
```
### 什么是模块?

A module is an encapsulated piece of domain logic in your application, this could be for example:

####  Use-cases for a module

**动态页面**: 由许多视图逻辑、至少一个路由和状态管理组成

**静态页面**: 没有状态管理,只有一个路由 e.g. `/imprint`

**"领域"逻辑和共享的视图组件**: e.g. 认证状态, 动作, 突变 加上 登录/注册 表单 但是没有路由

**“领域”逻辑**: 只是普通逻辑以及状态管理的没有路由没有组件

_一个模块通常含有路由信息或者状态管理,或者两者兼具._

**你可以很容易的通过 `npm run g` 创建模块**

### 什么是connected容器组件?

connected是一个拥有VueX-mappings的[单文件组件](https://vuejs.org/v2/guide/single-file-components.html) 
&**它只能存在于一个模块里**.

(_这些组件与普通组件相比有所不同,因为需要对VueX配置mock以进行测试g_)


### 什么是组件?

这是一个没有绑定的简单的 [单文件组件](https://vuejs.org/v2/guide/single-file-components.html)介绍,

组件可以放在任何地方.通常,它们位于模块的第一级,但也可以位于其他组件文件夹中.

::: tip 测试

你应该尝试尽可能多的“傻瓜式的”组件.它们更容易测试,而且它们可以很容易地重用！

如果你想知道如何存档文件, 看一下 [容器组件 (用我们的话说"Connected组件")](https://medium.com/@learnreact/container-components-c0e67432e005).
:::

## 命名约定

命名是软件开发中最难的事情之一.我们无法用完美的名称来支持帮助你,因为我们不了解你的领域,但我们可以帮助你规范命名

让我们考虑创建一个名为`FooBar`新的页面（模块）,其中包含状态管理,路由和组件,

- 模块 `fooBar`
- 路由 `fooBar`
- 容器 `FooBar`
- css class `fooBar` // we decided against the hyphen notation because you have to use lower camel-case anyway to reference it with `$style`
- actions动作 `FooBarActions`
- getters `FooBarGetters`
- mutations突变 `FooBarMutations`
- 状态接口 `IFooBarState`
- 默认状态 `FooBarDefaultState`

::: tip 生成命令
如果你想节省时间并保持与样式指南的一致的风格,我们建议你使用 **[Generator CLI](../guide/cli.md)** 来生成新代码.
:::
