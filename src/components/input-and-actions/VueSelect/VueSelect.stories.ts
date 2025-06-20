import type { StoryFn } from '@storybook/vue3-vite';
import { ref } from 'vue';
import VueSelect from './VueSelect.vue';
import VueStack from '~/components/layout/VueStack/VueStack.vue';
import VueText from '~/components/typography/VueText/VueText.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';
import {
  BadgeStatusValues,
  HorizontalDirectionValues,
  ShirtSizeValues,
  VerticalDirectionValues,
} from '~/components/prop-types';

export default {
  title: 'Input & Actions/Select',
  component: VueSelect,
  argTypes: {
    modelValue: { table: { disable: true } },
    'update:modelValue': { table: { disable: true } },
    size: {
      options: ShirtSizeValues,
      control: { type: 'select' },
    },
    badgeStatus: {
      options: BadgeStatusValues,
      control: { type: 'select' },
    },
  },
};

const Template: StoryFn = (args) => ({
  components: {
    VueSelect,
    ComponentDocs,
    VueStack,
    VueText,
  },
  data(): any {
    return {
      model: true,
    };
  },
  inheritAttrs: false,
  setup() {
    const model = ref(null);
    return {
      args,
      model,
    };
  },
  template: `<component-docs
      component-name="Select"
      usage="Select lets users choose one option from an options menu.
    Consider select when you have 4 or more options, to avoid cluttering the interface.
    Different from dropdown menu because it is used for data entry in forms."
      story="Display select component with all properties. Please interact with the select to see different states."
  >
  <vue-stack>
    <vue-text weight="semi-bold">v-model: {{ model }}</vue-text>
    <vue-select v-bind="args" v-model="model" :leading-icon="model?.leadingIcon">
      <template #info>
        This is a test with a <a href="#">link.</a>
      </template>
    </vue-select>
  </vue-stack>
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {
    id: 'select',
    name: 'select',
    label: 'Label',
    hideLabel: false,
    hideDescription: false,
    required: true,
    validation: 'required',
    disabled: false,
    items: [
      { label: 'Trigger validation', value: '' },
      { leadingIcon: 'user', label: 'Option 1', value: '1' },
      { leadingIcon: 'mail', label: 'Option 2', value: '2' },
      { leadingIcon: 'times', label: 'Option 3', value: '3' },
      { label: 'Option 4', value: '4' },
      { label: 'Option 5', value: '5' },
      { leadingIcon: 'login', label: 'Option 6', value: '6' },
      { label: 'Option 7', value: '7' },
      { label: 'Option 8', value: '8' },
      { label: 'Option 9', value: '9' },
      { label: 'Option 10', value: '10' },
    ],
    placeholder: 'Please select an option',
    description: 'Description',
    errorMessage: 'Error message',
    duration: 250,
    size: 'md',
    multiSelect: false,
    badgeStatus: 'neutral',
  },
};
