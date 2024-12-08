import type { StoryFn } from '@storybook/vue3';
import ServicesHeroSection from './ServicesHeroSection.vue';
import ComponentDocs from '~/app/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Demo/ServicesHeroSection',
  component: ServicesHeroSection,
  argTypes: {},
};

const Template: StoryFn = (args) => ({
  components: {
    ServicesHeroSection,
    ComponentDocs,
  },
  inheritAttrs: false,
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="ServicesHeroSection"
      usage="TBD"
  >
      <services-hero-section v-bind="args" />
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {},
};
