/**
 * modify webpack config
 * @param {webpack.Configuration} config - webpack config
 * @param {string} target - build target, can  be "client" or "server"
 * @returns {*}
 */
module.exports = (config) => {
  config.performance = {
    hints: 'warning',
    maxEntrypointSize: 318000,
    maxAssetSize: 267000,
  };

  return config;
};
