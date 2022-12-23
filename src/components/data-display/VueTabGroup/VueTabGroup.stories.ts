import { Story } from '@storybook/vue3';
import VueTabGroup from './VueTabGroup.vue';
import VueTabItem from './VueTabItem.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Data Display/TabGroup',
  component: VueTabGroup,
  argTypes: {},
};

const Template: Story = (args) => ({
  components: {
    VueTabGroup,
    VueTabItem,
    ComponentDocs,
  },

  setup() {
    return { args };
  },

  template: `<component-docs
      component-name="TabGroup"
      usage="Allows users to navigate between views of similarly grouped content within the same page or context."
      story="Display tabs."
  >
  <vue-tab-group>
    <vue-tab-item name="Profile" icon="github">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
      labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
      et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
      labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
      et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </vue-tab-item>
    <vue-tab-item name="Settings" icon="cog" :is-active="true">
      et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
      labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
      et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </vue-tab-item>
    <vue-tab-item name="Upload" icon="arrow-up">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
      labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
      et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </vue-tab-item>
  </vue-tab-group>
  </component-docs>`,
});

export const Default = Template.bind({});

Default.args = {};
