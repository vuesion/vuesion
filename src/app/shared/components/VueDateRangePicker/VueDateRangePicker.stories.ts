import { storiesOf }      from '@storybook/vue';
import VueInfoAddon       from 'storybook-addon-vue-info';
import VueDateRangePicker from './VueDateRangePicker.vue';
import { i18n }           from '../../plugins/i18n/i18n';

const story = (storiesOf('VueDateRangePicker', module) as any);

story.addDecorator(VueInfoAddon);

story.add('Default', () => ({
  components: { VueDateRangePicker },
  template:   `<vue-date-range-picker />`,
  i18n,
}));
