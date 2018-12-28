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
    __dirname: false,
    __filename: false,
  },
}) as any;

export default baseServer;
