import { storiesOf } from '@storybook/vue';
import VueInfoAddon  from 'storybook-addon-vue-info';
import VueNavBar     from './VueNavBar.vue';
import { router }    from '../../../router';

const story = (storiesOf('VueNavBar', module) as any);

story.addDecorator(VueInfoAddon);

story.add('Default', () => ({
  router,
  components: { VueNavBar },
  template:   `<vue-nav-bar />`,
}));
