import * as path from 'path';
import cloneDeep from 'lodash/cloneDeep';
import queryString from 'query-string';
import { Context } from '@nuxt/types';
import { IAppConfig } from './IAppConfig';

export default function({ store, req }: Context) {
  /**
   * read default config and merge it with CONFIG environment variable
   */

  process.env.NODE_CONFIG_DIR = path.join(path.resolve(process.cwd()), 'src/plugins/app-config');
  const envConfig: IAppConfig = JSON.parse(process.env.CONFIG || '{}');
  const appConfig = Object.assign({}, require('config'), envConfig);
  const runtimeConfig: IAppConfig = cloneDeep(appConfig);
  const query: any = req ? queryString.parseUrl(req.url).query : {};

  runtimeConfig.features.disableParticles = query.disableParticles
    ? Boolean(query.disableParticles)
    : appConfig.features.disableParticles;

  store.state.app.config = runtimeConfig;
}
