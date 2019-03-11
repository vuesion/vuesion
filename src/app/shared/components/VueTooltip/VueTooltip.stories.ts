import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import VueTooltip from './VueTooltip.vue';

const story = storiesOf('Molecules|Tooltip', module) as any;

story.add(
  'Default',
  withInfo({})(() => ({
    components: { VueTooltip },
    template: `
<vue-tooltip tip="This is a tooltip!">consetetur sadipscing elitr</vue-tooltip>`,
  })),
);

story.add(
  'Programmatically disable',
  withInfo({})(() => ({
    components: { VueTooltip },
    data() {
      return {
        disabled: false,
      };
    },
    template: `<div>
<vue-tooltip tip="This is a tooltip!" :disabled="disabled">consetetur sadipscing elitr</vue-tooltip>
<br/>
<br/>
<button @click="disabled = !disabled">Toogle tooltip</button>
</div>`,
  })),
);
