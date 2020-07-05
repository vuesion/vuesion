const path = require('path');
const runtimeRoot = require('@vuesion/utils/dist/path').runtimeRoot;
const packagesRoot = require('@vuesion/utils/dist/path').packagesRoot;

module.exports = ({ config }) => {
  config.resolve.extensions = [...config.resolve.extensions, ...['.ts', '.js', '.vue', '.json', '.node']];

  config.module.exprContextCritical = false;

  config.module.rules = [
    {
      test: /\.ts$/,
      loader: 'ts-loader',
      include: [runtimeRoot('src'), packagesRoot('service', 'src/webpack/dev')],
      exclude: /node_modules/,
      options: {
        appendTsSuffixTo: [/\.vue$/],
        transpileOnly: true,
      },
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader',
    },
    {
      test: /\.scss$/,
      oneOf: [
        {
          resourceQuery: /module/,
          use: [
            'vue-style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => [
                  require('autoprefixer')(),
                  require('css-mqpacker')(),
                  require('cssnano')({
                    preset: [
                      'default',
                      {
                        discardComments: {
                          removeAll: true,
                        },
                        zindex: false,
                        normalizeWhitespace: false,
                      },
                    ],
                  }),
                ],
              },
            },
            'sass-loader',
          ],
        },
        {
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => [
                  require('autoprefixer')(),
                  require('css-mqpacker')(),
                  require('cssnano')({
                    preset: [
                      'default',
                      {
                        discardComments: {
                          removeAll: true,
                        },
                        zindex: false,
                        normalizeWhitespace: false,
                      },
                    ],
                  }),
                ],
              },
            },
            'sass-loader',
          ],
        },
      ],
    },
    {
      test: /\.(?:jpg|png|svg|ttf|woff2?|eot|ico)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]?[hash]',
      },
    },
    {
      test: /\.css$/,
      loader: ['vue-style-loader', 'css-loader'],
    },
    {
      test: /\.vue$/,
      loader: 'vue-docgen-loader',
      enforce: 'post',
    },
    {
      test: /\.stories\.tsx?$/,
      loaders: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: { parser: 'typescript' },
        },
      ],
      enforce: 'pre',
    },
  ];

  config.performance = {
    hints: false,
  };

  config.resolve.alias['@'] = path.join(path.dirname(path.resolve(__dirname)), '../src');
  config.resolve.alias['@assets'] = path.join(path.dirname(path.resolve(__dirname)), '../src/assets');
  config.resolve.alias['@components'] = path.join(path.dirname(path.resolve(__dirname)), '../src/components');
  config.resolve.alias['@composables'] = path.join(path.dirname(path.resolve(__dirname)), '../src/composables');
  config.resolve.alias['@plugins'] = path.join(path.dirname(path.resolve(__dirname)), '../src/plugins');
  config.resolve.alias['@static'] = path.join(path.dirname(path.resolve(__dirname)), '../src/static');
  config.resolve.alias['@store'] = path.join(path.dirname(path.resolve(__dirname)), '../src/store');

  return config;
};
