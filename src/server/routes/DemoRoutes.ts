import * as Express from 'express';
import { Request, Response } from 'express';
import { serve } from '../utils/Utils';
import { getIntInRange } from '@vuesion/utils/dist/randomGenerator';

const getErrorWithProbability = (probability: number) => getIntInRange(0, 100) <= probability;

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
  app.use('/docs', (req: Request, res: Response) => {
    res.status(301).redirect('https://vuesion.github.io/docs/en/');
  });

  /**
   * Auth-Demo
   */
  app.post('/token', (req: Request, res: Response) => {
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

  app.delete('/token', (req: Request, res: Response) => {
    if (getErrorWithProbability(10)) {
      res.status(500).json({});
    } else {
      res.status(200).json({});
    }
  });

  app.get('/protected', (req: Request, res: Response) => {
    if (getErrorWithProbability(40)) {
      res.status(401).json({});
    } else {
      res.status(200).json({});
    }
  });
};
