import VueText from './VueText.vue';
import { FontWeightValues, TextColorValues, TextStyleValues } from '@/components/prop-types';

export default {
  title: 'Foundation/Typography',
  component: VueText,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    look: {
      control: { type: 'select' },
      options: TextStyleValues,
    },
    color: {
      control: { type: 'select' },
      options: TextColorValues,
    },
    weight: {
      control: { type: 'select' },
      options: FontWeightValues,
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VueText },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<vue-text v-bind="args">Lorem Ipsum</vue-text>',
});

export const Text = Template.bind({});

Text.args = {
  look: 'default',
  color: 'text-high',
  weight: 'regular',
  serifs: false,
  underline: false,
  uppercase: false,
  alignX: ['start', 'center', 'end'],
};
