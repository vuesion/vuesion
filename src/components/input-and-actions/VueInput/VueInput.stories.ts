import { ref } from 'vue';
import { action } from '@storybook/addon-actions';
import VueInput from './VueInput.vue';
import VueInline from '@/components/layout/VueInline/VueInline.vue';
import VueText from '@/components/typography/VueText/VueText.vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import { ShirtSizeValues } from '~/components/prop-types';

export default {
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

const Template = (args) => ({
  components: {
    VueInput,
    ComponentDocs,
    VueInline,
    VueText,
  },
  data(): any {
    return {
      model: true,
    };
  },
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
  <vue-inline stack-phone stack-tablet-portrait stack-tablet-landscape stack-small-desktop stack-large-desktop>
    <vue-text look="small-title" weight="semi-bold">Model: {{ model }}</vue-text>
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

export const Default = Template.bind({});
Default.args = {
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
};
