import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import VuePagination from './VuePagination.vue';
import { action } from '@storybook/addon-actions';
import { i18n } from '../../plugins/i18n/i18n';

const story = storiesOf('Molecules|Pagination', module) as any;

story.add(
  'Default',
  withInfo({})(() => ({
    i18n,
    components: { VuePagination },
    data() {
      return {
        page: 1,
      };
    },
    template: `<vue-pagination :pages="10 " :current="page" @change="action($event);page=$event" />`,
    methods: {
      action: action('@change'),
    },
  })),
);
