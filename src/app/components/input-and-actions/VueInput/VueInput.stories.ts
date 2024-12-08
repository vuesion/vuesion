import type { StoryFn } from '@storybook/vue3';
import { ref } from 'vue';
import { action } from '@storybook/addon-actions';
import VueInput from './VueInput.vue';
import VueText from '~/app/components/typography/VueText/VueText.vue';
import ComponentDocs from '~/app/assets/design-system/docs/components/ComponentDocs.vue';
import { ShirtSizeValues } from '~/app/components/prop-types';
import VueStack from '~/app/components/layout/VueStack/VueStack.vue';

export default {
  components: { VueStack },
  title: 'Input & Actions/Input',
  component: VueInput,
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
    VueInput,
    ComponentDocs,
    VueStack,
    VueText,
  },
  inheritAttrs: false,
  setup() {
    const model = ref(null);
    return {
      args,
      model,
      onLeadingIconClick: action('leading-icon-click'),
      onTrailingIconClick: action('trailing-icon-click'),
      onDebouncedInput: action('debounced-input'),
    };
  },
  template: `<component-docs
      component-name="Input"
      usage="Allows users to add data/content - text, numeric, URLs, etc. Each type of input has its own validation and constraints e.g. numeric input will only allow numbers."
      story="Show all states of the input component. Please interact with the input to see all states."
  >
  <vue-stack>
    <vue-text weight="semi-bold">v-model: {{ model }}</vue-text>
    <vue-input
        v-bind="args"
        v-model="model"
        @leading-icon-click="onLeadingIconClick"
        @trailing-icon-click="onTrailingIconClick"
        @debounced-input="onDebouncedInput"
    />
  </vue-inline>
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {
    id: 'email',
    name: 'email',
    label: 'E-mail',
    hideLabel: false,
    hideDescription: false,
    required: true,
    validation: 'required|email',
    disabled: false,
    placeholder: 'Enter email address',
    autofocus: false,
    type: 'email',
    readonly: false,
    description: 'Enter email address',
    errorMessage: 'Please enter a valid email address',
    autocomplete: 'off',
    leadingIcon: 'mail',
    trailingIcon: 'times',
    size: 'md',
    sizeAttribute: null,
    debounce: 250,
    hasError: false,
  },
};
