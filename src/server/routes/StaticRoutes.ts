import * as Express from 'express';
import { Request, Response } from 'express';
import * as favicon from 'serve-favicon';
import * as path from 'path';
import { serve } from '../utils/Utils';
import { Logger } from '../utils/Logger';

export const StaticRoutes = (app: Express.Application) => {
  app.use('/sw.js', serve('../client/sw.js'));
  app.use('/', serve('../static'));
  app.use('/i18n', serve('../../i18n'));
  app.use('/client', serve('../client'));
  app.use(favicon(path.resolve(__dirname, '../static/favicon.ico')));
  app.post('/log/error', (req: Request, res: Response) => {
    const err: any = req.body.error;

    Logger.error(
      'error during rendering: %s; error: %s',
      req.url,
      JSON.stringify(err, Object.getOwnPropertyNames(err)),
    );

    res.status(200).json({});
  });
};
