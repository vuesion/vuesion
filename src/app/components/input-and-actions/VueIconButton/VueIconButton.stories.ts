import type { StoryFn } from '@storybook/vue3-vite';
import VueIconButton from './VueIconButton.vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import { ButtonStyleValues, ShirtSizeValues } from '@/components/utils/prop-types';
import { action } from 'storybook/actions';

export default {
  title: 'Input and Actions/IconButton',
  component: VueIconButton,
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['button', 'a', 'nuxt-link'],
    },
    look: {
      control: { type: 'select' },
      options: ButtonStyleValues,
    },
    size: {
      control: { type: 'select' },
      options: ShirtSizeValues,
    },
  },
};

const Template: StoryFn = (args) => ({
  components: {
    VueIconButton,
    ComponentDocs,
  },
  inheritAttrs: false,
  setup() {
    return { args, onClick: action('@click') };
  },
  template: `<component-docs
      component-name="IconButton"
      usage="Used to display a button that only contains an icon."
  >
      <vue-icon-button v-bind="args" @click="onClick" />
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {
    label: 'Label',
    as: 'button',
    disabled: false,
    icon: 'dots-horizontal',
    loading: false,
    look: 'outline',
    size: 'md',
    type: 'button',
  },
};
