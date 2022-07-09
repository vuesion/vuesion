import { action } from '@storybook/addon-actions';
import FormExample from './FormExample.vue';
import VueToast from '~/components/data-display/VueToast/VueToast.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Forms/FormExample',
  component: FormExample,
};

const Template = (args) => ({
  components: { FormExample, VueToast, ComponentDocs },
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

export const Default = Template.bind({});
Default.args = {};
