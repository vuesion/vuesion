import eslintPlugin from 'vite-plugin-eslint';

const themeColor = '#0f3191';
const isProd = process.env.NODE_ENV === 'production';

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'dns-prefetch', href: 'https://fonts.bunny.net/' },
        { rel: 'preconnect', href: 'https://fonts.bunny.net/' },
        { rel: 'preconnect', href: 'https://fonts.bunny.net/', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.bunny.net/css?family=Inter:400,600,900|Lora:400,600&display=swap',
        },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [{ name: 'theme-color', content: themeColor }],
    },
  },
  auth: {
    baseURL: process.env.BASE_URL,
    isEnabled: true,
    provider: {
      type: 'authjs',
    },
  },
  components: {
    dirs: [],
  },
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
  devtools: { enabled: true },
  i18n: {
    baseUrl: process.env.BASE_URL,
    strategy: 'prefix',
    vueI18n: 'src/plugins/vue-i18n/vue-i18n',
    // Don't forget to update the extract-i18n-script
    locales: [
      { code: 'en-US', iso: 'en-US', file: 'en.json', isCatchallLocale: true },
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
  image: {
    densities: [1, 2, 3],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1440,
      '2xl': 1440,
    },
  },
  imports: {
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
    '@nuxt/image',
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
    'nuxt-security', // TODO: comment in when https://github.com/sidebase/nuxt-auth/issues/324 is resolved
    '@vite-pwa/nuxt',
    '@nuxt/devtools',
  ],
  nitro: {
    compressPublicAssets: true,
    publicAssets: isProd
      ? [
          {
            baseURL: '/_nuxt',
            maxAge: 31536000,
            dir: '~/.nuxt/dist/client/_nuxt',
          },
        ]
      : [],
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
  runtimeConfig: {
    public: {},
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
      crossOriginResourcePolicy: 'cross-origin',
      crossOriginEmbedderPolicy: 'unsafe-none',
      contentSecurityPolicy: {
        'base-uri': ["'self'"],
        'font-src': ["'self'", 'https:', 'data:', 'fonts.bunny.net'],
        'form-action': ["'self'"],
        'frame-ancestors': ["'self'"],
        'img-src': ["'self'", 'data:', 'avatars-githubusercontent.webp.se', 'images.unsplash.com'],
        'object-src': ["'none'"],
        'script-src-attr': ["'none'"],
        'style-src': ["'self'", 'https:', "'unsafe-inline'", 'fonts.bunny.net'],
        'upgrade-insecure-requests': true,
      },
      originAgentCluster: '?1',
      referrerPolicy: 'no-referrer',
      strictTransportSecurity: {
        maxAge: 15552000,
        includeSubdomains: true,
      },
      xContentTypeOptions: 'nosniff',
      xDNSPrefetchControl: 'off',
      xDownloadOptions: 'noopen',
      xFrameOptions: 'SAMEORIGIN',
      xPermittedCrossDomainPolicies: 'none',
      xXSSProtection: '0',
      permissionsPolicy: {
        camera: ['()'],
        'display-capture': ['()'],
        fullscreen: ['()'],
        geolocation: ['()'],
        microphone: ['()'],
      },
    },
    requestSizeLimiter: { maxRequestSizeInBytes: 2000000, maxUploadFileRequestInBytes: 8000000 },
    rateLimiter: { tokensPerInterval: 150, interval: 'hour', fireImmediately: true },
    xssValidator: false,
    corsHandler: {
      origin: '*',
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      preflight: { statusCode: 204 },
    },
    allowedMethodsRestricter: '*',
    hidePoweredBy: true,
    basicAuth: false,
    enabled: true,
    csrf: false,
  },
  srcDir: './src',
  vite: {
    plugins: [eslintPlugin()],
  },
});
