import { addParameters, configure, addDecorator } from '@storybook/vue';
import Vue from 'vue';
import Vuex from 'vuex';
import VueI18n from 'vue-i18n';
import VueRouter from 'vue-router';
import VueCompositionApi from '@vue/composition-api';
import { checkA11y } from '@storybook/addon-a11y';
import { setDefaults, withInfo } from 'storybook-addon-vue-info';
import { action } from '@storybook/addon-actions';
import '@storybook/addon-console';
import '../../src/assets/_design-system.scss';
import '../../src/assets/reset.scss';
import '../../src/assets/global.scss';
import '../../src/assets/typo.scss';
import customTheme from './theme';
import { extend } from 'vee-validate';
import { required, email, integer, min } from 'vee-validate/dist/rules.umd.js';

extend('required', required);
extend('email', email);
extend('integer', integer);
extend('min', min);

Vue.use(Vuex);
Vue.use(VueI18n);
Vue.use(VueRouter);
Vue.use(VueCompositionApi);

Vue.component('nuxt-link', {
  props: ['to'],
  methods: {
    log() {
      action('link target')(this.to);
    },
  },
  template: '<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>',
});
Vue.mixin({
  created() {
    this.localePath = (path) => path;
  },
});

const req = require.context('../../src', true, /.stories.ts$/);

const loadStories = () => {
  req.keys().forEach((filename) => req(filename));
};

addParameters(checkA11y);

addParameters({
  options: {
    theme: customTheme,
  },
  viewport: {
    viewports: {
      phone: {
        name: 'Phone',
        styles: {
          width: '320px',
          height: '568px',
        },
      },
      tabletPortrait: {
        name: 'Tablet Portrait',
        styles: {
          width: '768px',
          height: '1024px',
        },
      },
      tabletLandscape: {
        name: 'Tablet Landscape',
        styles: {
          width: '1024px',
          height: '768px',
        },
      },
      smallDesktop: {
        name: 'Small Desktop',
        styles: {
          width: '1280px',
          height: '800px',
        },
      },
      largeDesktop: {
        name: 'Large Desktop',
        styles: {
          width: '1440px',
          height: '900px',
        },
      },
    },
  },
  themeSwitcher: {
    themes: [
      { label: 'Light Theme', value: 'light' },
      { label: 'Dark Theme', value: 'dark' },
    ],
  },
});

addDecorator(require('storybook-vue-router').default());
addDecorator(withInfo);
setDefaults({
  header: false,
  docsInPanel: true,
  useDocgen: false,
  source: false,
  casing: {
    props: 'camel',
    component: 'kebab',
  },
});

configure(loadStories, module);
