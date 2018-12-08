const path = require('path');
const webpack = require('webpack');
const baseConfig = require('../config/webpack.base.config');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = (storybookBaseConfig, env, defaultConfig) => {
  const config = defaultConfig;

  config.resolve.extensions.push('.ts', '.js', '.vue', '.json', '.node', '.scss');

  const resolve = (dir) => {
    return path.join(__dirname, '..', dir);
  };

  config.resolve.alias = {
    vue$: 'vue/dist/vue.esm.js',
    '@': resolve('src'),
  };

  config.resolve.modules.push(path.join(resolve('src')), path.join(resolve('node_modules')));

  config.module.rules = baseConfig.module.rules;

  config.plugins.push(new webpack.DefinePlugin({ PRODUCTION: false, DEVELOPMENT: true, CLIENT: true, TEST: true }));
  config.plugins.push(new ForkTsCheckerWebpackPlugin({ tslint: true, vue: true }));

  return config;
};
