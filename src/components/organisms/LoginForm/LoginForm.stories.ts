import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { i18n } from '@/test/i18n';
import LoginForm from './LoginForm.vue';

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
