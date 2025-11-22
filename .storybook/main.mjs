import { mergeConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  stories: ['../src/app/**/*.stories.@(js|jsx|ts|tsx)'],
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
        include: ['@storybook/addon-links', '@storybook/addon-a11y'],
      },
      resolve: {
        alias: {
          '~~': path.resolve(path.dirname(__dirname)),
          '~': path.resolve(path.dirname(__dirname), 'src'),
          '@': path.resolve(path.dirname(__dirname), 'src/app'),
          '@ds': path.resolve(path.dirname(__dirname), './src/app/components/ds'),
          '@domains': path.resolve(path.dirname(__dirname), './src/app/components/domains'),
          '@icons': path.resolve(path.dirname(__dirname), './src/app/components/icons'),
          assets: path.resolve(path.dirname(__dirname), 'src/app/assets'),
          public: path.resolve(path.dirname(__dirname), 'src/public'),
          '#shared': path.resolve(path.dirname(__dirname), 'src/shared'),
        },
      },
    });
  },
};
