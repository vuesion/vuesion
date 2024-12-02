import type { StoryFn } from '@storybook/vue3';
import BenefitsSection from './BenefitsSection.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Demo/BenefitsSection',
  component: BenefitsSection,
  argTypes: {},
};

const Template: StoryFn = (args) => ({
  components: {
    BenefitsSection,
    ComponentDocs,
  },
  inheritAttrs: false,
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="BenefitsSection"
      usage="TBD"
  >
      <benefits-section v-bind="args" />
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {},
};
