import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { action } from '@storybook/addon-actions';
import LoginForm from './LoginForm.vue';
import { i18n } from '@shared/plugins/i18n/i18n';

const story = storiesOf('Organisms|LoginForm', module) as any;

story.add(
  'Default',
  withInfo({})(() => ({
    i18n,
    components: { LoginForm },
    template: `<login-form @submit="onSubmit" />`,
    methods: {
      onSubmit: action('@submit'),
    },
  })),
);
