import VueText from './VueText.vue';

export default {
  title: 'Foundation/Typography',
  component: VueText,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    look: {
      control: { type: 'select' },
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'description',
        'large-title',
        'medium-title',
        'small-title',
        'default',
        'label',
        'button',
        'support',
      ],
    },
    color: {
      control: { type: 'select' },
      options: [
        'info',
        'danger',
        'warning',
        'success',
        'text-high',
        'text-medium',
        'text-low',
        'text-inverse-high',
        'text-inverse-medium',
        'text-inverse-low',
      ],
    },
    weight: {
      control: { type: 'select' },
      options: ['regular', 'semi-bold'],
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
