import { StoryFn } from '@storybook/vue3';
import VueLoader from './VueLoader.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Data Display/Loader',
  component: VueLoader,

  argTypes: {},
  parameters: { controls: { disabled: true } },
};

const Template: StoryFn = (args) => ({
  components: {
    VueLoader,
    ComponentDocs,
  },

  inheritAttrs: false,
  setup() {
    return { args };
  },

  template: `<component-docs
      component-name="Loader"
      usage="Used to provide visual feedback that data is being loaded."
      story="Display the loader in different contexts. The color is dictated by the text color of the context">
    <vue-loader v-bind="args" />
  </component-docs>`,
});

export const Default = {
  render: Template,
  args: {},
};
