import * as Express from 'express';
import * as favicon from 'serve-favicon';
import * as path    from 'path';
import { serve }    from '../utils/Utils';

export const StaticRoutes = (app: Express.Application) => {
  app.use('/sw.js', serve('../client/sw.js'));
  app.use('/', serve('../static'));
  app.use('/i18n', serve('../../i18n'));
  app.use('/client', serve('../client'));
  app.use(favicon(path.resolve(__dirname, '../static/logo.png')));
};
