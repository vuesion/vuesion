import type { StoryFn } from '@storybook/vue3';
import VueBackToTop from './VueBackToTop.vue';
import ComponentDocs from '~/app/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Behavior/BackToTop',
  component: VueBackToTop,
  argTypes: {},
};

const Template: StoryFn = (args) => ({
  components: {
    VueBackToTop,
    ComponentDocs,
  },
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="BackToTop"
      usage="A button to return to the top of the page allows the user to quickly return to the top of the page."
      story="To see the back-to-top-button please scroll down to the end of the page and start scrolling up again."
  >
  <div :style="{height: '6000px'}"><vue-back-to-top v-bind="args" /></div>
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {
    ariaLabel: 'Back to top',
  },
};
