import * as webpack from 'webpack';
import { client } from './client';
import { merge } from './utils';

const HTMLPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

client.plugins.unshift(new webpack.DefinePlugin({ CLIENT: true, SERVER: false, TEST: true }));

export const spa = merge(client, {
  plugins: [
    new HTMLPlugin({
      filename: '../index.html',
      template: 'src/index.template.html',
      spa: true,
    }),
    new CopyWebpackPlugin([
      { from: 'src/static', to: '../' },
      { from: 'i18n', to: '../i18n' },
      { from: 'src/static/logo.png', to: '../favicon.png' },
    ]),
  ],
});

export default spa;
