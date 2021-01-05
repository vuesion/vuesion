import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { i18n } from '@/test/i18n';
import FormExample from './FormExample.vue';

const story = storiesOf('Organisms|FormExample', module) as any;

story.add(
  'Default',
  () => ({
    i18n,
    components: { FormExample },
    methods: {
      onSubmit: action('@submit'),
    },
    template: `<form-example @submit="onSubmit" />`,
  }),
  {
    info: {
      components: { FormExample },
    },
  },
);
