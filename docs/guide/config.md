# AppConfig and RuntimeConfig

You will probably come into a situation where you have to change the behavior of our app depending on the
deployment stage _(e.g. you want to have a different API endpoint in development than in production)_.

## AppConfig for different Environments

The AppConfig in `./src/app/config/AppConfig.ts` will provide your application with a default configuration
that you can change in `./src/app/config/default.json`.

If you want to overwrite the default config for example in the `PRODUCTION` environment, you have to
create a new file `./src/app/config/production.json` with the parts of the json that is different
to the default config.

## Provide your app with Environment Variables

Sometimes you have to provide confidential data e.g. API keys to your app.
The best practice is to **not** commit these keys in a git repository and instead provide it via an environment variable.

**Let's consider you want to add an `API_KEY` for a middleware to your app e.g. polling data from a CMS.**

First of all, you have to define the attribute `API_KEY` in your AppConfig, add it to:

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

And now, to provide your app with the API_KEY via an environment variable, you have to start your app with the following command:

`CONFIG={\"API_KEY\":\"my-api-key\"} npm start` 

or 

`CONFIG={\"API_KEY\":\"my-api-key\"} npm run dev`

::: warning DELETE CONFIDENTIAL DATA
This API_KEY is confidential information, you should not expose it to your client application.

In order to remove this information from your initial state, you have to add the following line in
`./src/server/isomorphic.ts`

```js
const setDefaultState = (context: IServerContext, store: Store<IState>) => {

...

  delete state.app.config.API_KEY;

  store.replaceState(state);
};
```
:::

Now you can use this API_KEY in your server-side app to fetch data from the CMS and no one will get your API_KEY.

If you want to pass environment variables to your client application, just leave the `DELETE CONFIDENTIAL DATA` step out.


## Feature flags and other runtime configurations

You have to implement a feature that is disabled by default but for testers, it should be already available behind a feature flag.

The vue-starter comes already with a feature flag that explains the concept pretty well.
If you go to [http://vue-starter.herokuapp.com/?disableParticles=true](http://vue-starter.herokuapp.com/?disableParticles=true) 
you will see that the particle animation in the `Stage` component is disabled.

First add your feature flag in your configuration:

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

Now you can enable the feature in any way you want in the `./src/server/utils/RuntimeConfig.ts`.
In the already included use-case, it is via a query parameter that you can add to the URL.
But you could also use request headers to enable/disable features.

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
