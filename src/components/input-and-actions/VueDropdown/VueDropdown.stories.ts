import type { StoryFn } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import VueDropdown from './VueDropdown.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';
import { HorizontalDirectionValues, ShirtSizeValues, VerticalDirectionValues } from '~/components/prop-types';

export default {
  title: 'Input & Actions/Dropdown',
  component: VueDropdown,
  argTypes: {
    modelValue: { table: { disable: true } },
    'update:modelValue': { table: { disable: true } },
    size: {
      options: ShirtSizeValues,
      control: { type: 'select' },
    },
  },
};

const Template: StoryFn = (args) => ({
  components: {
    VueDropdown,
    ComponentDocs,
  },
  inheritAttrs: false,
  setup() {
    return {
      args,
      onClick: action('@click'),
      onItemClick: action('@item-click'),
    };
  },
  template: `<component-docs
      component-name="Dropdown"
      usage="Used to provide a list of actions that a user can take or change a setting."
      story="Display a dropdown with all menu item variations. Please interact with the dropdown via mouse and keyboard."
  >
  <vue-dropdown v-bind="args" @click="onClick" @item-click="onItemClick" />
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {
    items: [
      { label: 'Save', value: 'save', leadingIcon: 'save' },
      { label: '', value: 'separator' },
      { label: 'Open', value: 'open', leadingIcon: 'folder' },
      { label: 'Delete', value: 'delete', leadingIcon: 'trash' },
    ],
    buttonText: 'Dropdown Button',
    duration: 250,
    size: 'md',
  },
};
