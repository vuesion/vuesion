import { addParameters, configure, addDecorator } from '@storybook/vue';
import Vue from 'vue';
import Vuex from 'vuex';
import VueI18n from 'vue-i18n';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate';
import VueCompositionApi from '@vue/composition-api';
import { checkA11y } from '@storybook/addon-a11y';
import { setDefaults, withInfo } from 'storybook-addon-vue-info';
import '@storybook/addon-console';
import '../../src/app/shared/directives';
import '../../src/app/shared/_design-system.scss';
import '../../src/app/shared/designSystem/reset.scss';
import '../../src/app/shared/designSystem/global.scss';
import '../../src/app/shared/designSystem/typo.scss';
import customTheme from './theme';

Vue.use(Vuex);
Vue.use(VueI18n);
Vue.use(VueRouter);
Vue.use(VeeValidate);
Vue.use(VueCompositionApi);

const req = require.context('../../src', true, /.stories.ts$/);

const loadStories = () => {
  req.keys().forEach((filename) => req(filename));
};

addParameters(checkA11y);

addParameters({
  options: {
    theme: customTheme,
  },
});

addParameters({
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
