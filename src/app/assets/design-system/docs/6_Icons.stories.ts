import type { StoryFn } from '@storybook/vue3-vite';
import IconList from '@/assets/design-system/docs/components/IconList.vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Design System Foundation',
  component: IconList,
  argTypes: {},
};

const Template: StoryFn = (args) => ({
  components: {
    IconList,
    ComponentDocs,
  },
  inheritAttrs: false,
  setup() {
    return { args };
  },
  template: `<component-docs component-name="Iconography" usage="Feather Icons.">
      <icon-list v-bind="args"/>
  </component-docs>`,
});

export const Iconography = {
  render: Template,
  args: {},
};
