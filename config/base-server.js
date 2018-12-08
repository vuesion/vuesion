const webpack = require('webpack');
const utils = require('./utils');
const base = require('./base');

const devServer = utils.merge(base, {
  target: 'node',
  output: {
    path: utils.resolve('dist/server'),
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

module.exports = devServer;
