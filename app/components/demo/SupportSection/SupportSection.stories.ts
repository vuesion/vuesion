import type { StoryFn } from '@storybook/vue3';
import SupportSection from './SupportSection.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Demo/SupportSection',
  component: SupportSection,
  argTypes: {},
};

const Template: StoryFn = (args) => ({
  components: {
    SupportSection,
    ComponentDocs,
  },
  inheritAttrs: false,
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="SupportSection"
      usage="TBD"
  >
      <support-section v-bind="args" />
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {},
};
