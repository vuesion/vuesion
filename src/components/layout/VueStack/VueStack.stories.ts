import type { StoryFn } from '@storybook/vue3';
import VueStack from './VueStack.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Foundation/Layout',
  component: VueStack,
};

const Template: StoryFn = (args) => ({
  components: { VueStack, ComponentDocs },
  inheritAttrs: false,
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="Stack"
      usage="The Stack component covers the most common use case - stacking elements
and provide whitespace between them.
You can nest multiple stacks to achieve full flexibility."
  ><vue-stack v-bind="args" style="border: 1px solid var(--border-default-medium);">
    <span>Lorem Ipsum</span>
    <span>Lorem Ipsum</span>
    <span>Lorem Ipsum</span>
    <span>Lorem Ipsum</span>
    <span>Lorem Ipsum</span>
  </vue-stack>
  </component-docs>`,
});

export const Stack = {
  render: Template,

  args: {
    as: 'div',
    space: [8, 16, 24, 48, 192],
    alignX: ['start', 'center', 'end'],
  },
};
