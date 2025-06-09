---
to: "src/components/forms/<%= h.capitalize(name) %>Form/<%= h.capitalize(name) %>Form.stories.ts"
unless_exists: true
---
import type { StoryFn } from '@storybook/vue3-vite';
import { action } from 'storybook/actions';
import <%= h.capitalize(name) %>Form from './<%= h.capitalize(name) %>Form.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Forms/<%= h.capitalize(name) %>Form',
  component: <%= h.capitalize(name) %>Form,
  argTypes: {},
};

const Template: StoryFn = (args) => ({
  components: {
    <%= h.capitalize(name) %>Form,
    ComponentDocs,
  },
  inheritAttrs: false,
  setup() {
    return {
      args,
      onCreate: action('create'),
      onUpdate: action('update'),
      onCancel: action('cancel'),
    };
  },
  template: `<component-docs
      component-name="<%= h.capitalize(name) %>Form"
      usage="TBD"
  >
      <<%= h.inflection.dasherize(h.inflection.underscore(name)) %>-form
        v-bind="args"
        @create="onCreate"
        @update="onCreate"
        @cancel="onCancel"
      />
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {
    loading: false,
  },
};

