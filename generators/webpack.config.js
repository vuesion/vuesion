const path = require('path');
const webpack = require('webpack');

const generatorsConfig = {
  target: 'node',
  resolve: {
    extensions: ['.ts', '.js', '.json', '.node'],
    modules: [
      path.join(__dirname, '..', 'src'),
      path.join(__dirname, '..', 'node_modules')
    ]
  },
  entry: {
    'index': './generators/index'
  },
  output: {
    path: path.join(__dirname),
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  externals: Object.keys(require('../package.json').dependencies),
  plugins: [],
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = generatorsConfig;
