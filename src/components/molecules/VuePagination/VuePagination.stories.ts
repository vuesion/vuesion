import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { i18n } from '@/test/i18n';
import VuePagination from './VuePagination.vue';

const story = storiesOf('Molecules|Pagination', module) as any;

story.add(
  'Default',
  () => ({
    i18n,
    components: { VuePagination },
    data() {
      return {
        page: 1,
      };
    },
    template: `<vue-pagination :pages="10 " :selected-page="page" @click="action($event);page=$event" />`,
    methods: {
      action: action('@change'),
    },
  }),
  {
    info: {
      components: { VuePagination },
    },
  },
);
