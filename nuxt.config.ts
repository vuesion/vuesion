import { defineNuxtConfig } from 'nuxt';
import eslintPlugin from 'vite-plugin-eslint';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  components: true,
  colorMode: {
    preference: 'system',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode',
  },
  modules: ['@nuxtjs/color-mode'],
  plugins: [{ src: '@/plugins/vee-validate/vee-validate' }],
  rootDir: '.',
  srcDir: './src',
  vite: {
    plugins: [eslintPlugin()],
  },
});
