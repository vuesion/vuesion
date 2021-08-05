import * as path from 'path';
import * as express from 'express';
import axios from 'axios';
import { getIntInRange } from '@vuesion/utils/dist/randomGenerator';

const isProd: boolean = process.env.NODE_ENV === 'production';
const getErrorWithProbability = (probability: number) => getIntInRange(0, 100) <= probability;
const resolve = (file: string): string => path.resolve(__dirname, file);
const serve = (servePath: string, cache = true): express.Handler =>
  express.static(resolve(servePath), {
    maxAge: cache && isProd ? '4w' : 0,
  });

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
  app.use('/storybook', serve('../../../storybook-static'));
  app.use('/docs', (_: express.Request, res: express.Response) => {
    res.status(301).redirect('https://vuesion.github.io/docs/en/');
  });

  /**
   * Auth-Demo
   */
  app.post('/auth/token', (_: express.Request, res: express.Response) => {
    if (getErrorWithProbability(10)) {
      res.status(500).json({});
    } else {
      res.status(200).json({ access_token: 'accessToken1', refresh_token: 'refreshToken1' });
    }
  });

  app.post('/auth/refresh', (_: express.Request, res: express.Response) => {
    if (getErrorWithProbability(10)) {
      res.status(500).json({});
    } else {
      res.status(200).json({ access_token: 'accessToken2', refresh_token: 'refreshToken2' });
    }
  });

  app.post('/auth/logout', (_: express.Request, res: express.Response) => {
    res.status(200).json({});
  });

  app.get('/auth/user', (_: express.Request, res: express.Response) => {
    res.status(200).json({
      user: {
        name: 'Johannes Werner',
        email: 'johannes.werner@hey.com',
      },
    });
  });

  app.get('/protected', (_: express.Request, res: express.Response) => {
    if (getErrorWithProbability(40)) {
      res.status(401).json({ message: 'access token invalid' });
    } else {
      res.status(200).json({ message: 'Hey! it seems that you try out vuesion, I hope you like it. Cheers, Johannes' });
    }
  });

  /**
   * Github api
   */

  app.get('/github-info', async (_: express.Request, res: express.Response) => {
    const authorization =
      'Basic ' + Buffer.from(`${process.env.GITHUB_USER}:${process.env.GITHUB_TOKEN}`, 'binary').toString('base64');

    try {
      const stargazerCountRes = await axios.get('https://api.github.com/repos/vuesion/vuesion', {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          'User-Agent': 'request',
          Authorization: authorization,
        },
      });
      const stargazersCount = parseInt(stargazerCountRes.data.stargazers_count, 10);
      const stargazersRes = await axios.get(
        `https://api.github.com/repos/vuesion/vuesion/stargazers?per_page=150&page=${getIntInRange(
          1,
          Math.floor(stargazersCount / 100),
        )}`,
        {
          headers: {
            Accept: 'application/vnd.github.v3+json',
            'User-Agent': 'request',
            Authorization: authorization,
          },
        },
      );

      res.status(200).json({
        stargazersCount,
        stargazers: stargazersRes.data,
      });
    } catch (e) {
      console.log(e); // eslint-disable-line
      res.status(200).json({
        stargazersCount: 0,
        stargazers: [],
      });
    }
  });
};
