# 删除项目不需要的文件和代码

你的项目包含许多只是为了“演示”的代码.

我们建议你删除这些代码,因为你的用例与演示用例完全不同.

## 文件夹和文件

我们建议删除的文件和文件夹:

```bash
├── docs
└── src
    ├── app
    │   ├── components
    │   └── counter
    └── server
        └── routes
            ├── CounterRoutes.ts
            └── DemoRoutes.ts
```

## 代码

现在你必须删除这些模块的引用, 在以下文件中移除以下代码:

`./src/app/router.ts`
```js
import { CounterRoutes }    from './counter/routes';
import { FormRoutes } from './form/routes';

...

      ...CounterRoutes,
      ...FormRoutes,
```

`./src/app/state.ts`
```js
import { CounterDefaultState, ICounterState } from './counter/state';

...

  counter?: ICounterState;

...

  counter: {
    ...CounterDefaultState(),
  },
```

`./src/app/store.ts`
```js
import { CounterModule }        from './counter/module';

...

store.registerModule(['counter'], CounterModule, { preserveState: true });

...
  delete localState.counter.incrementPending;
  delete localState.counter.decrementPending;
...
```

&服务端路由:

`./src/server/server.ts`
```js
import { DemoRoutes }       from './routes/DemoRoutes';
import { CounterRoutes }    from './routes/CounterRoutes';

...

/**
 * routes to demonstrate the possibilities of the vue-starter
 * can be removed if you don't need them in your application
 */
DemoRoutes(app);
CounterRoutes(app);
```

## 验证

现在你已经清理了你的应用,你可以开始创建你自己的应用了.

如果你你打开了[http://localhost:3000](http://localhost:3000).你应该仍旧能看到vue-starter主页.
但是其他路由应该重定向到 `/not-found`页面.

::: tip 它仍旧工作吗？
为了验证你的更改不会破坏东西, 运行 `npm test`进行测试.
:::
