import VueBox from './VueBox.vue';

export default {
  title: 'Foundation/Layout',
  component: VueBox,
};

const Template = (args) => ({
  components: { VueBox },
  setup() {
    return { args };
  },
  template: `<vue-box v-bind="args" style="border: 1px solid var(--brand-border-default-medium); height: 300px;">
    Lorem Ipsum
  </vue-box>`,
});

export const Box = Template.bind({});

Box.args = {
  as: 'div',
  padding: ['8', '8 16', '12 24 64 10', '80', '144'],
  alignX: ['start', 'center', 'end'],
  alignY: ['start', 'center', 'end'],
};
