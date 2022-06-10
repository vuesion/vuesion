import VueColumns from './VueColumns.vue';
import VueColumn from './VueColumn/VueColumn.vue';

export default {
  title: 'Foundation/Layout',
  component: VueColumns,
};

const Template = (args) => ({
  components: { VueColumns, VueColumn },
  setup() {
    return { args };
  },
  template: `<vue-columns v-bind="args" style="border: 1px solid var(--brand-border-default-medium);">
    <vue-column :width="['full', '4/12', '4/12', 'fit']" style="border: 1px solid var(--brand-border-danger-low);">
      Column 1
    </vue-column>
    <vue-column :width="['full', '4/12', '4/12', '8/12']" style="border: 1px solid var(--brand-border-danger-low);">
      Column 2
    </vue-column>
    <vue-column :width="['full', '4/12', '4/12', '2/12']" style="border: 1px solid var(--brand-border-danger-low);">
      Column 3
    </vue-column>
  </vue-columns>`,
});

export const Columns = Template.bind({});

Columns.args = {
  as: 'div',
  space: ['8', '16', '24', '48', '192'],
  alignX: ['start', 'center', 'end'],
  alignY: ['start', 'center', 'end'],
  reverse: [true, false, true, false, false],
  noWrap: false,
  stackPhone: true,
  stackTabletPortrait: false,
  stackTabletLandscape: true,
  stackSmallDesktop: false,
  stackLargeDesktop: false,
};
