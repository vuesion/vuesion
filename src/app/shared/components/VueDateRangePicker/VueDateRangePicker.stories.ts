import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import VueDateRangePicker from './VueDateRangePicker.vue';
import { i18n } from '../../plugins/i18n/i18n';
import { action } from '@storybook/addon-actions';

const story = storiesOf('Organisms|DateRangePicker', module) as any;

story.add(
  'Default',
  withInfo({})(() => ({
    components: { VueDateRangePicker },
    template: `<vue-date-range-picker @change="action" :first-day-of-week="1" placeholder-start="Select a start date" placeholder-end="Select a end date" />`,
    i18n,
    methods: {
      action: action('@change'),
    },
  })),
);

story.add(
  'MinDate',
  withInfo({})(() => ({
    data: () => ({
      today: new Date(),
    }),
    components: { VueDateRangePicker },
    template: `<vue-date-range-picker @change="action" :first-day-of-week="1" placeholder-start="Select a start date" placeholder-end="Select a end date" :min-date="today" />`,
    i18n,
    methods: {
      action: action('@change'),
    },
  })),
);

story.add(
  'MaxDate',
  withInfo({})(() => ({
    data: () => ({
      today: new Date(),
    }),
    components: { VueDateRangePicker },
    template: `<vue-date-range-picker @change="action" :first-day-of-week="1" placeholder-start="Select a start date" placeholder-end="Select a end date" :max-date="today" />`,
    i18n,
    methods: {
      action: action('@change'),
    },
  })),
);
