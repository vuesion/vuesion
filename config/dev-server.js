const utils = require('./utils');
const base = require('./base-server');

const devServer = utils.merge(base, {
  entry: {
    'dev-server': './src/server/dev/server',
  },
  output: {
    filename: 'dev-server.js',
  },
  externals: [utils.nodeExternals()],
});

module.exports = devServer;
