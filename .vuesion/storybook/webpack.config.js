const path = require('path');
const webpack = require('webpack');
const base = require('@vuesion/webpack/dist/config/base').default;

module.exports = ({ config }) => {
  config.resolve.extensions = [...config.resolve.extensions, ...base.resolve.extensions];
  config.resolve.modules = [...config.resolve.modules, ...base.resolve.modules];
  config.resolve.alias = { ...config.resolve.alias, ...base.resolve.alias };
  config.module.rules = base.module.rules;
  config.performance = {
    hints: false,
  };

  config.plugins.push(new webpack.DefinePlugin({ PRODUCTION: false, DEVELOPMENT: true, CLIENT: true, TEST: true }));

  config.module.rules.push({
    test: /\.vue$/,
    loader: 'vue-docgen-loader',
    enforce: 'post',
  });

  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: { parser: 'typescript' },
      },
    ],
    enforce: 'pre',
  });

  config.resolve.alias['@'] = path.join(path.dirname(path.resolve(__dirname)), '../src');
  config.resolve.alias['@shared'] = path.join(path.dirname(path.resolve(__dirname)), '../src/components');
  config.resolve.alias['@components'] = path.join(path.dirname(path.resolve(__dirname)), '../src/components');
  config.resolve.alias['@static'] = path.join(path.dirname(path.resolve(__dirname)), '../src/static');

  return config;
};
