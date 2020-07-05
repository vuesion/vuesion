import * as express from 'express';
import { getIntInRange } from '@vuesion/utils/dist/randomGenerator';

const getErrorWithProbability = (probability: number) => getIntInRange(0, 100) <= probability;

export const DemoRoutes = (app: express.Application) => {
  /**
   * http -> https redirect for heroku
   */
  app.get('*', (req: express.Request, res: express.Response, next: any) => {
    const host: string = req.headers.host || 'localhost:3000';
    const redirect: string = `https://${host}` + req.url;

    if (req.headers['x-forwarded-proto'] && req.headers['x-forwarded-proto'] !== 'https') {
      res.redirect(redirect);
    } else {
      next();
    }
  });
  // app.use('/storybook', serve('../../storybook-static'));
  app.use('/docs', (_: express.Request, res: express.Response) => {
    res.status(301).redirect('https://vuesion.github.io/docs/en/');
  });

  /**
   * Auth-Demo
   */
  app.post('/token', (req: express.Request, res: express.Response) => {
    if (getErrorWithProbability(10)) {
      res.status(500).json({});
    } else if (req.body.grant_type === 'password') {
      res.status(200).json({ access_token: 'accessToken', refresh_token: 'refreshToken' });
    } else if (req.body.grant_type === 'refresh_token' && req.body.refresh_token === 'refreshToken') {
      res.status(200).json({ access_token: 'accessToken2', refresh_token: 'refreshToken2' });
    } else if (req.body.grant_type === 'refresh_token' && req.body.refresh_token === 'refreshToken2') {
      res.status(200).json({ access_token: 'accessToken', refresh_token: 'refreshToken' });
    }
  });

  app.delete('/token', (_: express.Request, res: express.Response) => {
    if (getErrorWithProbability(10)) {
      res.status(500).json({});
    } else {
      res.status(200).json({});
    }
  });

  app.get('/protected', (_: express.Request, res: express.Response) => {
    if (getErrorWithProbability(40)) {
      res.status(401).json({});
    } else {
      res.status(200).json({});
    }
  });
};
