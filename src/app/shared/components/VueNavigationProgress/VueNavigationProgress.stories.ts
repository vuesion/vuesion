import { storiesOf } from '@storybook/vue';
import VueInfoAddon  from 'storybook-addon-vue-info';
import VueNavigationProgress           from './VueNavigationProgress.vue';

const story = (storiesOf('VueNavigationProgress', module) as any);

story.addDecorator(VueInfoAddon);

story.add('Default', () => ({
  components: { VueNavigationProgress },
  template:   `<vueNavigationProgress>VueNavigationProgress</vueNavigationProgress>`,
}));
