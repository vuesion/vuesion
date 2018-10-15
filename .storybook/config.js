import { addDecorator, configure } from '@storybook/vue';
import Vue                         from 'vue';
import VueI18n                     from 'vue-i18n';
import VueRouter                   from 'vue-router';
import VeeValidate                 from 'vee-validate';
import { checkA11y }               from '@storybook/addon-a11y';

Vue.use(VueI18n);
Vue.use(VueRouter);
Vue.use(VeeValidate);

// automatically import all files ending in *.stories.ts
const req = require.context('../src/app/shared/components', true, /.stories.ts$/);

const loadStories = () => {
  req.keys().forEach((filename) => req(filename));
};

addDecorator(checkA11y);

configure(loadStories, module);
