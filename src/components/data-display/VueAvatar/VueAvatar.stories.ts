import VueAvatar from './VueAvatar.vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import { ShirtSizeValues } from '~/components/prop-types';

export default {
  title: 'Data Display/Avatar',
  component: VueAvatar,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    src: {
      control: { type: 'select' },
      options: [
        null,
        'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3150&q=80',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ShirtSizeValues,
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    VueAvatar,
    ComponentDocs,
  },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<component-docs
      component-name="Avatar"
      usage="Used to show a thumbnail of a user or other items (such as a product)."
  >
    <vue-avatar v-bind="args" />
  </component-docs>`,
});

export const Default = Template.bind({});

Default.args = {
  name: 'Isabella-Maria Del Campo',
  icon: '',
  src: null,
  size: 'sm',
};
