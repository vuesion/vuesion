import { storiesOf } from '@storybook/vue';
import VueInfoAddon  from 'storybook-addon-vue-info';
import VueToggle     from './VueToggle.vue';

const story = (storiesOf('VueToggle', module) as any);

story.addDecorator(VueInfoAddon);

story.add('Default', () => ({
  components: { VueToggle },
  data() {
    return {
      checked: false,
    };
  },
  template:   `<vue-toggle name="toggle" id="toggle" v-model="checked" label="toggle me">VueToggle</vue-toggle>`,
}));

story.add('Disabled', () => ({
  components: { VueToggle },
  data() {
    return {
      checked: false,
    };
  },
  template:   `<vue-toggle disabled name="toggle" id="toggle" v-model="checked" label="toggle me">VueToggle</vue-toggle>`,
}));
