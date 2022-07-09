import VueSlider from './VueSlider.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';
import VueStack from '~/components/layout/VueStack/VueStack.vue';
import VueText from '~/components/typography/VueText/VueText.vue';

export default {
  title: 'Input & Actions/Slider',
  component: VueSlider,
  argTypes: {},
};

const SingleTemplate = (args) => ({
  components: { VueSlider, ComponentDocs, VueStack, VueText },
  data(): any {
    return {
      model: [100],
    };
  },
  setup() {
    return {
      args,
    };
  },
  template: `<component-docs
      component-name="Slider"
      usage="Allows user to visually adjust numeric input by interacting with the slider handle and progress track as visual feedback."
      story="Display single slider enabled and disabled. Please interact with the slider to see all interaction states."
  >
  <vue-stack>
    <vue-text weight="semi-bold">v-model: {{model}}</vue-text>
    <vue-slider v-bind="args" v-model="model" />
  </vue-stack>
  </component-docs>`,
});

export const Single = SingleTemplate.bind({});
Single.args = {
  id: 'slider',
  label: 'Slider',
  min: 0,
  max: 200,
  formatValue: (value: number) => {
    return value;
  },
  keyboardStepInterval: 5,
  disabled: false,
};

const RangeTemplate = (args) => ({
  components: { VueSlider, ComponentDocs, VueStack, VueText },
  data(): any {
    return {
      model: [40, 120],
    };
  },
  setup() {
    return {
      args,
    };
  },
  template: `<component-docs
      story="Display range slider enabled and disabled. Please interact with the slider to see all interaction states."
  >
  <vue-stack>
    <vue-text weight="semi-bold">v-model: {{model}}</vue-text>
    <vue-slider v-bind="args" v-model="model" />
  </vue-stack>
  </component-docs>`,
});

export const Range = RangeTemplate.bind({});
Range.args = {
  id: 'slider',
  label: 'Slider',
  min: 0,
  max: 200,
  formatValue: (value: number) => {
    return value;
  },
  keyboardStepInterval: 5,
  disabled: false,
};
