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
app.use(helmet());
app.use(compression({ threshold: 0 }));

CounterRoutes(app);
DemoRoutes(app);

// Export the server middleware
module.exports = {
  path: '/',
  handler: app,
};
