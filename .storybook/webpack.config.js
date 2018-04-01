const path = require('path');

module.exports = (storybookBaseConfig) => {
  const config = storybookBaseConfig;

  config.resolve.extensions.push('.ts', '.js', '.vue', '.json', '.node', '.scss');

  const resolve = (dir) => {
    return path.join(__dirname, '..', dir);
  };

  config.resolve.alias = {
    'vue$': 'vue/dist/vue.esm.js',
    '@': resolve('src')
  };

  config.resolve.modules.push(
    path.join(resolve('src')),
    path.join(resolve('node_modules'))
  );

  config.module.rules = [{
    test: /\.css$/,
    use: [
      'vue-style-loader',
      'css-loader'
    ],
  },      {
    test: /\.vue$/,
    loader: 'vue-loader'
  },
  {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/
  },
  {
    test: /\.(png|jpg|gif|svg)$/,
    loader: 'file-loader',
    options: {
      name: '[name].[ext]?[hash]'
    }
  },
  {
    test: /\.ts?$/,
    loader: 'ts-loader',
    exclude: [resolve('node_modules')],
    options: {
      appendTsSuffixTo: [/\.vue$/],
      transpileOnly: true
    }
  }]

  return config;
};
