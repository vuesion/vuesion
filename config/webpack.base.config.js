const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';

const baseConfig = {
  stats:   {
    assets:   true,
    children: true,
  },
  devtool: isProd ? false : '#eval-source-map',
  resolve: {
    extensions: ['*', '.ts', '.js', '.vue', '.json', '.node', '.scss'],
    modules:    [
      path.join(__dirname, '..', 'src'),
      path.join(__dirname, '..', 'node_modules'),
    ],
  },
  module:  {
    rules: [
      {
        test:    /\.ts$/,
        loader:  'ts-loader',
        include: [path.join(__dirname, '..', 'src')],
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly:    true,
        },
      },
      {
        test:   /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.scss$/,
        use:  [
          'vue-style-loader',
          {
            loader:  'css-loader',
            options: {
              modules:        true,
              importLoaders:  1,
              localIdentName: '[local]_[hash:base64:8]',
            },
          },
          {
            loader:  'postcss-loader',
            options: {
              ident:   'postcss',
              plugins: () => [
                require('autoprefixer')({ browsers: ['last 2 versions', 'ie >= 11'] }),
                require('css-mqpacker')(),
                require('cssnano')({
                                     discardComments: {
                                       removeAll: true,
                                     },
                                     zindex:          false,
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
        test: /\.sass$/,
        use:  [
          'vue-style-loader',
          {
            loader:  'css-loader',
            options: {
              modules:        true,
              importLoaders:  1,
              localIdentName: '[local]_[hash:base64:8]',
            },
          },
          {
            loader:  'postcss-loader',
            options: {
              ident:   'postcss',
              plugins: () => [
                require('autoprefixer')({ browsers: ['last 2 versions', 'ie >= 11'] }),
                require('css-mqpacker')(),
                require('cssnano')({
                                     discardComments: {
                                       removeAll: true,
                                     },
                                     zindex:          false,
                                   }),
              ],
            },
          },
          {
            loader:  'sass-loader',
            options: {
              indentedSyntax: true,
            },
          },
        ],
      },
      {
        test:    /\.(?:jpg|png|svg|ttf|woff2?|eot|ico)$/,
        loader:  'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({ PRODUCTION: isProd, DEVELOPMENT: !isProd, TEST: false }),
    new ForkTsCheckerWebpackPlugin({ tslint: true, vue: true }),
  ],
};

if (process.env.ANALYZE) {
  baseConfig.plugins.push(
    new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
  );
}

module.exports = baseConfig;
