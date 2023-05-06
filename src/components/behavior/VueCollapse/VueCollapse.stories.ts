import { StoryFn } from '@storybook/vue3';
import { ref } from 'vue';
import VueCollapse from './VueCollapse.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';
import VueButton from '~/components/input-and-actions/VueButton/VueButton.vue';
import VueText from '~/components/typography/VueText/VueText.vue';
import VueBox from '~/components/layout/VueBox/VueBox.vue';

export default {
  title: 'Behavior/Collapse',
  component: VueCollapse,
  argTypes: {
    show: { table: { disable: true } },
    default: { table: { disable: true } },
  },
};

const Template: StoryFn = (args) => ({
  components: {
    VueCollapse,
    ComponentDocs,
    VueButton,
    VueText,
    VueBox,
  },
  inheritAttrs: false,
  setup() {
    const show = ref(false);
    return { args, show };
  },
  template: `<component-docs
      component-name="Collapse"
      usage="Used to put long sections of information under a block that users can expand or collapse."
      story="Display button that triggers the collapse to show or hide text."
  >
    <vue-button @click="show = !show" look="outline">Show content</vue-button>
    <vue-collapse :show="show" v-bind="args">
      <vue-box padding="16 0 0 0">
        <vue-text color="text-high">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </vue-text>
      </vue-box>
    </vue-collapse>
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {
    duration: 250,
  },
};
