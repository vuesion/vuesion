import * as webpack from 'webpack';
import { isDev, merge, nodeExternals } from './utils';
import { baseServer } from './base-server';

const CopyWebpackPlugin = require('copy-webpack-plugin');
const StartServerPlugin = require('start-server-webpack-plugin');

export let server = merge(baseServer, {
  entry: ['./src/server/index'],
  output: {
    filename: 'server.js',
  },
  externals: [
    nodeExternals({
      whitelist: ['webpack/hot/poll?1000'],
    }),
  ],
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/static', to: '../static' },
      { from: 'src/app/config/*.json', to: '../app/config', flatten: true },
    ]),
  ],
  node: {
    __dirname: false,
  },
});

if (isDev) {
  server = merge(server, {
    watch: true,
    entry: ['webpack/hot/poll?1000'],
    plugins: [
      new StartServerPlugin({
        name: 'server.js',
        nodeArgs: ['--inspect'],
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
  });
}

export default server;
