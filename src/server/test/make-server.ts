// tests/server/helpers/make-server.ts
import { createApp, eventHandler, toNodeListener } from 'h3';

export function makeServer(route: string, handler: any) {
  const app = createApp();
  app.use(route, eventHandler(handler));
  return toNodeListener(app);
}
