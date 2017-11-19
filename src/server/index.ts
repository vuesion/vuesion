/* tslint:disable:no-console */

import * as fs from 'fs';
import * as path from 'path';
import * as Express from 'express';
import * as favicon from 'serve-favicon';

const resolve = (file: string) => path.resolve(__dirname, file);
const isProd = process.env.NODE_ENV === 'production';
const app = Express();

function createRenderer(bundle: string, template: string) {
  return nodeRequire('vue-server-renderer').createBundleRenderer(bundle, {
    template,
    cache: nodeRequire('lru-cache')({
      max: 1000,
      maxAge: 1000 * 60 * 15,
    }),
  });
}

let renderer: any;
if (isProd) {
  const bundle = nodeRequire('../../dist/server/vue-ssr-bundle.json');
  const template = fs.readFileSync(resolve('../../dist/client/index.html'), 'utf-8');
  renderer = createRenderer(bundle, template);
} else {
  const devServer = nodeRequire('../../dist/server/dev-server.js').default;
  devServer(app, (bundle: string, template: string) => {
    renderer = createRenderer(bundle, template);
  });
}

const serve = (servePath: string, cache: boolean) => Express.static(resolve(servePath), {
  maxAge: cache && isProd ? 60 * 60 * 24 * 30 : 0,
});

app.use('/i18n', serve('../../i18n', false));
app.use('/client', serve('../../dist/client', true));
app.use(favicon(path.resolve(__dirname, '../client/assets/logo.png')));

app.get('*', (req, res) => {
  if (!renderer) {
    return res.end('waiting for compilation... refresh in a moment.');
  }

  const s = Date.now();

  res.setHeader('Content-Type', 'text/html');

  const errorHandler = (err: any) => {
    if (err && err.code === 404) {
      res.status(404).end('404 | Page Not Found');
    } else {
      res.status(500).end('500 | Internal Server Error');
      console.error(`error during render : ${req.url}`);
      console.error(err);
    }
  };

  renderer.renderToStream({ url: req.url })
    .on('error', errorHandler)
    .on('end', () => console.log(`whole request: ${Date.now() - s}ms`))
    .pipe(res);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
