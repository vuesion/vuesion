import { StoryFn } from '@storybook/vue3';
import VueColumns from './VueColumns.vue';
import VueColumn from './VueColumn/VueColumn.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Foundation/Layout',
  component: VueColumns,
};

const Template: StoryFn = (args) => ({
  components: { VueColumns, VueColumn, ComponentDocs },
  inheritAttrs: false,
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="Columns"
      usage="The Columns are used to lay out content horizontally.
They can be used together with the Stack to implement a very flexible
Grid system and also allow to stack them based on the viewport."
  >
  <vue-columns v-bind="args" style="border: 1px solid var(--brand-border-default-medium);">
    <vue-column :width="['full', '4/12', '4/12', 'fit']" style="border: 1px solid var(--brand-border-danger-low);">
      Column 1
    </vue-column>
    <vue-column :width="['full', '4/12', '4/12', '8/12']" style="border: 1px solid var(--brand-border-danger-low);">
      Column 2
    </vue-column>
    <vue-column :width="['full', '4/12', '4/12', '2/12']" style="border: 1px solid var(--brand-border-danger-low);">
      Column 3
    </vue-column>
  </vue-columns>
  </component-docs>`,
});

export const Columns = {
  render: Template,

  args: {
    as: 'div',
    space: ['8', '16', '24', '48', '192'],
    alignX: ['start', 'center', 'end'],
    alignY: ['start', 'center', 'end'],
    reverse: [true, false, true, false, false],
    stackPhone: true,
    stackTabletPortrait: false,
    stackTabletLandscape: true,
    stackSmallDesktop: false,
    stackLargeDesktop: false,
  },
};
