import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import '@/plugins/vee-validate.ts';

Vue.use(VueCompositionApi);

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
