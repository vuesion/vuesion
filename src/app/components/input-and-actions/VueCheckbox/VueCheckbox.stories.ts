import type { StoryFn } from '@storybook/vue3';
import VueCheckbox from './VueCheckbox.vue';
import VueInline from '~/app/components/layout/VueInline/VueInline.vue';
import VueText from '~/app/components/typography/VueText/VueText.vue';
import ComponentDocs from '~/app/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Input & Actions/Checkbox',
  component: VueCheckbox,
  argTypes: {
    modelValue: { table: { disable: true } },
    'update:modelValue': { table: { disable: true } },
  },
};

const Template: StoryFn = (args) => ({
  components: {
    VueCheckbox,
    ComponentDocs,
    VueInline,
    VueText,
  },
  data(): any {
    return {
      model: false,
    };
  },
  inheritAttrs: false,
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="Toggle"
      usage="Allows users to choose between two mutually exclusive options. There is always a default value and settings should be saved and take into effect immediately."
      story="Show default checkbox. Please interact with the checkbox to see different states."
  >
  <vue-inline stack-phone stack-tablet-portrait stack-tablet-landscape stack-small-desktop stack-large-desktop>
    <vue-text weight="semi-bold">v-model: {{ model }}</vue-text>
    <vue-checkbox
        :id="args.id"
        v-model="model"
        :name="args.name"
        :label="args.label"
        :description="args.description"
        :required="args.required"
        :disabled="args.disabled"
        :hide-label="args.hideLabel"
    />
  </vue-inline>
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {
    id: 'checkbox',
    name: 'checkbox',
    label: 'Check me',
    description: 'Get notified when someone comments on your posting.',
    required: true,
    disabled: false,
    hideLabel: false,
  },
};
