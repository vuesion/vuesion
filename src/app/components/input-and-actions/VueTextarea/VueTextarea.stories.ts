import type { StoryFn } from '@storybook/vue3';
import { ref } from 'vue';
import { action } from '@storybook/addon-actions';
import VueTextarea from './VueTextarea.vue';
import VueStack from '~/app/components/layout/VueStack/VueStack.vue';
import VueText from '~/app/components/typography/VueText/VueText.vue';
import ComponentDocs from 'assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Input & Actions/Textarea',
  component: VueTextarea,
  argTypes: {},
};

const Template: StoryFn = (args) => ({
  components: {
    VueTextarea,
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
      component-name="Textarea"
      usage="Allows user to add long, multi-line text whereas text input is meant for brief, single line text."
      story="Show all states of the textarea component. Please interact with the textarea to see all states."
  >
  <vue-stack>
    <vue-text weight="semi-bold">v-model: {{ model }}</vue-text>
    <vue-textarea
        v-bind="args"
        v-model="model"
        @leading-icon-click="onLeadingIconClick"
        @trailing-icon-click="onTrailingIconClick"
        @debounced-input="onDebouncedInput"
    />
  </vue-stack>
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {
    id: 'notes',
    name: 'notes',
    label: 'Notes',
    hideLabel: false,
    hideDescription: false,
    required: true,
    validation: 'required',
    disabled: false,
    placeholder: 'Enter your notes',
    autofocus: false,
    readonly: false,
    description: 'Enter your notes',
    errorMessage: 'This field is required',
    debounce: 250,
  },
};
