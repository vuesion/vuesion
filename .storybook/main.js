import { mergeConfig } from 'vite';
import { resolve as _resolve } from 'path';
import vue from '@vitejs/plugin-vue';

export const stories = ['../app/**/*.stories.@(js|jsx|ts|tsx)'];
export const staticDirs = ['../public'];
export const addons = [
  '@storybook/addon-links',
  '@storybook/addon-essentials',
  '@storybook/addon-interactions',
  '@vuesion/storybook-theme-switcher',
  '@storybook/addon-a11y',
];
export const framework = {
  name: '@storybook/vue3-vite',
  options: {},
};
export const core = {
  disableTelemetry: true,
  builder: '@storybook/builder-vite',
};
export const docs = {};
export const features = {};
export async function viteFinal(config, { configType }) {
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
        '~~': _resolve(__dirname, '../'),
        '~': _resolve(__dirname, '../'),
        app: _resolve(__dirname, '../app'),
        assets: _resolve(__dirname, '../app/assets'),
        public: _resolve(__dirname, '../public'),
      },
    },
  });
}
