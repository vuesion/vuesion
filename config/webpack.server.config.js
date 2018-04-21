const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const baseConfig = require('./webpack.base.config');

const serverConfig = merge(baseConfig, {
  target:    'node',
  entry:     {
    'server': './src/server/index',
  },
  output:    {
    path:          path.join(__dirname, '..', 'dist', 'server'),
    filename:      'server.js',
    libraryTarget: 'commonjs',
  },
  externals: Object.keys(require('../package.json').dependencies),
  plugins:   [
    new webpack.DefinePlugin({
                               CLIENT:      false,
                               SERVER:      true,
                               nodeRequire: 'function(module){return require(module);}',
                             }),
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

module.exports = serverConfig;
