import type { StoryFn } from '@storybook/vue3';
import VueAvatar from './VueAvatar.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';
import { ShirtSizeValues } from '~/app/components/prop-types';

export default {
  title: 'Data Display/Avatar',
  component: VueAvatar,
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

const Template: StoryFn = (args) => ({
  components: {
    VueAvatar,
    ComponentDocs,
  },
  inheritAttrs: false,
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="Avatar"
      usage="Used to show a thumbnail of a user or other items (such as a product)."
  >
    <vue-avatar v-bind="args" />
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {
    name: 'Isabella-Maria Del Campo',
    icon: 'user',
    src: undefined,
    size: 'sm',
  },
};
