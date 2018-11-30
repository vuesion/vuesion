import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import VueNavBar from './VueNavBar.vue';
import { router } from '../../../router';

const story = storiesOf('2. Components|NavBar', module) as any;

story.add(
  'Default',
  withInfo({})(() => ({
    router,
    components: { VueNavBar },
    template: `<vue-nav-bar />`,
  })),
);
