import type { StoryFn } from '@storybook/vue3';
import ContactSection from './ContactSection.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Demo/ContactSection',
  component: ContactSection,
  argTypes: {},
};

const Template: StoryFn = (args) => ({
  components: {
    ContactSection,
    ComponentDocs,
  },
  inheritAttrs: false,
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="ContactSection"
      usage="TBD"
  >
      <contact-section v-bind="args" />
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {},
};
