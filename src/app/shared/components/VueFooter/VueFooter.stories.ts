import { storiesOf } from '@storybook/vue';
import VueInfoAddon  from 'storybook-addon-vue-info';
import VueFooter     from './VueFooter.vue';

const story = (storiesOf('VueFooter', module) as any);

story.addDecorator(VueInfoAddon);

story.add('Default', () => ({
  components: { VueFooter },
  template:   `<vue-footer />`,
}));
