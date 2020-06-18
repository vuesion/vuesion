import * as express from 'express';

export const CounterRoutes = (app: express.Application) => {
  app.put('/counter/increment', (req: express.Request, res: express.Response) => {
    setTimeout(() => {
      res.status(200).json({ count: parseInt(req.body.count, 10) + 1 });
    }, 200);
  });

  app.put('/counter/decrement', (req: express.Request, res: express.Response) => {
    setTimeout(() => {
      res.status(200).json({ count: parseInt(req.body.count, 10) - 1 });
    }, 200);
  });
};
