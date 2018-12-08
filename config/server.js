const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const StartServerPlugin = require('start-server-webpack-plugin');
const utils = require('./utils');
const base = require('./base-server');

let server = utils.merge(base, {
  entry: ['./src/server/index'],
  output: {
    filename: 'server.js',
  },
  externals: [
    utils.nodeExternals({
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

if (utils.isDev) {
  server = utils.merge(server, {
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

module.exports = server;
