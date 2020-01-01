import Vue from 'vue';
import VeeValidate from 'vee-validate';
import VueCompositionApi from '@vue/composition-api';

Vue.use(VeeValidate);
Vue.use(VueCompositionApi);

const $style: any = require('identity-obj-proxy');

(HTMLCanvasElement as any).prototype.getContext = () => {
  return;
};

(global as any).CLIENT = true;
(global as any).SERVER = true;
(global as any).TEST = true;

Vue.config.productionTip = false;

Vue.mixin({
  created() {
    this.$style = $style;
  },
});
