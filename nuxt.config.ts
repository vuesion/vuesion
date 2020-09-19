import { Configuration } from '@nuxt/types';

const config: Configuration = {
  build: {
    extractCSS: true,
    loaders: {
      cssModules: {
        modules: {
          localIdentName: '[local]_[hash:base64:4]',
        },
      },
    },
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
    transpile: ['vee-validate'],
  },
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/composition-api'],
  css: [],
  head: {
    title: process.env.npm_package_name || '',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Inter:200,400,600&display=swap' },
    ],
  },
  i18n: {
    vueI18n: '@/plugins/vue-i18n/vue-i18n',
    locales: [
      {
        code: 'en',
        file: 'en.json',
      },
      {
        code: 'de',
        file: 'de.json',
      },
      {
        code: 'pt',
        file: 'pt.json',
      },
      {
        code: 'zh-cn',
        file: 'zh-cn.json',
      },
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
    vuex: {
      moduleName: 'i18n',
      syncLocale: true,
      syncMessages: false,
      syncRouteParams: true,
    },
  },
  loading: { color: '#cd235b' },
  loadingIndicator: {
    name: 'circle',
    color: '#cd235b',
    background: 'white',
  },
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', 'nuxt-i18n'],
  plugins: [
    { src: '@/plugins/vuex-persist/vuex-persist.client' },
    { src: '@/plugins/vuex-persist/vuex-persist.server' },
    { src: '@/plugins/http-service/http-service' },
    { src: '@/plugins/vee-validate/vee-validate' },
  ],
  publicRuntimeConfig: {
    baseUrl: 'http://localhost:3000',
  },
  privateRuntimeConfig: {},
  srcDir: 'src',
  serverMiddleware: ['@/api/index.ts'],
  telemetry: false,
};

export default config;
