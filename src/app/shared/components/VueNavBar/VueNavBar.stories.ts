import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import VueNavBar from './VueNavBar.vue';

const story = storiesOf('Organisms|NavBar', module) as any;

story.add(
  'Default',
  withInfo({})(() => ({
    components: { VueNavBar },
    template: `<vue-nav-bar />`,
  })),
);
