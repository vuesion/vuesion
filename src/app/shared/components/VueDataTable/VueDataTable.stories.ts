import { storiesOf }                                    from '@storybook/vue';
import VueInfoAddon                                     from 'storybook-addon-vue-info';
import { action }                                       from '@storybook/addon-actions';
import VueDataTable                                     from './VueDataTable.vue';
import { i18n }                                         from '../../plugins/i18n/i18n';
import { dataTableDataFixture, dataTableHeaderFixture } from './DataTableFixtures';
import VueButton                                        from '../VueButton/VueButton.vue';

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
  template:   `<vue-data-table :header="header" :data="data" :show-search="false" :page="1" :max-rows="0" @click="action" />`,
  methods:    {
    action: action('@onClick'),
  },
}));

story.add('Custom Cell Renderer', () => ({
  i18n,
  components: { VueDataTable },
  data() {
    return {
      header: dataTableHeaderFixture,
      data:   dataTableDataFixture,
    };
  },
  template:   `<vue-data-table :header="header" :data="data" placeholder="Search" @click="action">
  <template slot="date" slot-scope="{cell}">{{ new Date(cell.value).toDateString() }}</template>
</vue-data-table>`,
  methods:    {
    action: action('@onClick'),
  },
}));

story.add('Access Row', () => ({
  i18n,
  components: { VueDataTable, VueButton },
  data() {
    return {
      header: dataTableHeaderFixture,
      data:   dataTableDataFixture,
    };
  },
  template:   `<vue-data-table :header="header" :data="data" placeholder="Search" @click="action">
  <template slot="actions" slot-scope="{row}"><vue-button danger @click.stop.prevent="click(row)">delete</vue-button></template>
</vue-data-table>`,
  methods:    {
    action: action('@onClick'),
    click(row: any) {
      alert(JSON.stringify(row));
    },
  },
}));
