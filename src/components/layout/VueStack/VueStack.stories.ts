import VueStack from './VueStack.vue';

export default {
  title: 'Foundation/Layout',
  component: VueStack,
};

const Template = (args) => ({
  components: { VueStack },
  setup() {
    return { args };
  },
  template: `<vue-stack v-bind="args" style="border: 1px solid var(--brand-border-default-medium);">
    <span>Lorem Ipsum</span>
    <span>Lorem Ipsum</span>
    <span>Lorem Ipsum</span>
    <span>Lorem Ipsum</span>
    <span>Lorem Ipsum</span>
  </vue-stack>`,
});

export const Stack = Template.bind({});

Stack.args = {
  as: 'div',
  space: ['8', '16', '24', '48', '192'],
  alignX: ['start', 'center', 'end'],
};
