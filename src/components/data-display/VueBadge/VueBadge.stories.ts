import { StoryFn } from '@storybook/vue3';
import VueBadge from './VueBadge.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';
import { BadgeStatusValues } from '~/components/prop-types';

export default {
  title: 'Data Display/Badge',
  component: VueBadge,
  argTypes: {
    status: {
      control: { type: 'select' },
      options: BadgeStatusValues,
    },
  },
};

const Template: StoryFn = (args) => ({
  components: {
    VueBadge,
    ComponentDocs,
  },
  inheritAttrs: false,
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="Badge"
      usage="Badges are used to inform users of the status of an object or action."
  >
  <vue-badge v-bind="args">Badge</vue-badge>
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {
    status: 'info',
  },
};
