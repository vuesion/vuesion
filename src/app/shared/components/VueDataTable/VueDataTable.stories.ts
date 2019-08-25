import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { action } from '@storybook/addon-actions';
import VueDataTable from './VueDataTable.vue';
import { i18n } from '../../plugins/i18n/i18n';
import { dataTableDataFixture, dataTableHeaderFixture } from './DataTableFixtures';
import VueDropdownMenu from '../VueDropdownMenu/VueDropdownMenu.vue';

const story = storiesOf('Organisms|DataTable', module) as any;

story.add(
  'Default',
  withInfo({})(() => ({
    i18n,
    components: { VueDataTable },
    data() {
      return {
        header: dataTableHeaderFixture,
        data: dataTableDataFixture,
      };
    },
    template: `<vue-data-table :header="header" :data="data" placeholder="Search" @click="action" />`,
    methods: {
      action: action('@onClick'),
    },
  })),
);

story.add(
  'All Props',
  withInfo({})(() => ({
    i18n,
    components: { VueDataTable },
    data() {
      return {
        header: dataTableHeaderFixture,
        data: dataTableDataFixture,
      };
    },
    template: `<vue-data-table :header="header" :data="data" :show-search="false" :page="1" :max-rows="0" @click="action" />`,
    methods: {
      action: action('@onClick'),
    },
  })),
);

story.add(
  'Custom Cell Renderer',
  withInfo({})(() => ({
    i18n,
    components: { VueDataTable },
    data() {
      return {
        header: dataTableHeaderFixture,
        data: dataTableDataFixture,
      };
    },
    template: `<vue-data-table :header="header" :data="data" placeholder="Search" @click="action">
  <template v-slot:date="{ cell }">{{ new Date(cell.value).toDateString() }}</template>
</vue-data-table>`,
    methods: {
      action: action('@onClick'),
    },
  })),
);

story.add(
  'Access Row',
  withInfo({})(() => ({
    i18n,
    components: { VueDataTable, VueDropdownMenu },
    data() {
      return {
        header: dataTableHeaderFixture,
        data: dataTableDataFixture,
      };
    },
    template: `<vue-data-table :header="header" :data="data" placeholder="Search" @click="action">
  <template v-slot:actions="{ row }">
    <vue-dropdown-menu :options="[{label:'Delete', value:'delete'}]" @click="click(row)">Select</vue-dropdown-menu>
  </template>
</vue-data-table>`,
    methods: {
      action: action('@onClick'),
      click(row: any) {
        alert(JSON.stringify(row));
      },
    },
  })),
);

story.add(
  'Initial sort',
  withInfo({})(() => ({
    i18n,
    components: { VueDataTable },
    data() {
      return {
        header: dataTableHeaderFixture,
        data: dataTableDataFixture,
      };
    },
    template: `<vue-data-table :header="header" :data="data" sort-key="firstname" sort-direction="desc" @click="action" />`,
    methods: {
      action: action('@onClick'),
    },
  })),
);

story.add(
  'Column Css Classes',
  withInfo({})(() => ({
    i18n,
    components: { VueDataTable },
    data() {
      return {
        header: dataTableHeaderFixture,
        data: dataTableDataFixture,
      };
    },
    template: `<div>Look at the source for a second css class in the age column<br/><vue-data-table :header="header" :data="data" @click="action" /></div>`,
    methods: {
      action: action('@onClick'),
    },
  })),
);
