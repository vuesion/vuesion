import type { StoryFn } from '@storybook/vue3';
import VueAccordion from './VueAccordion.vue';
import VueAccordionItem from './VueAccordionItem.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';
import VueStack from '~/components/layout/VueStack/VueStack.vue';
import VueToggle from '~/components/input-and-actions/VueToggle/VueToggle.vue';

export default {
  title: 'Data Display/Accordion',
  component: VueAccordion,
  argTypes: {
    multiple: { table: { disable: true } },
    default: { table: { disable: true } },
  },
};

const Template: StoryFn = (args) => ({
  components: {
    ComponentDocs,
    VueStack,
    VueToggle,
    VueAccordion,
    VueAccordionItem,
  },
  data(): any {
    return {
      multiple: false,
    };
  },
  inheritAttrs: false,
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="Accordion"
      usage="The accordion is used to toggle the visibility of a section of content."
      story="Display accordion with all its properties."
  >
  <vue-stack>
    <vue-toggle label="Multiple items open" name="multiple" id="multiple" v-model="multiple" />

    <vue-accordion :multiple="multiple">
      <vue-accordion-item v-for="id in [1,2,3,4,5]" :key="id" :title="'Item ' + id" :init-open="id === 1">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </vue-accordion-item>
    </vue-accordion>
  </vue-stack>
  </component-docs>`,
});

export const Default = {
  render: Template,
  args: {},
};
