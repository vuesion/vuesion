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
        '**/use-prisma.ts',
      ],
    },
    projects: [
      {
        extends: true,
        test: {
          name: { label: 'app', color: 'green' },
          environment: 'jsdom',
          globals: true,
          setupFiles: ['./src/app/test/setup.ts'],
          include: ['./src/app/**/*.spec.ts'],
          pool: { threads: { singleThread: true } },
          sequence: { concurrent: false },
        },
      },
      {
        extends: true,
        test: {
          name: { label: 'server', color: 'blue' },
          environment: 'node',
          globals: true,
          globalSetup: ['./src/server/test/global-setup.ts'],
          include: ['./src/server/**/*.spec.ts', './src/shared/**/*.spec.ts'],
          testTimeout: 20000,
          hookTimeout: 50000,
          pool: { threads: { singleThread: true } },
          sequence: { concurrent: false },
        },
      },
      {
        extends: true,
        test: {
          name: { label: 'tools', color: 'white' },
          environment: 'node',
          globals: true,
          include: ['./tools/**/*.spec.ts'],
          testTimeout: 20000,
          hookTimeout: 50000,
          pool: { threads: { singleThread: true } },
          sequence: { concurrent: false },
        },
      },
    ],
  },
  resolve: {
    alias: {
      '~~': path.resolve(__dirname, './'),
      '~': path.resolve(__dirname, './src'),
      '@': path.resolve(__dirname, './src/app'),
      assets: path.resolve(__dirname, './src/app/assets'),
      public: path.resolve(__dirname, './src/public'),
      '#shared': path.resolve(__dirname, './src/shared'),
      '@vue/test-utils': '/node_modules/@vue/test-utils/dist/vue-test-utils.cjs.js',
    },
  },
});
