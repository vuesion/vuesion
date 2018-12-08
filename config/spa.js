const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const utils = require('./utils');
const base = require('./client');

base.plugins.unshift(new webpack.DefinePlugin({ CLIENT: true, SERVER: false, TEST: true }));

const spa = utils.merge(base, {
  plugins: [
    new HTMLPlugin({
      filename: '../index.html',
      template: 'src/index.template.html',
      spa: true,
    }),
    new CopyWebpackPlugin([
      { from: 'src/static', to: '../' },
      { from: './i18n', to: '../i18n' },
      { from: 'src/static/logo.png', to: '../favicon.png' },
    ]),
  ],
});

module.exports = spa;
