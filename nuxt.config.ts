import { Configuration } from '@nuxt/types';
import { VuesionConfig } from '@vuesion/models';

const config: Configuration = {
  auth: {
    cookie: {
      options: {
        expires: 365,
        secure: true,
      },
    },
    localStorage: null,
    redirect: {
      login: '/',
      logout: '/',
      callback: '/',
      home: '/example/dashboard',
    },
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'access_token',
          maxAge: 1800,
        },
        refreshToken: {
          property: 'refresh_token',
          data: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30,
        },
        user: {
          property: 'user',
          autoFetch: true,
        },
        endpoints: {
          login: { url: '/auth/token', method: 'post' },
          refresh: { url: '/auth/refresh', method: 'post' },
          user: { url: '/auth/user', method: 'get' },
          logout: { url: '/auth/logout', method: 'post' },
        },
        autoLogout: true,
      },
    },
    plugins: ['@/plugins/axios/response-interceptor'],
  },
  build: {
    extractCSS: true,
    loaders: {
      cssModules: {
        modules: {
          localIdentName: process.env.NODE_ENV !== 'production' ? '[local]_[hash:base64:4]' : '[hash:base64:4]',
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
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700,800|Lora:300,400,500,600,700,800&display=swap',
      },
    ],
  },
  i18n: {
    strategy: 'no_prefix',
    vueI18n: '@/plugins/vue-i18n/vue-i18n',
    locales: VuesionConfig.i18n.locales,
    defaultLocale: VuesionConfig.i18n.defaultLocale,
    lazy: true,
    langDir: '../i18n/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieDomain: null,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
      fallbackLocale: VuesionConfig.i18n.defaultLocale,
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
  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next', '@nuxtjs/pwa', 'nuxt-i18n', 'nuxt-winston-log'],
  plugins: [
    { src: '@/plugins/vee-validate/vee-validate' },
    { src: '@/plugins/vuex-persist/vuex-persist.client' },
    { src: '@/plugins/vuex-persist/vuex-persist.server' },
  ],
  publicRuntimeConfig: {
    axios: {
      baseURL: process.env.baseURL || 'http://localhost:3000',
    },
  },
  privateRuntimeConfig: {},
  pwa: {
    icon: {
      fileName: 'logo.png',
    },
  },
  router: {
    middleware: ['auth'],
  },
  srcDir: 'src',
  serverMiddleware: ['@/api/index.ts'],
  telemetry: false,
  winstonLog: {
    logPath: './logs',
    logName: `${process.env.NODE_ENV}.log`,
    autoCreateLogPath: true,
    useDefaultLogger: true,
    skipRequestMiddlewareHandler: false,
    skipErrorMiddlewareHandler: false,
  },
};

export default config;
