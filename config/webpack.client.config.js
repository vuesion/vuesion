const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const HTMLPlugin = require('html-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const clientConfig = merge(baseConfig, {
  entry:   {
    app: './src/client/index',
  },
  output:  {
    path:          path.join(__dirname, '..', 'dist', 'client'),
    filename:      '[name].[chunkHash].js',
    publicPath:    '/client/',
    chunkFilename: '[name].[id].[chunkhash].js',
  },
  plugins: [
    new webpack.DefinePlugin({
                               CLIENT: true,
                               SERVER: false,
                             }),
    new webpack.optimize.CommonsChunkPlugin({
                                              name:      'vendor',
                                              minChunks: (module) => {
                                                return module.context && module.context.includes('node_modules');
                                              },
                                            }),
    new webpack.optimize.CommonsChunkPlugin('manifest'),
    new HTMLPlugin({
                     template: 'src/app/index.template.html',
                   }),
  ],
});

if (process.env.NODE_ENV === 'production') {
  clientConfig.plugins = (clientConfig.plugins || []).concat([
                                                               new webpack.optimize.UglifyJsPlugin({
                                                                                                     parallel:      4,
                                                                                                     uglifyOptions: {
                                                                                                       compress: {
                                                                                                         arrows:         false,
                                                                                                         booleans:       false,
                                                                                                         cascade:        false,
                                                                                                         collapse_vars:  false,
                                                                                                         comparisons:    false,
                                                                                                         computed_props: false,
                                                                                                         hoist_funs:     false,
                                                                                                         hoist_props:    false,
                                                                                                         hoist_vars:     false,
                                                                                                         if_return:      false,
                                                                                                         inline:         false,
                                                                                                         join_vars:      false,
                                                                                                         keep_infinity:  true,
                                                                                                         loops:          false,
                                                                                                         negate_iife:    false,
                                                                                                         properties:     false,
                                                                                                         reduce_funcs:   false,
                                                                                                         reduce_vars:    false,
                                                                                                         sequences:      false,
                                                                                                         side_effects:   false,
                                                                                                         switches:       false,
                                                                                                         top_retain:     false,
                                                                                                         toplevel:       false,
                                                                                                         typeofs:        false,
                                                                                                         unused:         false,
                                                                                                         conditionals:   true,
                                                                                                         dead_code:      true,
                                                                                                         evaluate:       true,
                                                                                                       },
                                                                                                       mangle:   true,
                                                                                                     },
                                                                                                   }),
                                                               new webpack.LoaderOptionsPlugin({
                                                                                                 minimize: true,
                                                                                               }),
                                                               new ServiceWorkerWebpackPlugin({
                                                                                                entry: path.join(__dirname, '..', 'src/client/sw.ts'),
                                                                                              }),
                                                               new CompressionPlugin({
                                                                                       asset:     '[path].gz[query]',
                                                                                       algorithm: 'gzip',
                                                                                       test:      /\.js$|\.css$|\.html$/,
                                                                                       threshold: 0,
                                                                                       minRatio:  1,
                                                                                     }),
                                                             ]);
}

module.exports = clientConfig;
