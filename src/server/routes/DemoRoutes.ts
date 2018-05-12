import * as Express          from 'express';
import { Request, Response } from 'express';
import { serve }             from '../utils/Utils';

export const DemoRoutes = (app: Express.Application) => {
  /**
   * http -> https redirect for heroku
   * TODO: remove if you're not running the app on heroku
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

  /**
   * storybook
   * TODO: enable this route only in non production environments
   * if (!isProd) {
   *    app.use('/storybook', serve('../../storybook-static', true));
   * }
   */
  app.use('/storybook', serve('../../storybook-static'));

  /**
   * docs
   * TODO: remove if you don't maintain a documentation
   */
  app.use('/docs', serve('../docs'));
};
