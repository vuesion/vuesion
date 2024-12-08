import type { StoryFn } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import VueStepper from './VueStepper.vue';
import ComponentDocs from '~/app/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Navigation/Stepper',
  component: VueStepper,
  argTypes: {},
};

const Template: StoryFn = (args) => ({
  components: {
    VueStepper,
    ComponentDocs,
  },
  inheritAttrs: false,
  setup() {
    return { args, onStepClick: action('@step-click') };
  },
  template: `<component-docs
      component-name="Stepper"
      usage="Used to navigate the user through multiple step user-flows."
      story="Show Stepper and all its properties."
  >
      <vue-stepper v-bind="args" @step-click="onStepClick" />
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {
    steps: [
      { label: 'Personal Info', description: 'Step details here', leadingIcon: 'user', value: 0 },
      { label: 'Billing Info', description: 'Step details here', leadingIcon: 'credit-card', value: 1 },
      { label: 'Confirmation', description: 'Step details here', leadingIcon: 'printer', value: 1 },
    ],
    activeStep: 1,
  },
};
