const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = (storybookBaseConfig) => {
  const config = storybookBaseConfig;

  config.resolve.extensions.push('.ts', '.js', '.vue', '.json', '.node', '.scss');

  const resolve = (dir) => {
    return path.join(__dirname, '..', dir);
  };

  config.resolve.alias = {
    'vue$': 'vue/dist/vue.esm.js',
    '@':    resolve('src'),
  };

  config.resolve.modules.push(
    path.join(resolve('src')),
    path.join(resolve('node_modules')),
  );

  config.module.rules = [
    {
      test:   /\.vue$/,
      loader: 'vue-loader',
    },
    {
      test:    /\.js$/,
      loader:  'babel-loader',
      exclude: file => (
        /node_modules/.test(file) &&
        !/\.vue\.js/.test(file)
      ),
    },
    {
      test:    /\.ts$/,
      loader:  'ts-loader',
      exclude: /node_modules/,
      options: {
        appendTsSuffixTo: [/\.vue$/],
        transpileOnly:    true,
      },
    },
    {
      test: /\.css$/,
      use:  [
        'vue-style-loader',
        'css-loader',
      ],
    },
    {
      test: /\.scss$/,
      use:  [
        'vue-style-loader',
        {
          loader:  'css-loader',
          options: {
            modules:        true,
            localIdentName: '[local]_[hash:base64:8]',
          },
        },
        {
          loader: 'sass-loader',
        },
      ],
    },
    {
      test: /\.sass$/,
      use:  [
        'vue-style-loader',
        {
          loader:  'css-loader',
          options: {
            modules:        true,
            localIdentName: '[local]_[hash:base64:8]',
          },
        },
        {
          loader:  'sass-loader',
          options: {
            indentedSyntax: true,
          },
        },
      ],
    },
    {
      test:    /\.(?:jpg|png|svg|ttf|woff2?|eot|ico)$/,
      loader:  'file-loader',
      options: {
        name: '[name].[ext]?[hash]',
      },
    },
  ];

  config.plugins.push(new webpack.DefinePlugin({ PRODUCTION: false, DEVELOPMENT: true, TEST: true }));
  config.plugins.push(new VueLoaderPlugin());

  return config;
};
