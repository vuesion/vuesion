import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import VueFooter from './VueFooter.vue';

const story = storiesOf('Organisms|Footer', module) as any;

story.add(
  'Default',
  withInfo({})(() => ({
    components: { VueFooter },
    template: `<vue-footer />`,
  })),
);
