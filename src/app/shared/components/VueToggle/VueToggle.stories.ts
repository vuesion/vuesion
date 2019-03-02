import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import VueToggle from './VueToggle.vue';

const story = storiesOf('Atoms|Toggle', module) as any;

story.add(
  'Default',
  withInfo({})(() => ({
    components: { VueToggle },
    data() {
      return {
        checked: false,
      };
    },
    template: `<vue-toggle name="toggle" id="toggle" v-model="checked" label="toggle me">VueToggle</vue-toggle>`,
  })),
);

story.add(
  'Disabled',
  withInfo({})(() => ({
    components: { VueToggle },
    data() {
      return {
        checked: false,
      };
    },
    template: `<vue-toggle disabled name="toggle" id="toggle" v-model="checked" label="toggle me">VueToggle</vue-toggle>`,
  })),
);
