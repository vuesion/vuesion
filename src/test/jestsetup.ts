import path from 'path';
import camelCase from 'lodash/camelCase';
import upperFirst from 'lodash/upperFirst';
import { sync } from 'glob';
import Vue from 'vue';
import Vuex from 'vuex';
import VueCompositionApi from '@vue/composition-api';
import VueI18n from 'vue-i18n';
import '@/plugins/vee-validate/vee-validate.ts';
import { i18n } from '@/test/i18n';

Vue.use(Vuex);
Vue.use(VueCompositionApi);
Vue.use(VueI18n);

const $style: any = require('identity-obj-proxy');

Vue.config.productionTip = false;

Vue.mixin({
  created() {
    this.localePath = (path: string) => {
      return path;
    };
    this.$style = $style;
  },
});

Vue.prototype.$nuxt = {
  context: {
    app: {
      i18n,
    },
  },
};

// register icons globally
const iconDirectory = path.join(__dirname, '../components/icons');
const icons = sync('**/*.vue', { cwd: iconDirectory });

for (const path of icons) {
  const componentName = upperFirst(
    camelCase(
      path
        .split('/')
        .pop()
        .replace(/\.\w+$/, ''),
    ),
  );
  const componentConfig = require(iconDirectory + '/' + path);
  Vue.component(componentName, componentConfig.default || componentConfig);
}

Element.prototype.scrollTo = (): any => {
  return null;
};
