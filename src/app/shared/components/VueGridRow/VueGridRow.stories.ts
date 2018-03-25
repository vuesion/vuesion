import { storiesOf } from '@storybook/vue';
import { action }    from '@storybook/addon-actions';
import VueInfoAddon  from 'storybook-addon-vue-info';
import VueGridRow    from './VueGridRow.vue';

const story = (storiesOf('VueGridRow', module) as any);

story.addDecorator(VueInfoAddon);

story.add('Default', () => ({
  components: { VueGridRow },
  template:   `<vue-grid-row>VueGridRow</vue-grid-row>`,
}));
