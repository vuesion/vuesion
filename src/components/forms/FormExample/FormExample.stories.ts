import type { StoryFn } from '@storybook/vue3-vite';
import { action } from 'storybook/actions';
import FormExample from './FormExample.vue';
import VueToast from '~/components/data-display/VueToast/VueToast.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Forms/FormExample',
  component: FormExample,
};

const Template: StoryFn = (args) => ({
  components: { FormExample, VueToast, ComponentDocs },
  inheritAttrs: false,
  setup() {
    return { args, onSubmit: action('@submit') };
  },
  template: `<component-docs
      component-name="FormExample"
      usage="Used as an example for different form validation scenarios."
      story="Display FormExample."
  >
  <vue-toast />
  <form-example @submit="onSubmit" />
  </component-docs>`,
});

export const Default = {
  render: Template,
  args: {},
};
