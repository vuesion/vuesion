import * as Express          from 'express';
import { Request, Response } from 'express';
import { serve }             from '../utils/Utils';

export const DemoRoutes = (app: Express.Application) => {
  /**
   * http -> https redirect for heroku
   */
  app.get('*', (req: Request, res: Response, next: any) => {
    const host: string = req.headers.host || 'localhost:3000';
    const redirect: string = `https://${host}` + req.url;

    if (req.headers['x-forwarded-proto'] && req.headers['x-forwarded-proto'] !== 'https') {
      res.redirect(redirect);
    } else {
      next();
    }
  });
  app.use('/storybook', serve('../../storybook-static'));
  app.use('/docs', serve('../docs'));
};
