import { addDecorator, configure } from '@storybook/vue';
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate';
import { checkA11y } from '@storybook/addon-a11y';
import { withOptions } from '@storybook/addon-options';
import { setDefaults } from 'storybook-addon-vue-info';
import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '@storybook/addon-console';
import '../../src/app/shared/_design-system.scss';
import '../../src/app/shared/designSystem/reset.scss';
import '../../src/app/shared/designSystem/global.scss';
import '../../src/app/shared/designSystem/typo.scss';

Vue.use(VueI18n);
Vue.use(VueRouter);
Vue.use(VeeValidate);

const req = require.context('../../src', true, /.stories.ts$/);

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

const newViewports = {
  iMacPro: {
    name: 'iMac Pro',
    styles: {
      width: '5120px',
      height: '2880px',
    },
  },
};

configureViewport({
  viewports: {
    ...INITIAL_VIEWPORTS,
    ...newViewports,
  },
});

configure(loadStories, module);
