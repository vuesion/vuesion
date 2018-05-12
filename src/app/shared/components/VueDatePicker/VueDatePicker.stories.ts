import { storiesOf } from '@storybook/vue';
import VueInfoAddon  from 'storybook-addon-vue-info';
import VueDatePicker from './VueDatePicker.vue';
import { i18n }      from '../../plugins/i18n/i18n';
import { action }    from '@storybook/addon-actions';

const story = (storiesOf('VueDatePicker', module) as any);

story.addDecorator(VueInfoAddon);

story.add('Default', () => ({
  components: { VueDatePicker },
  template:   `<vue-date-picker @change="action" :first-day-of-week="1" placeholder="Select a date" />`,
  i18n,
  methods:    {
    action: action('@change'),
  },
}));
