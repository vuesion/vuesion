import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import VueInfoAddon from 'storybook-addon-vue-info';
import VueGridItem from './VueGridItem.vue';

const story = (storiesOf('VueGridItem', module) as any);

story.addDecorator(VueInfoAddon);

story.add('Default', () => ({
  components: { VueGridItem },
  template: `<vue-grid-item>VueGridItem</vue-grid-item>`,
}));
