import { storiesOf } from '@storybook/vue';
import VueInfoAddon  from 'storybook-addon-vue-info';
import VueDatePicker from './VueDatePicker.vue';
import { i18n }      from '../../plugins/i18n/i18n';

const story = (storiesOf('VueDatePicker', module) as any);

story.addDecorator(VueInfoAddon);

story.add('Default', () => ({
  components: { VueDatePicker },
  template:   `<vue-date-picker />`,
  i18n,
}));
