import { StoryFn } from '@storybook/vue3';
import VueInline from './VueInline.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Foundation/Layout',
  component: VueInline,
};

const Template: StoryFn = (args) => ({
  components: { VueInline, ComponentDocs },
  inheritAttrs: false,
  setup() {
    return { args };
  },
  template: `<component-docs
        component-name="Inline"
        usage="The Inline component allows you to render a set of elements in a row
with equal spacing around them, wrapping onto multiple lines when necessary.
The elements can be stacked per viewport."
    >
    <vue-inline v-bind="args" style="border: 1px solid var(--brand-border-default-medium);">
      <span>Item 1</span>
      <span>Item 2</span>
      <span>Item 3</span>
      <span>Item 4</span>
      <span>Item 5</span>
      <span>Item 6</span>
    </vue-inline>
    </component-docs>`,
});

export const Inline = {
  render: Template,

  args: {
    as: 'div',
    space: [8, 16, 24, 48, 192],
    alignX: ['start', 'center', 'end'],
    alignY: ['start', 'center', 'end'],
    reverse: [true, false, true, false, false],
    noWrap: false,
    stackPhone: true,
    stackTabletPortrait: false,
    stackTabletLandscape: true,
    stackSmallDesktop: false,
    stackLargeDesktop: false,
  },
};
