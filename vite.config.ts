import path from 'path';
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      reporter: ['html', 'lcov', 'text'],
      branches: 5,
      functions: 5,
      statements: 5,
      lines: 5,
    },
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
