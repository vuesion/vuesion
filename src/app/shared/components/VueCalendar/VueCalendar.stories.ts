import { storiesOf } from '@storybook/vue';
import VueInfoAddon  from 'storybook-addon-vue-info';
import VueCalendar   from './VueCalendar.vue';
import { i18n }      from '../../plugins/i18n/i18n';

const story = (storiesOf('VueCalendar', module) as any);

story.addDecorator(VueInfoAddon);

story.add('Default', () => ({
  components: { VueCalendar },
  template:   `<vue-calendar />`,
  i18n,
}));
