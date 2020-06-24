import { storiesOf } from '@storybook/vue';
import VueCalendar from './VueCalendar.vue';
import { i18n } from '@/components/plugins/i18n/i18n';

const story = storiesOf('Organisms|Calendar', module) as any;

story.add(
  'Default',
  () => ({
    components: { VueCalendar },
    template: `<vue-calendar :firstDayOfWeek="1"/>`,
    i18n,
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
    template: `<vue-calendar :min-date="today" />`,
    i18n,
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
    template: `<vue-calendar :max-date="today" />`,
    i18n,
  }),
  {
    info: {
      components: { VueCalendar },
    },
  },
);
