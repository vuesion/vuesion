import type { StoryFn } from '@storybook/vue3-vite';
import IconList from '~/assets/design-system/docs/components/IconList.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Foundation/General',
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
  template: `<component-docs
      component-name="Hero Icons"
      usage="Filled ( 20 x 20 )"
      suffix=""
  >
      <icon-list v-bind="args"/>
  </component-docs>`,
});

export const Iconography = {
  render: Template,
  args: {
    showIcons: false,
  },
};
