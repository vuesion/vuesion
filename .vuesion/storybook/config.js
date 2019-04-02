import { addParameters, configure, addDecorator } from '@storybook/vue';
import Vue from 'vue';
import Vuex from 'vuex';
import VueI18n from 'vue-i18n';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate';
import { checkA11y } from '@storybook/addon-a11y';
import { setDefaults } from 'storybook-addon-vue-info';
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

addDecorator(require('storybook-vue-router').default());
setDefaults({ header: false });

configure(loadStories, module);
