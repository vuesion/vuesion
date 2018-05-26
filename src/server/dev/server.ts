import * as Express             from 'express';
import { WebpackDevMiddleware } from 'webpack-dev-middleware';
import { Logger }               from '../utils/Logger';

const path = nodeRequire('path');
const webpack = nodeRequire('webpack');
const MFS = nodeRequire('memory-fs');
const clientConfig = nodeRequire('../../config/webpack.client.config');
const isomorphicConfig = nodeRequire('../../config/webpack.isomorphic.config');

let initialized: boolean = false;
let devMiddleware: WebpackDevMiddleware;
let clientCompiler: any;

export default (app: Express.Application, callback: any): void => {
  /**
   * Code for hot-reloading
   * ----------------------
   * The dev server and the webpack compilers should just be initialized once.
   * But the middlewares have to be applied every time a new app is loaded.
   */
  if (initialized) {
    app.use(devMiddleware as any);
    app.use(nodeRequire('webpack-hot-middleware')(clientCompiler));
    return;
  }

  let bundle: string;
  let template: string;

  clientConfig.entry = ['webpack-hot-middleware/client', clientConfig.entry.app];
  clientConfig.output.filename = '[name].js';
  clientConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
  clientConfig.mode = 'development';

  clientCompiler = webpack(clientConfig);
  devMiddleware = nodeRequire('webpack-dev-middleware')(clientCompiler, {
    publicPath: clientConfig.output.publicPath,
    stats:      {
      colors: true,
      chunks: false,
    },
  });

  app.use(devMiddleware as any);

  clientCompiler.plugin('done', () => {
    const fs: any = devMiddleware.fileSystem;
    const templatePath: string = path.join(clientConfig.output.path, 'index.html');

    if (fs.existsSync(templatePath)) {
      template = fs.readFileSync(templatePath, 'utf-8');

      if (bundle) {
        callback(bundle, template);
      }
    }
  });

  app.use(nodeRequire('webpack-hot-middleware')(clientCompiler));

  isomorphicConfig.mode = 'development';

  const serverCompiler: any = webpack(isomorphicConfig);
  const mfs: any = new MFS();

  serverCompiler.outputFileSystem = mfs;
  serverCompiler.watch({}, (err: any, stats: any) => {
    if (err) {
      throw err;
    }
    stats = stats.toJson();
    stats.errors.forEach((e: any) => Logger.debug('%s', JSON.stringify(err, Object.getOwnPropertyNames(e))));
    stats.warnings.forEach((e: any) => Logger.debug('%s', JSON.stringify(err, Object.getOwnPropertyNames(e))));

    const bundlePath: string = path.join(isomorphicConfig.output.path, 'vue-ssr-bundle.json');

    bundle = JSON.parse(mfs.readFileSync(bundlePath, 'utf-8'));

    if (template) {
      callback(bundle, template);
    }
  });

  initialized = true;
};
