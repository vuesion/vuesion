---
to: "src/app/components/domain/field-sets/<%= h.capitalize(name) %>FieldSet/<%= h.capitalize(name) %>FieldSet.stories.ts"
unless_exists: true
---
import { ref } from 'vue';
import type { StoryFn } from '@storybook/vue3-vite';
import <%= h.capitalize(name) %>FieldSet from './<%= h.capitalize(name) %>FieldSet.vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Domain/Field Sets/<%= h.capitalize(name) %>FieldSet',
  component: <%= h.capitalize(name) %>FieldSet,
  argTypes: {},
};

const Template: StoryFn = (args) => ({
  components: {
    <%= h.capitalize(name) %>FieldSet,
    ComponentDocs,
  },
  inheritAttrs: false,
  setup() {
    const valid = ref(false);
    const model = ref({
      id: 'id-1',
      name: 'Name',
    });
    return {
      args,
      valid,
      model,
    };
  },
  template: `<component-docs
      component-name="<%= h.capitalize(name) %>FieldSet"
      usage="TBD"
  >
      <<%= h.inflection.dasherize(h.inflection.underscore(name)) %>-field-set
        v-bind="args"
        v-model="model"
        v-model:valid="valid"
      />
    <br/>
    <br/>
    Form model: <pre>{{ model }}</pre>
    <br/>
    Form is valid: {{ valid }}
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {},
};

