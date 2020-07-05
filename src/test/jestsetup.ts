import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import VueI18n from 'vue-i18n';
import '@/plugins/vee-validate/vee-validate.ts';

Vue.use(VueCompositionApi);
Vue.use(VueI18n);

const $style: any = require('identity-obj-proxy');

Vue.config.productionTip = false;

Vue.mixin({
  created() {
    this.localePath = function (path: string) {
      return path;
    };
    this.$style = $style;
  },
});
