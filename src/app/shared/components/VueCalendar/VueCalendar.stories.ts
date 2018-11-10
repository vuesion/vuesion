import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import VueCalendar from './VueCalendar.vue';
import { i18n } from '../../plugins/i18n/i18n';

const story = storiesOf('2. Components|Calendar', module) as any;

story.add(
  'Default',
  withInfo({})(() => ({
    components: { VueCalendar },
    template: `<vue-calendar />`,
    i18n,
  })),
);
