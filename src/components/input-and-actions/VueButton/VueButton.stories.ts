import VueButton from './VueButton.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';
import { ButtonStyleValues, ShirtSizeValues } from '~/components/prop-types';

export default {
  title: 'Input & Actions/Button',
  component: VueButton,
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['button', 'a', 'nuxt-link'],
    },
    look: {
      control: { type: 'select' },
      options: ButtonStyleValues,
    },
    size: {
      control: { type: 'select' },
      options: ShirtSizeValues,
    },
    default: { table: { disable: true } },
  },
};

const Template = (args) => ({
  components: {
    VueButton,
    ComponentDocs,
  },
  setup() {
    return { args };
  },
  template: `<component-docs
      component-name="Button"
      usage="Buttons are used primarily to take action.
Each type has a different best-for context:
- primary: key action. use for the most important;
- basic: used with primary;
- outline: used for less prominent actions, maybe in actions in a series. used for tasks;
- danger: used to destruct"
      story="Show all button variations and sized. Please interact with the buttons to see different states."
  >
    <vue-button v-bind="args">
      Button text
    </vue-button>
  </component-docs>`,
});

export const Styles = Template.bind({});

Styles.args = {
  as: 'button',
  block: false,
  disabled: false,
  loading: false,
  look: 'primary',
  size: 'md',
  type: 'button',
  leadingIcon: '',
  trailingIcon: 'arrowRight',
};
