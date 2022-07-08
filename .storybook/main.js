const { mergeConfig } = require('vite');
const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../src/public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@vuesion/storybook-theme-switcher',
  ],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '~~': path.resolve(path.dirname(__dirname)),
          '@@': path.resolve(path.dirname(__dirname)),
          '~': path.resolve(path.dirname(__dirname), 'src'),
          '@': path.resolve(path.dirname(__dirname), 'src'),
          assets: path.resolve(path.dirname(__dirname), 'src/assets'),
          public: path.resolve(path.dirname(__dirname), 'src/public'),
        },
      },
    });
  },
};
