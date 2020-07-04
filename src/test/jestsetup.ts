import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import VueI18n from 'vue-i18n';
import '~/plugins/vee-validate/vee-validate.ts';

Vue.use(VueCompositionApi);
Vue.use(VueI18n);

const $style: any = require('identity-obj-proxy');

// (HTMLCanvasElement as any).prototype.getContext = () => {
//   return;
// };

(global as any).CLIENT = true;
(global as any).SERVER = true;
(global as any).TEST = true;

Vue.config.productionTip = false;

Vue.mixin({
  created() {
    this.localePath = function (path: string) {
      return path;
    };
    this.$style = $style;
  },
});
