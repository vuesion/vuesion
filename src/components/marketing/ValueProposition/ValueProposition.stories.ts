import { StoryFn } from '@storybook/vue3';
import ValueProposition from './ValueProposition.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Marketing/ValueProposition',
  component: ValueProposition,
};

const Template: StoryFn = (args) => ({
  components: { ValueProposition, ComponentDocs },
  inheritAttrs: false,
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="ValueProposition"
      usage="Used to convey the benefits of the product for different target audiences."
      story="Display value propositions for PMs, Engineering Managers, Engineers, Designers and teams."
  >
  <value-proposition />
  </component-docs>`,
});

export const Default = {
  render: Template,
  args: {},
};
