import * as webpack from 'webpack';
import { merge, nodeExternals, resolve } from './utils';
import { baseServer } from './base-server';

export const devServer: webpack.Configuration = merge(baseServer, {
  entry: {
    'dev-server': resolve('src/server/dev/server'),
  },
  output: {
    filename: 'dev-server.js',
  },
  externals: [nodeExternals()],
}) as any;

export default devServer;
