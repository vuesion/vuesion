import { storiesOf } from '@storybook/vue';
import VueBadge from '@/components/data-display/VueBadge/VueBadge.vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueInline from './VueInline.vue';

const story = storiesOf('Foundation|Layout/Inline', module) as any;

story.add(
  'With responsive spacing',
  () => ({
    components: { VueInline, VueBadge, VueBox },
    template: `<vue-box :padding="[8, 16, 24]">
    <vue-inline :space="[8, 16, 24]" class="border">
      <vue-badge>Lorem ipsum</vue-badge>
      <vue-badge>Dolor</vue-badge>
      <vue-badge>Sit amet</vue-badge>
      <vue-badge>Consectetur</vue-badge>
      <vue-badge>Adipiscing elit</vue-badge>
      <vue-badge>Suspendisse dignissim</vue-badge>
      <vue-badge>Dapibus elit</vue-badge>
      <vue-badge>Vel egestas felis</vue-badge>
      <vue-badge>Pharetra non</vue-badge>

      <vue-badge>Lorem ipsum</vue-badge>
      <vue-badge>Dolor</vue-badge>
      <vue-badge>Sit amet</vue-badge>
      <vue-badge>Consectetur</vue-badge>
      <vue-badge>Adipiscing elit</vue-badge>
      <vue-badge>Suspendisse dignissim</vue-badge>
      <vue-badge>Dapibus elit</vue-badge>
      <vue-badge>Vel egestas felis</vue-badge>
      <vue-badge>Pharetra non</vue-badge>
    </vue-inline>
    </vue-box>`,
  }),
  {
    info: {
      components: { VueInline },
    },
  },
);

story.add(
  'With responsive horizontal alignment',
  () => ({
    components: { VueInline, VueBadge, VueBox, VueStack },
    template: `<vue-box :padding="[8, 16, 24]">
    <vue-stack :space="[8, 16, 24]">
      <vue-inline :space="[8, 16, 24]" class="border">
        <vue-badge>Test</vue-badge>
        <vue-badge>Test</vue-badge>
        <vue-badge>Test</vue-badge>
      </vue-inline>

      <vue-inline :space="[8, 16, 24]" :align="['left', 'center']" class="border">
        <vue-badge>Test</vue-badge>
        <vue-badge>Test</vue-badge>
        <vue-badge>Test</vue-badge>
      </vue-inline>

      <vue-inline :space="[8, 16, 24]" :align="['left', 'right']" class="border">
        <vue-badge>Test</vue-badge>
        <vue-badge>Test</vue-badge>
        <vue-badge>Test</vue-badge>
      </vue-inline>
    </vue-stack>
    </vue-box>`,
  }),
  {
    info: {
      components: { VueInline },
    },
  },
);

story.add(
  'With responsive vertical alignment',
  () => ({
    components: { VueInline, VueBadge, VueBox, VueText },
    template: `<vue-box :padding="[8, 16, 24]">
    <vue-inline :space="[8, 16, 24]" :align-y="['top', 'top', 'center', 'center', 'bottom']" class="border">
      <vue-badge>Test</vue-badge>
      <vue-text>Test</vue-text>
    </vue-inline>
    </vue-box>`,
  }),
  {
    info: {
      components: { VueInline },
    },
  },
);

story.add(
  'With responsive revert',
  () => ({
    components: { VueInline, VueBadge, VueBox, VueText },
    template: `<vue-box :padding="[8, 16, 24]">
      <vue-inline :space="[8, 16, 24]" :revert="[true, true]" :align="['right', 'right', 'left']" align-y="center" class="border">
        <vue-badge>Test</vue-badge>
        <vue-text>Test</vue-text>
      </vue-inline>
    </vue-box>`,
  }),
  {
    info: {
      components: { VueInline },
    },
  },
);

story.add(
  'Stack elements below tabletLandscape',
  () => ({
    components: { VueInline, VueBadge, VueBox, VueStack },
    template: `<vue-box :padding="[8, 16, 24]">
      <vue-inline stack-phone stack-tablet-portrait :space="[16, 16, 32]" class="border">
        <vue-badge>Test</vue-badge>
        <vue-badge>Test</vue-badge>
        <vue-badge>Test</vue-badge>
      </vue-inline>
</vue-box>`,
  }),
  {
    info: {
      components: { VueInline },
    },
  },
);

story.add(
  'As list element',
  () => ({
    components: { VueInline, VueBadge, VueBox },
    template: `<vue-box :padding="[8, 16, 24]">
    <vue-inline as="ul" :space="[8, 16, 24]" class="border">
      <vue-badge>Lorem ipsum</vue-badge>
      <vue-badge>Dolor</vue-badge>
      <vue-badge>Sit amet</vue-badge>
      <vue-badge>Consectetur</vue-badge>
      <vue-badge>Adipiscing elit</vue-badge>
      <vue-badge>Suspendisse dignissim</vue-badge>
      <vue-badge>Dapibus elit</vue-badge>
      <vue-badge>Vel egestas felis</vue-badge>
      <vue-badge>Pharetra non</vue-badge>

      <vue-badge>Lorem ipsum</vue-badge>
      <vue-badge>Dolor</vue-badge>
      <vue-badge>Sit amet</vue-badge>
      <vue-badge>Consectetur</vue-badge>
      <vue-badge>Adipiscing elit</vue-badge>
      <vue-badge>Suspendisse dignissim</vue-badge>
      <vue-badge>Dapibus elit</vue-badge>
      <vue-badge>Vel egestas felis</vue-badge>
      <vue-badge>Pharetra non</vue-badge>
    </vue-inline>
    </vue-box>`,
  }),
  {
    info: {
      components: { VueInline },
    },
  },
);
