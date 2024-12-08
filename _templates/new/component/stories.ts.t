---
to: "src/app/components/<%= folder %>/<%= name %>/<%= name %>.stories.ts"
---
import type { StoryFn } from '@storybook/vue3';
import <%= name %> from './<%= name %>.vue';
import ComponentDocs from '~/app/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: '<%= h.inflection.humanize(folder) %>/<%= name %>',
  component: <%= name %>,
  argTypes: {},
};

const Template: StoryFn = (args) => ({
  components: {
    <%= name %>,
    ComponentDocs,
  },
  inheritAttrs: false,
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="<%= name %>"
      usage="TBD"
  >
      <<%= h.inflection.dasherize(h.inflection.underscore(name)) %> v-bind="args" />
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {},
};

