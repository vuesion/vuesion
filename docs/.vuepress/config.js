const path = require('path');

module.exports = {
  base:          '/docs/',
  dest:          path.join(path.resolve(__dirname), '..', '..', 'dist', 'docs'),
  locales:       {
    '/': {
      lang:        'en',
      title:       'vue-starter - Docs',
      description: 'A flexible, scalable, opinionated boilerplate for production-ready PWAs with focus on performance, development speed, and best practices',
    },
  },
  head:          [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#A851E2' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#A851E2' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#333333' }],
  ],
  serviceWorker: false,
  themeConfig:   {
    repo:      'devCrossNet/vue-starter',
    editLinks: true,
    docsDir:   'docs',
    locales:   {
      '/': {
        label:        'English',
        selectText:   'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav:          [
          {
            text: 'Guide',
            link: '/guide/',
          },
          {
            text: 'Interactive Demo',
            link: 'https://vue-starter.herokuapp.com/',
          },
          {
            text: 'Slack',
            link: 'https://slack-vue-starter.herokuapp.com/',
          },
        ],
        sidebar:      {
          '/guide/': genSidebarConfig('Guide'),
        },
      },
    },
  },
};

function genSidebarConfig(title) {
  return [
    {
      title,
      collapsable: false,
      children:    [
        '',
        'getting-started',
        'style-guide',
        'npm-scripts',
        'components',
        'i18n',
        'vuex',
        'storybook',
        'generator-cli',
      ],
    },
  ];
}
