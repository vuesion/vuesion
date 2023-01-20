import path from 'path';
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  build: {
    rollupOptions: {
      external: [],
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
      reporter: ['html', 'lcov', 'text'],
      branches: 98,
      functions: 98,
      statements: 98,
      lines: 98,
      exclude: ['**/test-utils.ts', '**/CollapseAnimation.vue', '**/*.spec.ts'],
    },
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
  },
  resolve: {
    alias: {
      '~~': path.resolve(__dirname, './'),
      '@@': path.resolve(__dirname, './'),
      '~': path.resolve(__dirname, './src'),
      '@': path.resolve(__dirname, './src'),
      assets: path.resolve(__dirname, './src/assets'),
      public: path.resolve(__dirname, './src/public'),
    },
  },
});
