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
  i18n: {
    // baseUrl: 'https://vuesion.herokuapp.com',
    strategy: 'prefix',
    vueI18n: 'src/plugins/vue-i18n/vue-i18n',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json' },
      { code: 'de', iso: 'de-DE', file: 'de.json' },
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: '../i18n/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieDomain: null,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
      fallbackLocale: 'en',
    },
  },
  modules: ['@nuxtjs/color-mode', '@nuxtjs/i18n'],
  plugins: [{ src: '~/plugins/vee-validate/vee-validate' }],
  rootDir: '.',
  srcDir: './src',
  vite: {
    plugins: [eslintPlugin()],
  },
});
