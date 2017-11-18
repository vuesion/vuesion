const path = require('path');
const webpack = require('webpack');

module.exports = {
  stats: {
    assets: true,
    children: true,
  },
  devtool: process.env.NODE_ENV === 'production' ? '#source-map' :'#eval-source-map',
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json', '.node', '.scss'],
    modules: [
      path.join(__dirname, '..', 'src'),
      path.join(__dirname, '..', 'node_modules')
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(true)
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      },
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.(?:jpg|png|svg|ttf|woff2?|eot|ico)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  }
};
