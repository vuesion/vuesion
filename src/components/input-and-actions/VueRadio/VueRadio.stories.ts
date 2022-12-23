import { Story } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import VueRadio from './VueRadio.vue';
import VueInline from '~/components/layout/VueInline/VueInline.vue';
import VueText from '~/components/typography/VueText/VueText.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Input & Actions/Radio button',
  component: VueRadio,
  argTypes: {
    modelValue: { table: { disable: true } },
    'update:modelValue': { table: { disable: true } },
  },
};

const Template: Story = (args) => ({
  components: {
    VueRadio,
    ComponentDocs,
    VueInline,
    VueText,
  },
  data(): any {
    return {
      model: null,
    };
  },
  setup() {
    return { args, action: action('@click') };
  },
  template: `<component-docs
      component-name="Radio"
      usage="Allows users to select exactly one option from a list of 2+, mutually exclusive options."
      story="Show default radio button. Please interact with the radio buttons to see different states."
  >
  <vue-inline stack-phone stack-tablet-portrait stack-tablet-landscape stack-small-desktop stack-large-desktop>
    <vue-text weight="semi-bold">v-model: {{ model }}</vue-text>
    <vue-radio
        v-for="n in 3"
        :key="n"
        :label="'Radio button enabled ' + n"
        name="groupOne"
        :id="'radio' + n"
        @click="action"
        v-model="model" />
    <vue-radio disabled label="Radio button disabled" name="groupOne" id="radio" @click="action" v-model="model" />
  </vue-inline>
  </component-docs>`,
});

export const Default = Template.bind({});
Default.args = {};
