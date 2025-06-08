const { mergeConfig } = require('vite');
const path = require('path');
const vue = require('@vitejs/plugin-vue');
module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../src/public'],
  addons: ['@storybook/addon-links', '@storybook/addon-themes', '@storybook/addon-a11y', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  core: { disableTelemetry: true },
  docs: {},
  features: {},
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
      css: {
        preprocessorOptions: {
          scss: {
            api: 'modern-compiler',
          },
        },
      },
      optimizeDeps: {
        include: [
          '@storybook/addon-links',
          '@storybook/addon-interactions',
          'storybook/actions',
          'storybook/backgrounds',
          '@storybook/addon-a11y',
        ],
      },
      resolve: {
        alias: {
          '~~': path.resolve(path.dirname(__dirname)),
          '~': path.resolve(path.dirname(__dirname), 'src'),
          assets: path.resolve(path.dirname(__dirname), 'src/assets'),
          public: path.resolve(path.dirname(__dirname), 'src/public'),
        },
      },
    });
  },
};
