# 存储你的状态

默认情况下,Vuex会在内存保存状态,但是问题是即使是用户重载了页面也能持久化存储状态.

如果用户重新加载页面,有许多方法可以持久化状态,例如,可以在URL查询中保留变量,如果页面加载,则还原状态.

这种方法对于少量的非机密数据来说是可以的,例如过滤器、排序方向、页码.

但有时你必须存储机密数据,如访问令牌或大数据对象,如产品列表.在这些情况下,你需要将数据存储在cookie或LocalStorage中.

vue-starter附带一个VueX中间件,允许你决定将VueX模块保存在不同方式的存储中.

## 保存到cookies

vue-starter包含用于VueX-persist中间件的CookieStorage适配器.

::: tip Cookies
**在你应用此提示之前,请与安全工程师进行沟通!**

Cookie可以存储访问令牌.Cookie也可以在服务器上使用.这意味着你可以连接到服务器上的受保护API,以使用正确的数据呈现用户的初始页面.
:::

CookieStorage适配器已在文件中引用 `./src/app/store.ts`.

```js
import { PersistCookieStorage } from './shared/plugins/vuex-persist/PersistCookieStorage';

...

const beforePersistCookieStorage = (localState: IState): IState => {
  delete localState.app.config;
  delete localState.app.defaultMessages;
  delete localState.app.redirectTo;

  return localState;
};

...

          new PersistCookieStorage(
            ['app'],
            {
              cookieOptions: {
                expires: 365,
              },
              beforePersist: beforePersistCookieStorage,
            },
          ),
```

要将状态保存到cookie,必须初始化一个新实例,`PersistCookieStorage`该实例将模块名称列表作为第一个参数,将`options`对象作为第二个参数.

你可以定义`cookieOptions`,这是[js-cookie](https://github.com/js-cookie/js-cookie#cookie-attributes)属性的副本, 以及用于删除不应该持久保存到cookie的状态的回调.

### 在服务端提取cookies状态

以下部分`/src/server/isomorphic.ts`负责提取cookie数据并将其应用到应用程序的初始状态.

```js
    /**
     * default state
     */
    let state: IState = store.state;
    state = PersistCookieStorage.getMergedStateFromServerContext<IState>(context, state);
    state.app.config = context.appConfig;

    if (state.app && state.app.locale) {
      context.acceptLanguage = state.app.locale;
      context.htmlLang = state.app.locale.substr(0, 2);
    } else {
      state.app.locale = context.acceptLanguage;
    }

    store.replaceState(state);
```

::: warning Cookie大小
请记住,大多数Web服务器的cookie默认最大标头大小为**4KB**,因此你应该考虑只在cookie中保存必要的数据.
:::

## 存到LocalStorage

vue-starter包含用于VueX-persist中间件的LocalStorage适配器.

::: tip LocalStorage
LocalStorage适用于保存中型数据,但请注意,它仅在于客户端可用,即就你保存到它的中数据将不会主动随请求发送到服务器上.
:::

它已在`./src/app/store.ts`文件中引用 .

```js
import { PersistLocalStorage }  from './shared/plugins/vuex-persist/PersistLocalStorage';

...

const beforePersistLocalStorage = (localState: IState): IState => {
  delete localState.counter.incrementPending;
  delete localState.counter.decrementPending;

  return localState;
};

...

new PersistLocalStorage(['counter'], beforePersistLocalStorage),
```

要将状态保存到LocalStorage,你必须初始化一个`PersistLocalStorage`实例,`PersistLocalStorage`该实例将模块名称列表作为第一个参数,并将删除不应该保存到LocalStorage状态的回调作为第二个参数.
