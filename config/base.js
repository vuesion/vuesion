const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const utils = require('./utils');

const baseConfig = {
  stats: {
    assets: true,
    children: true,
  },
  devtool: utils.isProd ? false : '#eval-source-map',
  resolve: {
    extensions: ['*', '.ts', '.js', '.vue', '.json'],
    modules: [utils.resolve('src'), utils.resolve('node_modules')],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': utils.resolve('src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        include: [utils.resolve('src')],
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true,
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[local]_[hash:base64:8]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('autoprefixer')({ browsers: ['last 2 versions', 'ie >= 11'] }),
                require('css-mqpacker')(),
                require('cssnano')({
                  discardComments: {
                    removeAll: true,
                  },
                  zindex: false,
                }),
              ],
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(?:jpg|png|svg|ttf|woff2?|eot|ico)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({ PRODUCTION: utils.isProd, DEVELOPMENT: utils.isDev, TEST: false }),
    new ForkTsCheckerWebpackPlugin({ tslint: true, vue: true }),
  ],
};

if (utils.analyze) {
  baseConfig.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'static' }));
}

module.exports = baseConfig;
