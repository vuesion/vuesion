import VueMarkdown from './VueMarkdown.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Data Display/Markdown',
  component: VueMarkdown,

  argTypes: {},
  parameters: { controls: { disabled: true } },
};

const Template = (args) => ({
  components: {
    VueMarkdown,
    ComponentDocs,
  },

  setup() {
    return { args };
  },

  template: `<component-docs
      component-name="Markdown"
      usage="Display markdown content as HTML."
      story="Display markdown content."
  >
    <vue-markdown markdown="# headline 1\n ## headline 2\n - test\n - test\n - test\n [test](/test)" />
  </component-docs>`,
});

export const Default = Template.bind({});

Default.args = {};
