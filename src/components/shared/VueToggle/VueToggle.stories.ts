import { storiesOf } from '@storybook/vue';
import VueToggle from './VueToggle.vue';

const story = storiesOf('Atoms|Toggle', module) as any;

story.add(
  'Default',
  () => ({
    components: { VueToggle },
    data() {
      return {
        checked: false,
      };
    },
    template: `<vue-toggle name="toggle" id="toggle" v-model="checked" label="toggle me">VueToggle</vue-toggle>`,
  }),
  {
    info: {
      components: { VueToggle },
    },
  },
);

story.add(
  'Disabled',
  () => ({
    components: { VueToggle },
    data() {
      return {
        checked: false,
      };
    },
    template: `<vue-toggle disabled name="toggle" id="toggle" v-model="checked" label="toggle me">VueToggle</vue-toggle>`,
  }),
  {
    info: {
      components: { VueToggle },
    },
  },
);
