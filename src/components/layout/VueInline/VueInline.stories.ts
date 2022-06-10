import VueInline from './VueInline.vue';

export default {
  title: 'Foundation/Layout',
  component: VueInline,
};

const Template = (args) => ({
  components: { VueInline },
  setup() {
    return { args };
  },
  template: `<vue-inline v-bind="args" style="border: 1px solid var(--brand-border-default-medium);">
    <span>Item 1</span>
    <span>Item 2</span>
    <span>Item 3</span>
    <span>Item 4</span>
    <span>Item 5</span>
    <span>Item 6</span>
  </vue-inline>`,
});

export const Inline = Template.bind({});

Inline.args = {
  as: 'div',
  space: ['8', '16', '24', '48', '192'],
  alignX: ['start', 'center', 'end'],
  alignY: ['start', 'center', 'end'],
  reverse: [true, false, true, false, false],
  noWrap: false,
  stackPhone: true,
  stackTabletPortrait: false,
  stackTabletLandscape: true,
  stackSmallDesktop: false,
  stackLargeDesktop: false,
};
