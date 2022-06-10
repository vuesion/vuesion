import VueTiles from './VueTiles.vue';

export default {
  title: 'Foundation/Layout',
  component: VueTiles,
};

const Template = (args) => ({
  components: { VueTiles },
  setup() {
    return { args };
  },
  template: `<vue-tiles v-bind="args" style="border: 1px solid var(--brand-border-default-medium);">
    <span>Lorem Ipsum</span>
    <span>Lorem Ipsum</span>
    <span>Lorem Ipsum</span>
    <span>Lorem Ipsum</span>
    <span>Lorem Ipsum</span>
    <span>Lorem Ipsum</span>
    <span>Lorem Ipsum</span>
    <span>Lorem Ipsum</span>
    <span>Lorem Ipsum</span>
    <span>Lorem Ipsum</span>
  </vue-tiles>`,
});

export const Tiles = Template.bind({});

Tiles.args = {
  as: 'div',
  verticalSpace: ['8', '16', '24', '48'],
  horizontalSpace: ['16', '16', '48', '8'],
  columns: [1, 2, 3, 5],
};
