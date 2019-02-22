const webpack = require('webpack');
const base = require('../../node_modules/@vuesion/service/dist/webpack/config/base').default;

module.exports = (storybookBaseConfig, env, defaultConfig) => {
  const config = defaultConfig;

  config.resolve = base.resolve;
  config.module.rules = base.module.rules;

  config.plugins.push(new webpack.DefinePlugin({ PRODUCTION: false, DEVELOPMENT: true, CLIENT: true, TEST: true }));

  return config;
};
