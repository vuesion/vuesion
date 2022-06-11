import CTokens from './components/ColorTokens.vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Foundation/General',
  component: null,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
  parameters: { controls: { disabled: true } },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    ComponentDocs,
    CTokens,
  },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<component-docs
      component-name="Color tokens"
      usage="The Vuesion color system aims to make user interfaces more usable by helping teams apply colors in a functional and meaningful way.
Color tokens are defined by their function in an interface.
This allows the designer to focus “how” and “why” rather than “what color should this be?”"
      suffix=""
  >
  <c-tokens />
  </component-docs>`,
});

export const ColorTokens = Template.bind({});
