import type { StoryFn } from '@storybook/vue3';
import LandingPageHeroSection from './LandingPageHeroSection.vue';
import ComponentDocs from 'assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Demo/LandingPageHeroSection',
  component: LandingPageHeroSection,
  argTypes: {},
};

const Template: StoryFn = (args) => ({
  components: {
    LandingPageHeroSection,
    ComponentDocs,
  },
  inheritAttrs: false,
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="LandingPageHeroSection"
      usage="TBD"
  >
      <landing-page-hero-section v-bind="args" />
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {},
};
