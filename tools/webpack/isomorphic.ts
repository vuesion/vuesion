import * as webpack from 'webpack';
import { merge, nodeExternals, resolve } from './utils';
import { baseServer } from './base-server';

const VueSSRPlugin = require('vue-ssr-webpack-plugin');

export const isomorphic: webpack.Configuration = merge(baseServer, {
  entry: { isomorphic: resolve('src/server/isomorphic') },
  output: {
    filename: 'isomorphic.js',
    libraryTarget: 'commonjs2',
  },
  externals: [nodeExternals()],
  plugins: [new VueSSRPlugin({})],
}) as any;

export default isomorphic;
