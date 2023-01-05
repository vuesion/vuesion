---
to: "src/components/<%= folder %>/<%= name %>/<%= name %>.stories.ts"
---
import { Story } from '@storybook/vue3';
import <%= name %> from './<%= name %>.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: '<%= h.inflection.humanize(folder) %>/<%= name %>',
  component: <%= name %>,
  argTypes: {},
};

const Template: Story = (args) => ({
  components: {
    <%= name %>,
    ComponentDocs,
  },
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="<%= name %>"
      usage="TBD"
  >
      <<%= h.inflection.dasherize(name) %> v-bind="args" />
  </component-docs>`,
});

export const Default = Template.bind({});

Default.args = {};

