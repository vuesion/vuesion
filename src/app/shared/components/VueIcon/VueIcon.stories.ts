import { storiesOf }                 from '@storybook/vue';
import { action }                    from '@storybook/addon-actions';
import VueInfoAddon                  from 'storybook-addon-vue-info';
import VueIcon                       from './VueIcon.vue';

const story = (storiesOf('VueIcon', module) as any);

story.addDecorator(VueInfoAddon);

story.add('Default', () => ({
  components: { VueIcon },
  template:   `<vue-icon />`,
}));

story.add('With icon name', () => ({
  components: { VueIcon },
  template:   `<vue-icon name="far fa-address-card" />`,
}));
