import { Configuration } from '@nuxt/types';

const config: Configuration = {
  mode: 'universal',
  srcDir: 'src',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  loading: { color: '#cd235b' },
  css: [],
  plugins: [
    { src: '~/plugins/vuex-persist/vuex-persist.client' },
    { src: '~/plugins/vuex-persist/vuex-persist.server' },
    { src: '~/plugins/app-config/app-config.server' },
    { src: '~/plugins/http-service/http-service' },
    { src: '~/plugins/vue-composition-api/vue-composition-api' },
    { src: '~/plugins/vee-validate/vee-validate' },
  ],
  buildModules: ['@nuxt/typescript-build'],
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-i18n',
  ],
  axios: {},
  i18n: {
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
  serverMiddleware: ['~/api/index.ts'],
  telemetry: false,
  // extend(config, ctx) {},
};

export default config;
