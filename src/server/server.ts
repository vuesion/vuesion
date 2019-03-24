import * as Express from 'express';
import { applyMiddlewares } from './middlewares';
import { DemoRoutes } from './routes/DemoRoutes';
import { CounterRoutes } from './routes/CounterRoutes';
import { StaticRoutes } from './routes/StaticRoutes';
import { SSRRoutes } from './routes/SSRRoutes';

export const app: Express.Application = Express();

app.disable('x-powered-by');

applyMiddlewares(app);

/**
 * routes to demonstrate the possibilities of vuesion
 * can be removed if you don't need them in your application
 */
DemoRoutes(app);
CounterRoutes(app);

/**
 * core routes, don't delete these
 */
StaticRoutes(app);
SSRRoutes(app);
