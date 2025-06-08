import type { StoryFn } from '@storybook/vue3-vite';
import VuePopover from './VuePopover.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';
import VueIconInfoCircle from '~/components/icons/VueIconInfoCircle.vue';
import type { Placement } from '@floating-ui/vue';

export default {
  components: { VuePopover },
  title: 'Data-display/Popover',
  component: VuePopover,
  argTypes: {},
};

const Template: StoryFn = (args) => ({
  components: {
    VuePopover,
    VueIconInfoCircle,
    ComponentDocs,
  },
  inheritAttrs: false,
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="Popover"
      usage="Used to display additional information. The popover positions itself to always fit within the viewport."
  >
    <div style="display:flex;align-items: center;justify-content: center;height: 400px">
      <vue-popover v-bind="args">
        <template #trigger>
          <vue-icon-info-circle />
        </template>
        <template #content>
          <strong>Headline</strong>
          <ul>
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3</li>
          </ul>
        </template>
      </vue-popover>
    </div>
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {
    placement: 'top',
    fallbackPlacements: ['bottom', 'right', 'left'],
  },
};
