import eslintPlugin from 'vite-plugin-eslint';

const themeColor = '#0f3191';
const cacheControl = 'public, max-age=31536000, immutable';

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
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [{ name: 'theme-color', content: themeColor }],
    },
  },
  auth: {
    // The module is enabled. Change this to disable the module
    isEnabled: true,
    // The origin is set to the development origin. Change this when deploying to production
    origin: process.env.BASE_URL,
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
  css: ['@/assets/global.scss'],
  extends: ['@sidebase/nuxt-prisma'],
  i18n: {
    baseUrl: process.env.BASE_URL,
    strategy: 'prefix',
    vueI18n: 'src/plugins/vue-i18n/vue-i18n',
    // Don't forget to update the extract-i18n-script
    locales: [
      { code: 'en-US', iso: 'en-US', file: 'en.json' },
      { code: 'de-DE', iso: 'de-DE', file: 'de.json' },
    ],
    defaultLocale: 'en-US',
    lazy: true,
    langDir: '../i18n/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieDomain: null,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
      fallbackLocale: 'en-US',
      cookieSecure: true,
    },
  },
  imports: {
    autoImport: false,
    dirs: ['store'],
  },
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@sidebase/nuxt-auth',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
    '@nuxtjs/robots',
    '@nuxt/image-edge',
    [
      '@nuxtjs/html-validator',
      {
        options: {
          rules: {
            'prefer-native-element': 'off',
            'attribute-empty-style': 'off',
          },
        },
      },
    ],
    [
      'nuxt-delay-hydration',
      {
        mode: 'mount',
      },
    ],
    'nuxt-security',
    '@vite-pwa/nuxt',
  ],
  nitro: {
    compressPublicAssets: true,
    routeRules: {
      '/_nuxt/**': { headers: { 'Cache-Control': cacheControl } },
      '/_ipx/**': { headers: { 'Cache-Control': cacheControl } },
    },
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Vuesion',
      short_name: 'VuesionPWA',
      theme_color: themeColor,
      background_color: '#ffffff',
      icons: [
        { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
        { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
      ],
      start_url: '/',
      display: 'standalone',
      prefer_related_applications: true,
    },
    workbox: {
      cleanupOutdatedCaches: true,
      navigateFallback: '/en-US',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 3600,
    },
    devOptions: {
      enabled: false,
      type: 'module',
    },
  },
  robots: {
    rules: {
      UserAgent: '*',
      Disallow: '/*?*',
      Allow: '/',
    },
  },
  rootDir: '.',
  security: {
    headers: {
      crossOriginResourcePolicy: {
        value: 'cross-origin',
        route: '/**',
      },
      crossOriginEmbedderPolicy: { value: 'unsafe-none', route: '/**' },
      contentSecurityPolicy: {
        value: {
          'base-uri': ["'self'"],
          'font-src': ["'self'", 'https:', 'data:', 'fonts.bunny.net'],
          'form-action': ["'self'"],
          'frame-ancestors': ["'self'"],
          'img-src': ["'self'", 'data:', 'avatars-githubusercontent.webp.se'],
          'object-src': ["'none'"],
          'script-src-attr': ["'none'"],
          'style-src': ["'self'", 'https:', "'unsafe-inline'", 'fonts.bunny.net'],
          'upgrade-insecure-requests': true,
        },
        route: '/**',
      },
    },
  },
  srcDir: './src',
  vite: {
    plugins: [eslintPlugin()],
  },
});
