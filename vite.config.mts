import path from 'path';
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  build: {
    rollupOptions: {
      external: [],
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          includeAbsolute: false,
        },
      },
    }),
  ],
  test: {
    coverage: {
      all: false,
      reporter: ['html', 'lcov', 'text'],
      thresholds: {
        autoUpdate: true,
        statements: 100,
        branches: 100,
        functions: 100,
        lines: 100,
      },
      skipFull: true,
      exclude: [
        '**/test-utils.ts',
        '**/CollapseAnimation.vue',
        '**/*.spec.ts',
        '**/*.stories.ts',
        '**/*dummy*',
        '**/docs/**',
        '**/*Example*',
      ],
    },
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./test/setup.ts'],
  },
  resolve: {
    alias: {
      '~~': path.resolve(__dirname, './'),
      '~': path.resolve(__dirname, './src/'),
      app: path.resolve(__dirname, './src/app'),
      server: path.resolve(__dirname, './src/server'),
      assets: path.resolve(__dirname, './src/app/assets'),
      public: path.resolve(__dirname, './src/public'),
      '@vue/test-utils': '/node_modules/@vue/test-utils/dist/vue-test-utils.cjs.js',
    },
  },
});
