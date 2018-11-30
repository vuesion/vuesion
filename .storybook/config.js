import { addDecorator, configure } from '@storybook/vue';
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate';
import { checkA11y } from '@storybook/addon-a11y';
import { withOptions } from '@storybook/addon-options';
import { setDefaults } from 'storybook-addon-vue-info';
import '@storybook/addon-console';
import '../src/app/shared/_styles.scss';
import '../src/app/shared/styles/reset.scss';
import '../src/app/shared/styles/global.scss';
import '../src/app/shared/styles/typo.scss';

Vue.use(VueI18n);
Vue.use(VueRouter);
Vue.use(VeeValidate);

const req = require.context('../src', true, /.stories.ts$/);

const loadStories = () => {
  req
    .keys()
    .sort()
    .forEach((filename) => req(filename));
};

addDecorator(checkA11y);
addDecorator(
  withOptions({
    name: 'VueStarter',
    url: '/',
    goFullScreen: false,
    showStoriesPanel: true,
    showAddonPanel: true,
    showSearchBox: false,
    addonPanelInRight: false,
    sortStoriesByKind: true,
    hierarchySeparator: /\//,
    hierarchyRootSeparator: /\|/,
    sidebarAnimations: true,
    selectedAddonPanel: undefined,
  }),
);
setDefaults({ header: false });

configure(loadStories, module);
