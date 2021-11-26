import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { i18n } from '@/test/i18n';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import FormExample from './FormExample.vue';

const story = storiesOf('Forms|FormExample', module) as any;

story.add(
  'Default',
  () => ({
    i18n,
    components: { ComponentDocs, FormExample },
    methods: {
      onSubmit: action('@submit'),
    },
    template: `<component-docs
      component-name="FormExample"
      usage="Used as an example for different form validation scenarios."
      story="Display FormExample."
    >
      <form-example @submit="onSubmit" />
    </component-docs>`,
  }),
  {
    info: {
      components: { FormExample },
    },
  },
);
