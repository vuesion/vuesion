/* tslint:disable:no-console */

import * as fs from 'fs';
import * as path from 'path';
import * as Express from 'express';
import * as favicon from 'serve-favicon';

const app = Express();
const compression = require('compression');

const isProd = process.env.NODE_ENV === 'production';
const resolve = (file: string) => path.resolve(__dirname, file);
const serve = (servePath: string, cache: boolean) => Express.static(resolve(servePath), {
  maxAge: cache && isProd ? 60 * 60 * 24 * 30 : 0,
});
const createRenderer = (bundle: string, template: string, clientManifest: string) => {
  return nodeRequire('vue-server-renderer').createBundleRenderer(bundle, {
    template,
    clientManifest,
    cache: nodeRequire('lru-cache')({
      max: 1000,
      maxAge: 1000 * 60 * 15,
    }),
  });
};

let renderer: any;

if (isProd) {
  const bundle = nodeRequire('../../dist/server/vue-ssr-bundle.json');
  const template = fs.readFileSync(resolve('../../dist/client/index.html'), 'utf-8');
  const clientManifest = nodeRequire('../../dist/client/vue-ssr-client-manifest.json');

  renderer = createRenderer(bundle, template, clientManifest);
} else {
  const devServer = nodeRequire('../../dist/server/dev-server.js').default;

  devServer(app, (bundle: string, template: string, clientManifest: string) => {
    renderer = createRenderer(bundle, template, clientManifest);
  });
}

/**
 * middlewares
 */
app.use(compression());

/**
 * assets
 */
app.use('/i18n', serve('../../i18n', false));
app.use('/client', serve('../../dist/client', true));
app.use('/assets', serve('../../dist/assets', true));
app.use(favicon(path.resolve(__dirname, '../assets/logo.png')));

/**
 * PWA
 */
app.use('/browserconfig.xml', serve('../../dist/assets/pwa/browserconfig.xml', false));
app.use('/sw.js', serve('../../dist/client/sw.js', false));
app.use('/manifest.json', serve('../../dist/assets/pwa/manifest.json', false));

/**
 * SSR
 */
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
