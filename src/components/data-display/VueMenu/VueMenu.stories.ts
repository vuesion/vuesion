import type { StoryFn } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import VueMenu from './VueMenu.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Data Display/Menu',
  component: VueMenu,
  argTypes: {},
};

const Template: StoryFn = (args) => ({
  components: {
    VueMenu,
    ComponentDocs,
  },

  inheritAttrs: false,
  setup() {
    return { args, onClick: action('click'), onClose: action('close') };
  },

  template: `<component-docs
      component-name="Menu"
      usage="Allows users to interact with a list of actions."
      story="Display menu with all interaction states. Please interact with the menu to see all states."
      no-bg
  >
  <vue-menu :items="args.items" @click="onClick" @close="onClose" />
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {
    items: [
      { label: 'Value 1', value: 'Value 1', description: 'Description 1', leadingIcon: 'cog' },
      { label: 'Value 2', value: 'Value 2', description: 'Description 2', trailingIcon: 'times', disabled: true },
      { label: '', value: 'separator' },
      { label: 'Value 3 with a longer label', value: 'Value 3', leadingIcon: 'cog' },
      { label: 'Value 4', value: 'Value 4', trailingIcon: 'times' },
    ],
  },
};
