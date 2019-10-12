import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import VueCalendar from './VueCalendar.vue';
import { i18n } from '../../plugins/i18n/i18n';

const story = storiesOf('Organisms|Calendar', module) as any;

story.add(
  'Default',
  withInfo({})(() => ({
    components: { VueCalendar },
    template: `<vue-calendar :firstDayOfWeek="1"/>`,
    i18n,
  })),
);

story.add(
  'MinDate',
  withInfo({})(() => ({
    data: () => ({
      today: new Date(),
    }),
    components: { VueCalendar },
    template: `<vue-calendar :min-date="today" />`,
    i18n,
  })),
);

story.add(
  'MaxDate',
  withInfo({})(() => ({
    data: () => ({
      today: new Date(),
    }),
    components: { VueCalendar },
    template: `<vue-calendar :max-date="today" />`,
    i18n,
  })),
);
