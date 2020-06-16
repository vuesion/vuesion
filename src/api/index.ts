import * as express from 'express';
import { CounterRoutes } from './routes/CounterRoutes';
import { DemoRoutes } from './routes/DemoRoutes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

CounterRoutes(app);
DemoRoutes(app);

// Export the server middleware
module.exports = {
  path: '/',
  handler: app,
};
