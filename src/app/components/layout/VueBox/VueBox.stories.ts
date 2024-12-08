import type { StoryFn } from '@storybook/vue3';
import VueBox from './VueBox.vue';
import ComponentDocs from '~/app/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Foundation/Layout',
  component: VueBox,
};

const Template: StoryFn = (args) => ({
  components: { VueBox, ComponentDocs },
  inheritAttrs: false,
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="Box"
      usage="The Box is the most low-level layout component.
Its job is to render an individual element on the screen.
In terms of page layout, Box most notably provides a set of
padding options which can be used to create container elements with internal spacing."
  >
  <vue-box v-bind="args" style="border: 1px solid var(--border-default-medium); height: 300px;">
    Lorem Ipsum
  </vue-box>
  </component-docs>`,
});

export const Box = {
  render: Template,

  args: {
    as: 'div',
    padding: ['8', '8 16', '12 24 64 10', '80', '144'],
    alignX: ['start', 'center', 'end'],
    alignY: ['start', 'center', 'end'],
  },
};
