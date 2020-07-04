/**
 * modify webpack config
 * @param {webpack.Configuration} config - webpack config
 * @param {string} target - build target, can  be "client" or "server"
 * @returns {*}
 */
const isProd = process.env.NODE_ENV === 'production';

module.exports = (config, target) => {
  if (target === 'client' && isProd) {
    config.performance = {
      hints: 'warning',
      maxEntrypointSize: 400000,
      maxAssetSize: 300000,
    };
  }

  return config;
};
