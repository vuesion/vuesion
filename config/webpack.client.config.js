const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const HTMLPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"client"'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => module.context && module.context.indexOf('node_modules') !== -1
    }),
    new HTMLPlugin({
      template: 'src/app/index.template.html'
    }),
    new CopyWebpackPlugin([{ from: 'src/client/assets', to: 'assets' }]),
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
    })
  ]);
}

module.exports = clientConfig;
