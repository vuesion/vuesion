import VueLoader from './VueLoader.vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Data Display/Loader',
  component: VueLoader,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
  parameters: { controls: { disabled: true } },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    VueLoader,
    ComponentDocs,
  },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<component-docs
      component-name="Loader"
      usage="Used to provide visual feedback that data is being loaded."
      story="Display the loader in different contexts. The color is dictated by the text color of the context">
    <vue-loader v-bind="args" />
  </component-docs>`,
});

export const Default = Template.bind({});

Default.args = {};
