import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'dns-prefetch', href: 'https://fonts.bunny.net/' },
        { rel: 'preconnect', href: 'https://fonts.bunny.net/' },
        { rel: 'preconnect', href: 'https://fonts.bunny.net/', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.bunny.net/css?family=Inter:400,600|Lora:400,600&display=swap',
        },
      ],
    },
  },
  auth: {
    // The module is enabled. Change this to disable the module
    isEnabled: true,
    // The origin is set to the development origin. Change this when deploying to production
    origin: process.env.BASE_URL || 'http://localhost:3000',
    // Whether to periodically refresh the session.
    // Change this to `true` for a refresh every seconds or set this to a number like `5000`
    // for a refresh every 5000 milliseconds (aka: 5 seconds)
    enableSessionRefreshPeriodically: false,
    // Whether to refresh the session whenever a window focus event happens,
    // i.e, when your user refocuses the window. Set this to `false` to turn this off
    enableSessionRefreshOnWindowFocus: true,
    // Whether to add a global authentication middleware that will protect all pages without exclusion
    enableGlobalAppMiddleware: true,
    globalMiddlewareOptions: {
      // Whether to allow access to 404 pages without authentication.
      // Set this to `false` to force users to sign-in before seeing `404` pages.
      // Setting this to false may lead to vue-router problems (as the target page does not exist)
      allow404WithoutAuth: true,
    },
  },
  components: false,
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
  extends: ['@sidebase/nuxt-prisma'],
  i18n: {
    strategy: 'prefix',
    vueI18n: 'src/plugins/vue-i18n/vue-i18n',
    // Don't forget to update the extract-i18n-script
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
  imports: {
    autoImport: false,
    dirs: ['store'],
  },
  modules: [
    // TODO: add PWA module when ready
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@sidebase/nuxt-auth',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
  ],
  plugins: [{ src: '~/plugins/vee-validate/vee-validate' }, { src: '~/components/global' }],
  rootDir: '.',
  srcDir: './src',
  vite: {
    plugins: [eslintPlugin()],
  },
});
