import * as webpack from 'webpack';
import { merge, nodeExternals } from './utils';
import { baseServer } from './base-server';

const VueSSRPlugin = require('vue-ssr-webpack-plugin');

export const isomorphic: webpack.Configuration = merge(baseServer, {
  entry: { isomorphic: './src/server/isomorphic' },
  output: {
    filename: 'isomorphic.js',
    libraryTarget: 'commonjs2',
  },
  externals: [nodeExternals()],
  plugins: [new VueSSRPlugin({})],
});

export default isomorphic;
