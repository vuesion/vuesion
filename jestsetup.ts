import Vue from 'vue';
import { extend } from 'vee-validate';

const { required, email, integer, min } = require('vee-validate/dist/rules.umd.js');

extend('required', required);
extend('email', email);
extend('integer', integer);
extend('min', min);

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
