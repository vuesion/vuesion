import { Story } from '@storybook/vue3';
import LearnMore from './LearnMore.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Marketing/LearnMore',
  component: LearnMore,
};

const Template: Story = (args) => ({
  components: { LearnMore, ComponentDocs },
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

export const Default = Template.bind({});
Default.args = {};
