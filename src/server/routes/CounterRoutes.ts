import * as Express          from 'express';
import { Request, Response } from 'express';

export const CounterRoutes = (app: Express.Application) => {
  app.put('/counter/increment', (req: Request, res: Response) => {
    setTimeout(() => {
      res
      .status(200)
      .json({ count: parseInt(req.body.count, 10) + 1 });
    }, 200);
  });

  app.put('/counter/decrement', (req: Request, res: Response) => {
    setTimeout(() => {
      res
      .status(200)
      .json({ count: parseInt(req.body.count, 10) - 1 });
    }, 200);
  });
};
