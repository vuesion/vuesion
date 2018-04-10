import * as Express from 'express';
import * as favicon from 'serve-favicon';
import * as path    from 'path';
import { serve }    from '../utils/Utils';

export const AssetRoutes = (app: Express.Application) => {
  app.use('/i18n', serve('../../i18n'));
  app.use('/client', serve('../client'));
  app.use('/assets', serve('../assets'));
  app.use(favicon(path.resolve(__dirname, '../assets/logo.png')));
};
