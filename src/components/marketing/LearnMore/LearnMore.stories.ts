import { StoryFn } from '@storybook/vue3';
import LearnMore from './LearnMore.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Marketing/LearnMore',
  component: LearnMore,
};

const Template: StoryFn = (args) => ({
  components: { LearnMore, ComponentDocs },
  inheritAttrs: false,
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="LearnMore"
      usage="Used to display additional information and resources."
      story="Display a section to learn more about vuesion and a section for examples."
  >
  <learn-more />
  </component-docs>`,
});

export const Default = {
  render: Template,
  args: {},
};
