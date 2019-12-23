import { storiesOf } from '@storybook/vue';
import VueDatePicker from './VueDatePicker.vue';
import { i18n } from '../../plugins/i18n/i18n';
import { action } from '@storybook/addon-actions';

const story = storiesOf('Organisms|DatePicker', module) as any;

story.add(
  'Default',
  () => ({
    components: { VueDatePicker },
    template: `<vue-date-picker name="date" id="date" @change="action" :first-day-of-week="1" placeholder="Select a date" />`,
    i18n,
    methods: {
      action: action('@change'),
    },
  }),
  {
    info: {
      components: { VueDatePicker },
    },
  },
);

story.add(
  'MinDate',
  () => ({
    data: () => ({
      today: new Date(),
    }),
    components: { VueDatePicker },
    template: `<vue-date-picker name="date" id="date" @change="action" :first-day-of-week="1" placeholder="Select a date" :min-date="today" />`,
    i18n,
    methods: {
      action: action('@change'),
    },
  }),
  {
    info: {
      components: { VueDatePicker },
    },
  },
);

story.add(
  'MaxDate',
  () => ({
    data: () => ({
      today: new Date(),
    }),
    components: { VueDatePicker },
    template: `<vue-date-picker name="date" id="date" @change="action" :first-day-of-week="1" placeholder="Select a date" :max-date="today" />`,
    i18n,
    methods: {
      action: action('@change'),
    },
  }),
  {
    info: {
      components: { VueDatePicker },
    },
  },
);
