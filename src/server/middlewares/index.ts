import * as Express from 'express';
import helmet from 'helmet';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';

export const applyMiddlewares = (app: Express.Application) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(helmet());
  app.use(compression({ threshold: 0 }));
};
