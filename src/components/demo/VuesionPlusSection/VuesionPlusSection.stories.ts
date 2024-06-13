import type { StoryFn } from '@storybook/vue3';
import VuesionPlusSection from './VuesionPlusSection.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Demo/VuesionPlusSection',
  component: VuesionPlusSection,
  argTypes: {},
};

const Template: StoryFn = (args) => ({
  components: {
    VuesionPlusSection,
    ComponentDocs,
  },
  inheritAttrs: false,
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="VuesionPlusSection"
      usage="TBD"
  >
      <vuesion-plus-section v-bind="args" />
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {},
};
