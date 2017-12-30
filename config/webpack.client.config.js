const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const HTMLPlugin = require('html-webpack-plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const clientConfig = merge(baseConfig, {
  entry: {
    app: './src/client/index'
  },
  output: {
    path: path.join(__dirname, '..', 'dist', 'client'),
    filename: '[name].[chunkHash].js',
    publicPath: '/client/'
  },
  plugins: [
    new webpack.DefinePlugin({
      CLIENT: true,
      SERVER: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => module.context && module.context.indexOf('node_modules') !== -1
    }),
    new webpack.optimize.CommonsChunkPlugin('manifest'),
    new VueSSRClientPlugin(),
    new HTMLPlugin({
      template: 'src/app/index.template.html'
    }),
  ]
});

if (process.env.NODE_ENV === 'production') {
  clientConfig.plugins = (clientConfig.plugins || []).concat([
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.join(__dirname, '..', 'src/client/sw.ts'),
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 0,
      minRatio: 1
    }),
  ]);
}

module.exports = clientConfig;
