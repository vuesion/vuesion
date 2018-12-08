const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const utils = require('./utils');
const base = require('./base');

const client = utils.merge(base, {
  entry: {
    app: './src/client/index',
  },
  output: {
    path: utils.resolve('dist/client'),
    filename: '[name].[chunkHash].js',
    publicPath: '/client/',
    chunkFilename: '[name].[id].[chunkhash].js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
    runtimeChunk: 'single',
  },
  performance: {
    hints: 'warning',
    maxEntrypointSize: 318000,
    maxAssetSize: 267000,
  },
  plugins: [
    new webpack.DefinePlugin({ CLIENT: true, SERVER: false }),
    new HTMLPlugin({ template: 'src/index.template.html', spa: false }),
  ],
});

if (utils.isProd) {
  client.plugins = (client.plugins || []).concat([
    new ServiceWorkerWebpackPlugin({ entry: utils.resolve('src/client/sw.ts') }),
    new CompressionPlugin({ algorithm: 'gzip', test: /\.js$|\.css$|\.html$/, threshold: 0, minRatio: 1 }),
  ]);
  client.performance.hints = 'error';
}

module.exports = client;
