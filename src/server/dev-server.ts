/* tslint:disable:no-console */

const path = nodeRequire('path');
const webpack = nodeRequire('webpack');
const MFS = nodeRequire('memory-fs');
const clientConfig = nodeRequire('../../config/webpack.client.config');
const isomorphicConfig = nodeRequire('../../config/webpack.isomorphic.config');

export const devServer =  (app: any, cb: any): void => {
  let bundle: string;
  let template: string;
  let clientManifest: string;

  clientConfig.entry.app = ['webpack-hot-middleware/client', clientConfig.entry.app];
  clientConfig.output.filename = '[name].js';
  clientConfig.plugins.push(new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin());

  const clientCompiler = webpack(clientConfig);
  const devMiddleware = nodeRequire('webpack-dev-middleware')(clientCompiler, {
    publicPath: clientConfig.output.publicPath,
    stats: {
      colors: true,
      chunks: false,
    },
  });

  app.use(devMiddleware);

  clientCompiler.plugin('done', () => {
    const fs = devMiddleware.fileSystem;
    const templatePath = path.join(clientConfig.output.path, 'index.html');
    const clientManifestPath = path.join(clientConfig.output.path, 'vue-ssr-client-manifest.json');

    if (fs.existsSync(templatePath) && fs.existsSync(clientManifestPath)) {
      template = fs.readFileSync(templatePath, 'utf-8');
      clientManifest = JSON.parse(fs.readFileSync(clientManifestPath, 'utf-8'));

      if (bundle) {
        cb(bundle, template, clientManifest);
      }
    }
  });

  app.use(nodeRequire('webpack-hot-middleware')(clientCompiler));

  const serverCompiler = webpack(isomorphicConfig);
  const mfs = new MFS();
  serverCompiler.outputFileSystem = mfs;
  serverCompiler.watch({}, (err: any, stats: any) => {
    if (err) {
      throw err;
    }
    stats = stats.toJson();
    stats.errors.forEach((e: any) => console.error(e));
    stats.warnings.forEach((e: any) => console.warn(e));

    const bundlePath = path.join(isomorphicConfig.output.path, 'vue-ssr-bundle.json');

    bundle = JSON.parse(mfs.readFileSync(bundlePath, 'utf-8'));

    if (template) {
      cb(bundle, template, clientManifest);
    }
  });
};
