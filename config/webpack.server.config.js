const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const serverConfig = merge(baseConfig, {
  target: 'node',
  entry: {
    'server': './src/server/index'
  },
  output: {
    path: path.join(__dirname, '..', 'dist', 'server'),
    filename: 'server.js',
    libraryTarget: 'commonjs'
  },
  externals: Object.keys(require('../package.json').dependencies),
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
  }

});

module.exports = serverConfig;
