import { storiesOf }                                    from '@storybook/vue';
import VueInfoAddon                                     from 'storybook-addon-vue-info';
import { action }                                       from '@storybook/addon-actions';
import VueDataTable                                     from './VueDataTable.vue';
import { i18n }                                         from '../../plugins/i18n/i18n';
import { dataTableDataFixture, dataTableHeaderFixture } from './DataTableFixtures';

const story = (storiesOf('VueDataTable', module) as any);

story.addDecorator(VueInfoAddon);

story.add('Default', () => ({
  i18n,
  components: { VueDataTable },
  data() {
    return {
      header: dataTableHeaderFixture,
      data:   dataTableDataFixture,
    };
  },
  template:   `<vue-data-table :header="header" :data="data" placeholder="Search" @click="action" />`,
  methods:    {
    action: action('@onClick'),
  },
}));

story.add('All Props', () => ({
  i18n,
  components: { VueDataTable },
  data() {
    return {
      header: dataTableHeaderFixture,
      data:   dataTableDataFixture,
    };
  },
  template:   `<vue-data-table :header="header" :data="data" :show-search="false" :page="1" :max-rows="10" @click="action" />`,
  methods:    {
    action: action('@onClick'),
  },
}));
