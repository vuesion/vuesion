const VueSSRPlugin = require('vue-ssr-webpack-plugin');
const utils = require('./utils');
const base = require('./base-server');

const isomorphic = utils.merge(base, {
  entry: { isomorphic: './src/server/isomorphic' },
  output: {
    filename: 'isomorphic.js',
    libraryTarget: 'commonjs2',
  },
  externals: [utils.nodeExternals()],
  plugins: [new VueSSRPlugin({})],
});

module.exports = isomorphic;
