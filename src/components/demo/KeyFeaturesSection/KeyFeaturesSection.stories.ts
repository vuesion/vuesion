import type { StoryFn } from '@storybook/vue3-vite';
import KeyFeaturesSection from './KeyFeaturesSection.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Demo/KeyFeaturesSection',
  component: KeyFeaturesSection,
  argTypes: {},
};

const Template: StoryFn = (args) => ({
  components: {
    KeyFeaturesSection,
    ComponentDocs,
  },
  inheritAttrs: false,
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="KeyFeaturesSection"
      usage="TBD"
  >
      <key-features-section v-bind="args" />
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {},
};
