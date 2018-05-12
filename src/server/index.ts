import * as Express         from 'express';
import { Logger }           from './utils/Logger';
import { applyMiddlewares } from './middlewares';
import { DemoRoutes }       from './routes/DemoRoutes';
import { CounterRoutes }    from './routes/CounterRoutes';
import { StaticRoutes }     from './routes/StaticRoutes';
import { SSRRoutes }        from './routes/SSRRoutes';

const app: Express.Application = Express();
const port: string = process.env.PORT || '3000';

app.disable('x-powered-by');

applyMiddlewares(app);

/**
 * routes to demonstrate the possibilities of the vue-starter
 * can be removed if you don't need them in your application
 */
DemoRoutes(app);
CounterRoutes(app);

/**
 * core routes, don't delete these
 */
StaticRoutes(app);
SSRRoutes(app);

app.listen(port, () => {
  Logger.info(`server started at http://localhost:${port}`);
});
