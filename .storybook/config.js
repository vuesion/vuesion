import { configure } from '@storybook/vue';
import Vue           from 'vue';
import VueI18n       from 'vue-i18n';

Vue.use(VueI18n);

// automatically import all files ending in *.stories.ts
const req = require.context('../src/app/shared/components', true, /.stories.ts$/);

const loadStories = () => {
  req.keys().forEach((filename) => req(filename));
};

configure(loadStories, module);
