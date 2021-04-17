import { storiesOf } from '@storybook/vue';
import VueBox from './VueBox.vue';

const story = storiesOf('Design System|Layout/Box', module) as any;

story.add(
  'With equal padding',
  () => ({
    components: { VueBox },
    template: `<vue-box>VueBox</vue-box>`,
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
    template: `<vue-box padding="8 32 4 12">VueBox</vue-box>`,
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
    template: `<vue-box :padding="['4 16', 24, '24 48', 64, '64 192']">VueBox</vue-box>`,
  }),
  {
    info: {
      components: { VueBox },
    },
  },
);
