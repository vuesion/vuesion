import type { StoryFn } from '@storybook/vue3';
import TestimonialsSection from './TestimonialsSection.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Demo/TestimonialsSection',
  component: TestimonialsSection,
  argTypes: {},
};

const Template: StoryFn = (args) => ({
  components: {
    TestimonialsSection,
    ComponentDocs,
  },
  inheritAttrs: false,
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="TestimonialsSection"
      usage="TBD"
  >
      <testimonials-section v-bind="args" />
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {},
};
