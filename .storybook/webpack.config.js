const webpack = require('webpack');
const base = require('../tools/webpack/base').default;
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = (storybookBaseConfig, env, defaultConfig) => {
  const config = defaultConfig;

  config.resolve = base.resolve;
  config.module.rules = base.module.rules;

  config.plugins.push(new webpack.DefinePlugin({ PRODUCTION: false, DEVELOPMENT: true, CLIENT: true, TEST: true }));
  config.plugins.push(new ForkTsCheckerWebpackPlugin({ tslint: true, vue: true }));

  return config;
};
