import { storiesOf } from '@storybook/vue';
import VueBox from './VueBox.vue';

const story = storiesOf('Foundation|Layout/Box', module) as any;

story.add(
  'With equal padding',
  () => ({
    components: { VueBox },
    template: `<vue-box class="border">VueBox</vue-box>`,
  }),
  {
    info: {
      components: { VueBox },
    },
  },
);

story.add(
  'With different padding',
  () => ({
    components: { VueBox },
    template: `<vue-box padding="8 32" class="border">VueBox</vue-box>`,
  }),
  {
    info: {
      components: { VueBox },
    },
  },
);

story.add(
  'With responsive padding',
  () => ({
    components: { VueBox },
    template: `<vue-box :padding="['4 16', 24, '24 48', 64, 0]" class="border">VueBox</vue-box>`,
  }),
  {
    info: {
      components: { VueBox },
    },
  },
);
