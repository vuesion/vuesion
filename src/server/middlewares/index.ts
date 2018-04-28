import * as Express      from 'express';
import * as bodyParser   from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as compression  from 'compression';

export const applyMiddlewares = (app: Express.Application) => {
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(compression({ threshold: 0 }));
};
