import { StoryFn } from '@storybook/vue3';
import VueTooltip from './VueTooltip.vue';
import VueStack from '~/components/layout/VueStack/VueStack.vue';
import VueText from '~/components/typography/VueText/VueText.vue';
import VueIconInfo from '~/components/icons/VueIconInfoCircle.vue';
import VueButton from '~/components/input-and-actions/VueButton/VueButton.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';
import { VerticalDirectionValues } from '~/components/prop-types';

export default {
  title: 'Data Display/Tooltip',
  component: VueTooltip,
  argTypes: {
    direction: {
      options: VerticalDirectionValues,
      control: { type: 'select' },
    },
  },
};

const Template: StoryFn = (args) => ({
  components: {
    VueTooltip,
    VueStack,
    VueText,
    VueIconInfo,
    VueButton,
    ComponentDocs,
  },

  inheritAttrs: false,
  setup() {
    return {
      args,
    };
  },

  template: `<component-docs
      component-name="Tooltip"
      usage="Tooltips display additional information upon click, hover, or focus. The information should be contextual, useful, and nonessential."
      story="Display tootltip and all its properties."
  >
    <vue-text>This is a text <vue-tooltip v-bind="args" :tip="args.tip">with a tooltip!!!</vue-tooltip></vue-text>
    <br/>
    <br/>
    <vue-text>But also icons can have tooltips: <vue-tooltip v-bind="args" :tip="args.tip"><vue-icon-info /></vue-tooltip></vue-text>
    <br/>
    <br/>
    <vue-tooltip v-bind="args" :tip="args.tip">
      <vue-button look="primary">With tooltip</vue-button>
    </vue-tooltip>
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {
    as: 'span',
    tip: 'this is a longer tooltip!',
    direction: 'top',
    disabled: false,
  },
};
