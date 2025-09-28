import { createApp, createRouter, eventHandler, toNodeListener } from 'h3';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
type Route = { method: Method; path: string; handler: any };

export function makeServer(...routes: Route[]) {
  const app = createApp();
  const router = createRouter();

  for (const r of routes) {
    const m = r.method.toLowerCase() as Lowercase<Method>;

    router[m](r.path, eventHandler(r.handler));
  }

  app.use(router);
  return toNodeListener(app);
}
