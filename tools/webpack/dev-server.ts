import * as webpack from 'webpack';
import { merge, nodeExternals } from './utils';
import { baseServer } from './base-server';

export const devServer: webpack.Configuration = merge(baseServer, {
  entry: {
    'dev-server': './src/server/dev/server',
  },
  output: {
    filename: 'dev-server.js',
  },
  externals: [nodeExternals()],
});

export default devServer;
