import type { StoryFn } from '@storybook/vue3';
import ExpertiseSection from './ExpertiseSection.vue';
import ComponentDocs from '~/app/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Demo/ExpertiseSection',
  component: ExpertiseSection,
  argTypes: {},
};

const Template: StoryFn = (args) => ({
  components: {
    ExpertiseSection,
    ComponentDocs,
  },
  inheritAttrs: false,
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="ExpertiseSection"
      usage="TBD"
  >
      <expertise-section v-bind="args" />
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {},
};
