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
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  features: {
    storyStoreV7: true,
  },
  managerHead: (head) => {
    const base = process.env.STORYBOOK_BASE_PATH || null;
    const injections = [
      `<link rel="shortcut icon" type="image/x-icon" href="${base}favicon.ico">`,
      `<script>window.PREVIEW_URL = '${base}iframe.html'</script>`,
    ];
    return base ? `${head}${injections.join('')}` : head;
  },
  managerWebpack: async (config) => {
    config.output.publicPath = process.env.STORYBOOK_BASE_PATH || config.output.publicPath;
    return config;
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
    // used for prod deployment to serve storybook in a subdirectory
    config.base = process.env.STORYBOOK_BASE_PATH || config.base;
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
  docs: {
    autodocs: false,
  },
};
