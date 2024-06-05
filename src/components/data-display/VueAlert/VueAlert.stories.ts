import type { StoryFn } from '@storybook/vue3';
import VueAlert from './VueAlert.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Data display/Alert',
  component: VueAlert,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['success', 'info', 'warning', 'danger'],
    },
  },
};

const Template: StoryFn = (args) => ({
  components: {
    VueAlert,
    ComponentDocs,
  },
  inheritAttrs: false,
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="Alert"
      usage="Used to display inline Notifications like hints or additional information."
  >
      <vue-alert v-bind="args" />
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {
    title: 'Headline',
    text: 'Information and details here. and it can go to a second line',
    type: 'success',
  },
};
