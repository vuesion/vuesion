import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import VuePagination from './VuePagination.vue';
import { i18n } from '@/test/test-utils';

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
    template: `<vue-pagination :pages="10 " :current="page" @change="action($event);page=$event" />`,
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
