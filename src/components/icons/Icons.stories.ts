import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import IconList from '~/components/icons/IconList.vue';

export default {
  title: 'Foundation/General',
  component: IconList,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
  parameters: { controls: { disabled: true } },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    IconList,
    ComponentDocs,
  },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<component-docs
      component-name="Hero Icons"
      usage="Filled ( 20 x 20 )"
      suffix=""
  >
  <icon-list/>
  </component-docs>`,
});

export const Iconography = Template.bind({});
