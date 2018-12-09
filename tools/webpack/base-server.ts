import * as webpack from 'webpack';
import { merge, resolve } from './utils';
import { base } from './base';

export const baseServer: webpack.Configuration = merge(base, {
  target: 'node',
  output: {
    path: resolve('dist/server'),
    libraryTarget: 'commonjs',
  },
  plugins: [
    new webpack.DefinePlugin({
      CLIENT: false,
      SERVER: true,
      nodeRequire: 'function(module){return require(module);}',
    }),
  ],
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: false,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
});

export default baseServer;
