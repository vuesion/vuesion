import type { StoryFn } from '@storybook/vue3-vite';
import VueFormattedDate from './VueFormattedDate.vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import { BadgeStatusValues } from '@/components/utils/prop-types';

export default {
  title: 'Data Display/FormattedDate',
  component: VueFormattedDate,
  argTypes: {
    format: {
      options: ['dayMonthYearNumeric', 'dayMonthYearNumericWithTime', 'timeOnlyNumeric'],
      control: { type: 'select' },
    },
  },
};

const Template: StoryFn = (args) => ({
  components: {
    VueFormattedDate,
    ComponentDocs,
  },
  inheritAttrs: false,
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="FormattedDate"
      usage="TODO: describe component usage."
  >
      <vue-formatted-date v-bind="args" />
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {
    date: new Date('2025-03-09T11:25:36.000Z'),
  },
};

export const CustomLocale = {
  render: Template,

  args: {
    date: new Date('2025-03-09T11:25:36.000Z'),
    format: 'dayMonthYearNumericWithTime',
    locale: 'de-DE',
  },
};
