const { mergeConfig } = require('vite');
const path = require('path');
const vue = require('@vitejs/plugin-vue');
module.exports = {
  stories: ['../app/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
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
          '@storybook/addon-actions',
          '@storybook/addon-backgrounds',
          '@storybook/addon-a11y',
        ],
      },
      resolve: {
        alias: {
          '~~': path.resolve(path.dirname(__dirname)),
          '~': path.resolve(path.dirname(__dirname), 'app'),
          assets: path.resolve(path.dirname(__dirname), 'app/assets'),
          public: path.resolve(path.dirname(__dirname), 'public'),
        },
      },
    });
  },
};
