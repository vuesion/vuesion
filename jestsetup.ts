import Vue from 'vue';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

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
