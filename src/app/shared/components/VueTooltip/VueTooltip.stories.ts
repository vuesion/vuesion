import { storiesOf } from '@storybook/vue';
import VueInfoAddon  from 'storybook-addon-vue-info';
import VueTooltip    from './VueTooltip.vue';

const story = (storiesOf('VueTooltip', module) as any);

story.addDecorator(VueInfoAddon);

story.add('Default', () => ({
  components: { VueTooltip },
  template:   `
<vue-tooltip tip="This is a tooltip!">consetetur sadipscing elitr</vue-tooltip>`,
}));

story.add('Programmatically disable', () => ({
  components: { VueTooltip },
  data() {
    return {
      disabled: false,
    };
  },
  template:   `<div>
<vue-tooltip tip="This is a tooltip!" :disabled="disabled">consetetur sadipscing elitr</vue-tooltip>
<br/>
<br/>
<button @click="disabled = !disabled">Toogle tooltip</button>
</div>`,
}));
