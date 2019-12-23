import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import LoginForm from './LoginForm.vue';
import { i18n } from '@shared/plugins/i18n/i18n';

const story = storiesOf('Organisms|LoginForm', module) as any;

story.add(
  'Default',
  () => ({
    i18n,
    components: { LoginForm },
    template: `<login-form @submit="onSubmit" />`,
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
