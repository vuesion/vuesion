import { StoryFn } from '@storybook/vue3';
import VueTiles from './VueTiles.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Foundation/Layout',
  component: VueTiles,
};

const Template: StoryFn = (args) => ({
  components: { VueTiles, ComponentDocs },
  inheritAttrs: false,
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="Tiles"
      usage="The Tiles component allows you to render a grid of elements.
You can change the vertical space,
horizontal space and amount of columns oer viewport."
  >
  <vue-tiles v-bind="args" style="border: 1px solid var(--brand-border-default-medium);">
    <span>Lorem Ipsum</span>
    <span>Lorem Ipsum</span>
    <span>Lorem Ipsum</span>
    <span>Lorem Ipsum</span>
    <span>Lorem Ipsum</span>
    <span>Lorem Ipsum</span>
    <span>Lorem Ipsum</span>
    <span>Lorem Ipsum</span>
    <span>Lorem Ipsum</span>
    <span>Lorem Ipsum</span>
  </vue-tiles>
  </component-docs>`,
});

export const Tiles = {
  render: Template,

  args: {
    as: 'div',
    verticalSpace: [8, 16, 24, 48],
    horizontalSpace: [16, 16, 48, 8],
    columns: [1, 2, 3, 5],
  },
};
