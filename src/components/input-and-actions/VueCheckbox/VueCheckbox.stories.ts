import VueCheckbox from './VueCheckbox.vue';
import VueInline from '~/components/layout/VueInline/VueInline.vue';
import VueText from '~/components/typography/VueText/VueText.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Input & Actions/Checkbox',
  component: VueCheckbox,
  argTypes: {
    modelValue: { table: { disable: true } },
    'update:modelValue': { table: { disable: true } },
  },
};

const Template = (args) => ({
  components: {
    VueCheckbox,
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
    />
  </vue-inline>
  </component-docs>`,
});

export const Default = Template.bind({});
Default.args = {
  id: 'checkbox',
  name: 'checkbox',
  label: 'Check me',
  description: 'Get notified when someone comments on your posting.',
  required: true,
  disabled: false,
};
