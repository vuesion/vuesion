import { storiesOf } from '@storybook/vue';
import VueInfoAddon  from 'storybook-addon-vue-info';
import VueInput     from './VueInput.vue';

const story = (storiesOf('VueInput', module) as any);

story.addDecorator(VueInfoAddon);

story.add('Default', () => ({
  components: { VueInput },
  template:   `<vue-input placeholder="Name" name="name" id="name" />`,
}));
