import * as express from 'express';
import * as helmet from 'helmet';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';
import { DemoRoutes } from './routes/DemoRoutes';
import { CounterRoutes } from './routes/CounterRoutes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  helmet({
    contentSecurityPolicy: false,
  }),
);
app.use(compression({ threshold: 0 }));

/**
 * TODO: routes to demonstrate the possibilities of vuesion
 * can be removed if you don't need them in your application
 */
CounterRoutes(app);
DemoRoutes(app);

module.exports = {
  path: '/',
  handler: app,
};
