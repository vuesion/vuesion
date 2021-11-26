import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { i18n } from '@/test/i18n';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import LoginForm from './LoginForm.vue';

const story = storiesOf('Forms|LoginForm', module) as any;

story.add(
  'Default',
  () => ({
    i18n,
    components: { ComponentDocs, LoginForm },
    template: `<component-docs
      component-name="LoginForm"
      usage="Used to demonstrate a simple login flow."
      story="Display LoginForm."
    >
    <login-form @submit="onSubmit" />
    </component-docs>`,
    methods: {
      onSubmit: action('@submit'),
    },
  }),
  {
    info: {
      components: { LoginForm },
    },
  },
);
