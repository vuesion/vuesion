import { storiesOf } from '@storybook/vue';
import VueBadge from '@/components/data-display/VueBadge/VueBadge.vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import VueTiles from './VueTiles.vue';

const story = storiesOf('Foundation|Layout/Tiles', module) as any;

story.add(
  'With responsive columns and spacings',
  () => ({
    components: { VueTiles, VueBox, VueBadge },
    template: `<vue-box :padding="[8, 16, 32, 48, 64]">
    <vue-tiles :columns="[1, 2, 3, 4, 6]" :space="[8, 16, 32, 48, 64]" class="border">
      <vue-badge>Test</vue-badge>
      <vue-badge>Test</vue-badge>
      <vue-badge>Test</vue-badge>
      <vue-badge>Test</vue-badge>
      <vue-badge>Test</vue-badge>
      <vue-badge>Test</vue-badge>
      <vue-badge>Test</vue-badge>
      <vue-badge>Test</vue-badge>
      <vue-badge>Test</vue-badge>
      <vue-badge>Test</vue-badge>
      <vue-badge>Test</vue-badge>
      <vue-badge>Test</vue-badge>
    </vue-tiles>
    </vue-box>`,
  }),
  {
    info: {
      components: { VueTiles },
    },
  },
);

story.add(
  'With responsive vertical and horizontal spacings',
  () => ({
    components: { VueTiles, VueBox, VueBadge },
    template: `<vue-box :padding="[8, 16, 32, 48, 64]">
  <vue-tiles columns="2" :vertical-space="[8, 24]" :horizontal-space="[4, 24]" class="border">
    <vue-badge>Test</vue-badge>
    <vue-badge>Test</vue-badge>
    <vue-badge>Test</vue-badge>
    <vue-badge>Test</vue-badge>
    <vue-badge>Test</vue-badge>
    <vue-badge>Test</vue-badge>
    <vue-badge>Test</vue-badge>
    <vue-badge>Test</vue-badge>
    <vue-badge>Test</vue-badge>
    <vue-badge>Test</vue-badge>
    <vue-badge>Test</vue-badge>
    <vue-badge>Test</vue-badge>
  </vue-tiles>
</vue-box>`,
  }),
  {
    info: {
      components: { VueTiles },
    },
  },
);

story.add(
  'As list element',
  () => ({
    components: { VueTiles, VueBox, VueBadge },
    template: `<vue-box :padding="[8, 16, 32, 48, 64]">
    <vue-tiles as="ul" :columns="[1, 2, 3, 4, 6]" :space="[8, 16, 32, 48, 64]" class="border">
      <li>Test</li>
      <li>Test</li>
      <li>Test</li>
      <li>Test</li>
      <li>Test</li>
      <li>Test</li>
      <li>Test</li>
      <li>Test</li>
      <li>Test</li>
      <li>Test</li>
      <li>Test</li>
      <li>Test</li>
    </vue-tiles>
    </vue-box>`,
  }),
  {
    info: {
      components: { VueTiles },
    },
  },
);
