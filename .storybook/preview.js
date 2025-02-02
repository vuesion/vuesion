import 'assets/_design-system.scss';
import 'assets/reset.scss';
import 'assets/global.scss';
import 'assets/typography.scss';
import { setup } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import camelCase from 'lodash/camelCase';
import upperFirst from 'lodash/upperFirst';
import { defineRule } from 'vee-validate';
import { email, integer, min, min_value as minValue, regex, required } from '@vee-validate/rules';
import { createI18n } from 'vue-i18n';
import messagesEN from '../i18n/locales/en-US.json';
import messagesDE from '../i18n/locales/de-DE.json';

// define global vee-validate rules
defineRule('required', required);
defineRule('email', email);
defineRule('integer', integer);
defineRule('min', min);
defineRule('min_value', minValue);
defineRule('regex', regex);

setup(async (app) => {
  const i18n = createI18n({
    legacy: false,
    allowComposition: true,
    locale: 'en-US',
    fallbackLocale: 'en-US',
    formatFallbackMessages: true,
    messages: {
      'en-US': messagesEN,
      'de-DE': messagesDE,
    },
  });

  app.use(i18n);

  // Mocks
  // NuxtLink
  app.component('nuxt-link', {
    props: ['to'],
    methods: {
      log() {
        action('link target')(this.to);
      },
    },
    template: '<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>',
  });
  app.component('nuxt-img', {
    inheritAttrs: true,
    props: ['src', 'alt'],
    methods: {},
    template: '<img :src="src" :alt="alt" :class="$attrs.class" />',
  });
  app.mixin({
    created() {
      this.$n = (n) => n;
      this.n = (n) => n;
    },
  });
  app.mixin({
    created() {
      this.$colorMode = {
        value: 'light',
        preference: 'light',
      };
    },
  });

  // import icons globally
  const icons = import.meta.glob('../src/components/icons/Vue*.vue');

  for (const path in icons) {
    const componentConfig = await icons[path]();
    const componentName = upperFirst(
      camelCase(
        path
          .split('/')
          .pop()
          .replace(/\.\w+$/, ''),
      ),
    );

    app.component(componentName, componentConfig.default || componentConfig);
  }
});

export const parameters = {
  backgrounds: { disable: true },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themeSwitcher: {
    themes: [
      { label: 'Light Theme', value: 'light' },
      { label: 'Dark Theme', value: 'dark' },
    ],
  },
  viewport: {
    viewports: {
      phone: {
        name: 'Phone',
        styles: {
          width: '374px',
          height: '740px',
        },
      },
      tabletPortrait: {
        name: 'Tablet Portrait',
        styles: {
          width: '822px',
          height: '1024px',
        },
      },
      tabletLandscape: {
        name: 'Tablet Landscape',
        styles: {
          width: '1078px',
          height: '768px',
        },
      },
      smallDesktop: {
        name: 'Small Desktop',
        styles: {
          width: '1334px',
          height: '800px',
        },
      },
      largeDesktop: {
        name: 'Large Desktop',
        styles: {
          width: '1494px',
          height: '900px',
        },
      },
    },
  },
};
