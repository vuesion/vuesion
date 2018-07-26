# 应用配置和运行时配置

你可能会遇到这样的情况：你必须根据部署阶段更改应用程序的行为（例如,你希望在开发中使用与生产中不同的API端点）

## 针对不同的环境进行AppConfig

AppConfig`./src/app/config/AppConfig.ts` 将为你的应用程序提供可以更改的默认配置 `./src/app/config/default.json`.

如果你想覆盖默认配置,例如在 `PRODUCTION`环境下, 你需要创建一个新文件`./src/app/config/prodcution.json`其中有与默认配置不同的配置部分

## 为你的应用提供环境变量

有时你必须提供机密数据,例如到你应用程序的API密钥.最佳做法`不是`在 git存储库中提交这些密钥,而是通过环境变量提供它.

**让我们想一下你需要为应用添加`API_KEY`中间件,例如从CMS轮询数据.**

首先,你必须在AppConfig中定义属性`API_KEY`,将其添加到

`./src/app/config/default.json`
```json
{
  "api": {
    "baseUrl": "http://localhost:3000"
  },
  "features": {
    "disableParticles": false
  },
  "API_KEY": null
}
```

`./src/app/config/IAppConfig.ts`
```js
export interface IAppConfig {
  api: {
    baseUrl: string;
  };
  features: {
    disableParticles: boolean,
  };
  API_KEY: string;
}
```

现在,要通过环境变量为应用提供`API_KEY`,你必须使用以下命令启动你的应用

`CONFIG={\"API_KEY\":\"my-api-key\"} npm start` 

 ||  

`CONFIG={\"API_KEY\":\"my-api-key\"} npm run dev`

::: warning 删除机密数据
此API_KEY是机密信息,你不应将其公开给你的客户端应用程序.

要从初始状态中删除此信息,你必须添加以下代码

`./src/server/isomorphic.ts`

```js
const setDefaultState = (context: IServerContext, store: Store<IState>) => {

...

  delete state.app.config.API_KEY;

  store.replaceState(state);
};
```
:::

现在,你可以在服务器端应用程序中使用此API_KEY从CMS获取数据,并且没有人会获得你的API_KEY.

如果要将环境变量传递给客户端应用程序,只需不做`删除机密数据`步骤即可.


## 功能标志和其他运行时配置

有些功能默认情况下是禁用的,但对于测试人员,它应该已经在特性标志下可用.

vue-starter已经有一个功能标志,很好地解释了这个概念.
如果你打开 [http://vue-starter.herokuapp.com/?disableParticles=true](http://vue-starter.herokuapp.com/?disableParticles=true) 
你将看到`Stage`组件中的粒子动画被禁用.

首先在配置中添加功能标志:

`./src/app/config/default.json`
```json
{
  "api": {
    "baseUrl": "http://localhost:3000"
  },
  "features": {
    "disableParticles": false <--
  }
}
```

`./src/app/config/IAppConfig.ts`
```js
export interface IAppConfig {
  api: {
    baseUrl: string;
  };
  features: {
    disableParticles: boolean, <--
  };
}
```

现在,你可以以任何方式启用在 `./src/server/utils/RuntimeConfig.ts`中配置标志的功能.在已包含的用例中,它通过在URL中添加查询参数.你也可以使用请求头来启用/禁用功能.

```js
import { Request }    from 'express';
import cloneDeep      from 'lodash/cloneDeep';
import { IAppConfig } from '../../app/config/IAppConfig';

/**
 * The runtime config can be used to override the AppConfig per request,
 * it gets passed to the initial state and can be used in the client code
 */
export const RuntimeConfig = (appConfig: IAppConfig, req: Request) => {
  const runtimeConfig: IAppConfig = cloneDeep(appConfig);

  runtimeConfig.features.disableParticles = req.query.disableParticles
                                            ? Boolean(req.query.disableParticles)
                                            : appConfig.features.disableParticles;

  return runtimeConfig;
};

```
