import * as Express          from 'express';
import { Request, Response } from 'express';
import { Logger }            from './utils/Logger';
import { serve }             from './utils/Utils';
import { applyMiddlewares }  from './middlewares';
import { StaticRoutes }      from './routes/StaticRoutes';
import { CounterRoutes }     from './routes/CounterRoutes';
import { SSRRoutes }         from './routes/SSRRoutes';

const app: Express.Application = Express();
const port: string = process.env.PORT || '3000';

app.disable('x-powered-by');

applyMiddlewares(app);

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

StaticRoutes(app);
CounterRoutes(app);
SSRRoutes(app);

app.listen(port, () => {
  Logger.info(`server started at http://localhost:${port}`);
});
