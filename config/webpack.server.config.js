const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');
const baseConfig = require('./webpack.base.config');

let serverConfig = merge(baseConfig, {
  target:    'node',
  entry:     [
    './src/server/index',
  ],
  output:    {
    path:          path.join(__dirname, '..', 'dist', 'server'),
    filename:      'server.js',
    libraryTarget: 'commonjs',
  },
  externals: [
    nodeExternals({
                    whitelist: ['webpack/hot/poll?1000'],
                  }),
  ],
  plugins:   [
    new webpack.DefinePlugin({ CLIENT: false, SERVER: true, nodeRequire: 'function(module){return require(module);}' }),
    new CopyWebpackPlugin([
                            { from: 'src/static', to: '../static' },
                            { from: 'src/app/config/*.json', to: '../app/config', flatten: true },
                          ]),
  ],
  node:      {
    global:     true,
    __dirname:  false,
    __filename: true,
    process:    true,
    Buffer:     false,
    fs:         'empty',
    net:        'empty',
    tls:        'empty',
  },

});

if (process.env.NODE_ENV === 'development') {
  serverConfig = merge(serverConfig, {
    watch:   true,
    entry:   ['webpack/hot/poll?1000'],
    plugins: [
      new StartServerPlugin({
                              name:     'server.js',
                              nodeArgs: ['--inspect'],
                            }),
      new webpack.HotModuleReplacementPlugin(),
    ],
  });
}

module.exports = serverConfig;
