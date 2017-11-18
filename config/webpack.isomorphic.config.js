const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const VueSSRPlugin = require('vue-ssr-webpack-plugin');

const isomorphicConfig = merge(baseConfig, {
  target: 'node',
  entry: { isomorphic: './src/server/isomorphic' },
  output: {
    path: path.join(__dirname, '..', 'dist', 'server'),
    filename: 'isomorphic.js',
    libraryTarget: 'commonjs2',
    publicPath: '/client/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    }),
    new VueSSRPlugin()
  ]
});

module.exports = isomorphicConfig;
