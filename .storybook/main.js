const { mergeConfig } = require('vite');
const path = require('path');
const vue = require('@vitejs/plugin-vue');
module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../src/public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@vuesion/storybook-theme-switcher',
    '@storybook/addon-mdx-gfm',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  core: { disableTelemetry: true },
  docs: {
    autodocs: false,
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config, { configType }) {
    const vueIdx = config.plugins.findIndex((plugin) => plugin.name === 'vite:vue');
    config.plugins.splice(
      vueIdx,
      1,
      vue({
        template: {
          transformAssetUrls: {
            includeAbsolute: false,
          },
        },
      }),
    );
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
