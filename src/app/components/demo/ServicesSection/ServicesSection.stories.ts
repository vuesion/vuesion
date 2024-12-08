import type { StoryFn } from '@storybook/vue3';
import ServicesSection from './ServicesSection.vue';
import ComponentDocs from '~/app/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Demo/ServicesSection',
  component: ServicesSection,
  argTypes: {},
};

const Template: StoryFn = (args) => ({
  components: {
    ServicesSection,
    ComponentDocs,
  },
  inheritAttrs: false,
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="ServicesSection"
      usage="TBD"
  >
      <services-section v-bind="args" />
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {},
};
