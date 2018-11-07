import http from 'http';
import { Logger } from './utils/Logger';
import { app } from './server';

const server = http.createServer(app);
const port: string = process.env.PORT || '3000';
let currentApp = app;

server.listen(port, () => {
  Logger.info(`server started at http://localhost:${port}`);
});

if (module.hot) {
  module.hot.accept('./server', () => {
    server.removeListener('request', currentApp);
    server.on('request', app);
    currentApp = app;
  });
}
