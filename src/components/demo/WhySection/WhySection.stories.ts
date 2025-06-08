import type { StoryFn } from '@storybook/vue3-vite';
import WhySection from './WhySection.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Demo/WhySection',
  component: WhySection,
  argTypes: {},
};

const Template: StoryFn = (args) => ({
  components: {
    WhySection,
    ComponentDocs,
  },
  inheritAttrs: false,
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="WhySection"
      usage="TBD"
  >
      <why-section v-bind="args" />
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {},
};
