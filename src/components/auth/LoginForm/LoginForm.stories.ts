import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import LoginForm from './LoginForm.vue';
import { i18n } from '@/test/test-utils';

const story = storiesOf('Auth|LoginForm', module) as any;

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
