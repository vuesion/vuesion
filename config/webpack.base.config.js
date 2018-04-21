const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const isProd = process.env.NODE_ENV === 'production';

const baseConfig = {
  stats:   {
    assets:   true,
    children: true,
  },
  devtool: isProd ? false : '#eval-source-map',
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json', '.node', '.scss'],
    modules:    [
      path.join(__dirname, '..', 'src'),
      path.join(__dirname, '..', 'node_modules'),
    ],
  },
  plugins: [
    new webpack.DefinePlugin({ PRODUCTION: isProd, DEVELOPMENT: !isProd, TEST: false }),
  ],
  module:  {
    rules: [
      {
        test:    /\.vue$/,
        loader:  'vue-loader',
        options: {
          cssModules: {
            localIdentName: '[local]-[hash:base64:5]',
            camelCase:      true,
          },
          loaders:    {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
          },
          postcss:    [
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
        test:    /\.ts?$/,
        loader:  'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly:    !isProd,
        },
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
};

if (process.env.ANALYZE) {
  baseConfig.plugins.push(
    new BundleAnalyzerPlugin({
                               analyzerMode: 'static',
                             }),
  );
}

module.exports = baseConfig;
