const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = (storybookBaseConfig, env, defaultConfig) => {
  const config = defaultConfig;

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
      test:    /\.ts$/,
      loader:  'ts-loader',
      include: [path.join(__dirname, '..', 'src')],
      exclude: /node_modules/,
      options: {
        appendTsSuffixTo: [/\.vue$/],
        transpileOnly:    true,
      },
    },
    {
      test:   /\.vue$/,
      loader: 'vue-loader',
    },
    {
      test: /\.scss$/,
      use:  [
        'vue-style-loader',
        {
          loader:  'css-loader',
          options: {
            modules:        true,
            importLoaders:  1,
            localIdentName: '[local]_[hash:base64:8]',
          },
        },
        {
          loader:  'postcss-loader',
          options: {
            ident:   'postcss',
            plugins: () => [
              require('autoprefixer')({ browsers: ['last 2 versions', 'ie >= 11'] }),
              require('css-mqpacker')(),
              require('cssnano')({
                                   discardComments: {
                                     removeAll: true,
                                   },
                                   zindex:          false,
                                 }),
            ],
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
            importLoaders:  1,
            localIdentName: '[local]_[hash:base64:8]',
          },
        },
        {
          loader:  'postcss-loader',
          options: {
            ident:   'postcss',
            plugins: () => [
              require('autoprefixer')({ browsers: ['last 2 versions', 'ie >= 11'] }),
              require('css-mqpacker')(),
              require('cssnano')({
                                   discardComments: {
                                     removeAll: true,
                                   },
                                   zindex:          false,
                                 }),
            ],
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
  config.plugins.push(new ForkTsCheckerWebpackPlugin({ tslint: true, vue: true }));

  return config;
};
