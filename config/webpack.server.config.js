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
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"',
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
