import * as path      from 'path';
import { IAppConfig } from '../../app/config/IAppConfig';

/**
 * read default config and merge it with CONFIG environment variable
 */
process.env.NODE_CONFIG_DIR = path.join(path.resolve(__dirname), '..', 'app', 'config');
const envConfig: IAppConfig = JSON.parse(process.env.CONFIG || '{}');
export const AppConfig: IAppConfig = Object.assign({}, require('config'), envConfig);
