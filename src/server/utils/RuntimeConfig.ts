import { Request } from 'express';
import cloneDeep from 'lodash/cloneDeep';
import { IAppConfig } from '@/app/config/IAppConfig';

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
