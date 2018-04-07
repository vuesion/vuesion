import * as Express      from 'express';
import * as cookieParser from 'cookie-parser';
import * as compression  from 'compression';

export const applyMiddlewares = (app: Express.Application) => {
  app.use(cookieParser());
  app.use(compression({ threshold: 0 }));
};
