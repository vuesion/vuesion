import { storiesOf } from '@storybook/vue';
import VueText from '@/components/atoms/VueText/VueText.vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import VueStack from './VueStack.vue';

const story = storiesOf('Foundation|Layout/Stack', module) as any;

story.add(
  'With responsive spacing',
  () => ({
    components: { VueStack, VueText, VueBox },
    template: `<vue-box :padding="[16, '16 24']">
    <vue-stack :space="[8, 24, 48, 64, 192]">
      <vue-text>Test</vue-text>
      <vue-text>Test</vue-text>
      <vue-text>Test</vue-text>

      <vue-stack space="2">
        <vue-text>Test</vue-text>
        <vue-text>Test</vue-text>
        <vue-text>Test</vue-text>
      </vue-stack>
    </vue-stack>
    </vue-box>`,
  }),
  {
    info: {
      components: { VueStack },
    },
  },
);

story.add(
  'With responsive alignment',
  () => ({
    components: { VueStack, VueText, VueBox },
    template: `<vue-box :padding="[16, '16 24']">
    <vue-stack>
      <vue-stack>
        <vue-text>Test</vue-text>
        <vue-text>Test</vue-text>
        <vue-text>Test</vue-text>
      </vue-stack>

      <vue-stack :align="['left', 'center']">
        <vue-text>Test</vue-text>
        <vue-text>Test</vue-text>
        <vue-text>Test</vue-text>
      </vue-stack>

      <vue-stack :align="['left', 'right']">
        <vue-text>Test</vue-text>
        <vue-text>Test</vue-text>
        <vue-text>Test</vue-text>
      </vue-stack>
    </vue-stack>
</vue-box>`,
  }),
  {
    info: {
      components: { VueStack },
    },
  },
);

story.add(
  'As list element',
  () => ({
    components: { VueStack, VueText, VueBox },
    template: `<vue-box :padding="[16, '16 24']">
    <vue-stack as="ul" :space="[8, 24, 48, 64, 192]">
      <vue-text>Test</vue-text>
      <vue-text>Test</vue-text>
      <vue-text>Test</vue-text>

      <vue-stack as="ol" space="2">
        <vue-text>Test</vue-text>
        <vue-text>Test</vue-text>
        <vue-text>Test</vue-text>
      </vue-stack>
    </vue-stack>
    </vue-box>`,
  }),
  {
    info: {
      components: { VueStack },
    },
  },
);
