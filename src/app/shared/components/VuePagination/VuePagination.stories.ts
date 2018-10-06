import { storiesOf } from '@storybook/vue';
import VueInfoAddon  from 'storybook-addon-vue-info';
import VuePagination from './VuePagination.vue';
import { action }    from '@storybook/addon-actions';
import { i18n }      from '../../plugins/i18n/i18n';

const story = (storiesOf('VuePagination', module) as any);

story.addDecorator(VueInfoAddon);

story.add('Default', () => ({
  i18n,
  components: { VuePagination },
  data() {
    return {
      page: 1,
    };
  },
  template:   `<vue-pagination :pages="10 " :current="page" @change="action($event);page=$event" />`,
  methods:    {
    action: action('@change'),
  },
}));
