import { action } from '@storybook/addon-actions';
import LoginForm from './LoginForm.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Forms/LoginForm',
  component: LoginForm,
};

const Template = (args) => ({
  components: { LoginForm, ComponentDocs },
  setup() {
    return { args, onSubmit: action('@submit') };
  },
  template: `<component-docs
      component-name="LoginForm"
      usage="Used to demonstrate a simple login flow."
      story="Display LoginForm."
  >
  <login-form v-bind="args" @submit="onSubmit" />
  </component-docs>`,
});

export const Default = Template.bind({});
Default.args = {};
