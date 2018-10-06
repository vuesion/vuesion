const path = require('path');

module.exports = {
  base: '/docs/',
  dest: path.join(path.resolve(__dirname), '..', '..', 'dist', 'docs'),
  locales: {
    '/': {
      lang: 'en',
      title: 'vue-starter',
      description: 'A flexible, scalable, opinionated boilerplate for production-ready PWAs with focus on performance, development speed, and best practices',
    },
    '/zh-cn/': {
      lang: 'zh-CN',
      title: 'vue-starter',
      description: '一个灵活的、可扩展的、自定的，已经准备好用于生产的渐进式网络应用样板，聚焦于性能、开发速度和最佳实践',
    },
  },
  head: [
    ['link', {
      rel: 'icon',
      href: `/logo.png`
    }],
    ['link', {
      rel: 'manifest',
      href: '/manifest.json'
    }],
    ['meta', {
      name: 'theme-color',
      content: '#A851E2'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }],
    ['link', {
      rel: 'apple-touch-icon',
      href: `/icons/apple-touch-icon-152x152.png`
    }],
    ['link', {
      rel: 'mask-icon',
      href: '/icons/safari-pinned-tab.svg',
      color: '#A851E2'
    }],
    ['meta', {
      name: 'msapplication-TileImage',
      content: '/icons/msapplication-icon-144x144.png'
    }],
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#333333'
    }],
  ],
  serviceWorker: false,
  themeConfig: {
    repo: 'devCrossNet/vue-starter',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        label: 'English',
        selectText: '中文',
        editLinkText: 'Edit this page on GitHub',
        nav: [{
            text: 'Guide',
            link: '/introduction',
          },
          {
            text: 'Interactive Demo',
            link: 'https://vue-starter.herokuapp.com/',
          },
          {
            text: 'Components',
            link: 'https://vue-starter.herokuapp.com/storybook',
          },
          {
            text: 'Slack',
            link: 'https://slack-vue-starter.herokuapp.com/',
          },
        ],
        sidebar: {
          '/': [{
              title: 'Getting started',
              collapsable: false,
              children: [
                'guide/install',
                'guide/run',
                'guide/docker',
                'guide/test',
                'guide/clean-up',
                'guide/i18n',
                'guide/cli',
                'guide/styles',
                'guide/third-party',
                'guide/vuex',
                'guide/build',
                'guide/config',
                'guide/contribute',
                'guide/update',
              ],
            },
            {
              title: 'Docs',
              collapsable: false,
              children: [
                'docs/style-guide',
                'docs/pwa',
                'docs/npm-scripts',
                'docs/i18n',
                'docs/redirects',
                'docs/storybook',
                'docs/prefetch-and-state-transfer',
              ],
            },
          ],
        },
      },
      '/zh-cn/': {
        label: '简体中文',
        selectText: 'English',
        editLinkText: '在GitHub上编辑这页',
        nav: [{
            text: '指南',
            link: '/zh-cn/introduction',
          },
          {
            text: '交互演示',
            link: 'https://vue-starter.herokuapp.com/',
          },
          {
            text: '组件',
            link: 'https://vue-starter.herokuapp.com/storybook',
          },
          {
            text: '交流',
            link: 'https://slack-vue-starter.herokuapp.com/',
          },
        ],
        sidebar: {
          '/zh-cn/': [{
              title: '开始',
              collapsable: false,
              children: [
                'guide/install',
                'guide/run',
                'guide/test',
                'guide/clean-up',
                'guide/i18n',
                'guide/cli',
                'guide/styles',
                'guide/vuex',
                'guide/build',
                'guide/config',
                'guide/contribute',
                'guide/update',
              ],
            },
            {
              title: '文档',
              collapsable: false,
              children: [
                'docs/style-guide',
                'docs/npm-scripts',
                'docs/i18n',
                'docs/storybook',
                'docs/redirects'
              ],
            },
          ],
        },
      },
    },
  },
};
