import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { i18n } from '@/test/i18n';
import VueCalendar from './VueCalendar.vue';

const story = storiesOf('Organisms|Calendar', module) as any;

story.add(
  'Default',
  () => ({
    components: { VueCalendar },
    template: `<vue-calendar :firstDayOfWeek="1" @change="onChange" @close="onClose" />`,
    i18n,
    methods: {
      onChange: action('@change'),
      onClose: action('@close'),
    },
  }),
  {
    info: {
      components: { VueCalendar },
    },
  },
);

story.add(
  'MinDate',
  () => ({
    data: () => ({
      today: new Date(),
    }),
    components: { VueCalendar },
    template: `<vue-calendar :min-date="today" @change="onChange" @close="onClose" />`,
    i18n,
    methods: {
      onChange: action('@change'),
      onClose: action('@close'),
    },
  }),
  {
    info: {
      components: { VueCalendar },
    },
  },
);

story.add(
  'MaxDate',
  () => ({
    data: () => ({
      today: new Date(),
    }),
    components: { VueCalendar },
    template: `<vue-calendar :max-date="today" @change="onChange" @close="onClose" />`,
    i18n,
    methods: {
      onChange: action('@change'),
      onClose: action('@close'),
    },
  }),
  {
    info: {
      components: { VueCalendar },
    },
  },
);
