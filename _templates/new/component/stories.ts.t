---
to: "src/app/components/<%= folder %>/<%= name %>/<%= name %>.stories.ts"
---
import type { StoryFn } from '@storybook/vue3-vite';
import <%= name %> from './<%= name %>.vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: '<%= h.inflection.titleize(folder.replace(/-/g, " ")) %>/<%= name.replace(/Vue/g, "") %>',
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
      component-name="<%= name.replace(/Vue/g, "") %>"
      usage="TODO: describe component usage."
  >
      <<%= h.inflection.dasherize(h.inflection.underscore(name)) %> v-bind="args" />
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {},
};

