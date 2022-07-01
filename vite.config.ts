import path from 'path';
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  test: {
    coverage: {
      reporter: ['html', 'lcov', 'text'],
      branches: 100,
      functions: 100,
      statements: 100,
      lines: 100,
      exclude: ['**/test-utils.ts', '**/CollapseAnimation.vue', '**/*.spec.ts'],
    },
    environment: 'happy-dom',
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
