# 重定向到另一个页面

vue-starter包含了[VueRouter](https://router.vuejs.org/) 来支持在页面间导航.

::: tip 关于Vuerouter路由
如果你需要了解Vue的路由的机制与基础用法，并且无论深浅，我建议你去[VueRouter](https://router.vuejs.org/)直接查看中文文档。以下内容是在Vue-starter中使用[VueRouter]进行重定向的参考。
:::

::: tip 服务端路由 vs. 客户端路由
在服务器端重定向和在客户端重定向是不同的。

服务器端重定向意味着使用301或者302进行响应，并返回不同的URL地址，而并不呈现页面。

在客户端重定向，通常只以为这自动更改URL地址。
:::

## 静态路由配置

VueRouter 可以以非常简单的方式配置路由，并在其中进行重定向配置.

在 `src/app/app/routes.ts` 中查看示例:

```js
import { RouteConfig } from 'vue-router/types/router';

export const AppRoutes: RouteConfig[] = [
  ...
  {
    path:      '/redirect',
    redirect:  '/',
  },
];
```

当请求到路径 `/redirect`, URL地址会自动重定向到`/` ,然后home page主页内容将会被渲染.

## 编程式重定向

vue-starter还支持根据特定条件触发重定向，例如，如果您的API以“未授权”响应，您希望用户跳转到登录页面:` router.push('/login');`

在模块文件像 `src/app/counter/Counter/Counter.vue` 中, `prefetch` 函数拿到路由实例并作为参数传递.
现在你可以使用`router.push`来在渲染页面之前改变URL地址, 这意味着重定向.

例如:
```js
    ...
    prefetch:   ({ store, router }: IPreLoad) => {
      return store
             .dispatch('counter/increment')
             // For this to work, make sure the error is not caught in the action!
             .catch((error) => {
               if (error.response.status === 401) {
                 router.push('/login');
               }
             });
    },
    ...
```
