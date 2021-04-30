import { storiesOf } from '@storybook/vue';
import VuePopOver from './VuePopOver.vue';

const story = storiesOf('Molecules|PopOver', module) as any;

story.add(
  'Default',
  () => ({
    components: { VuePopOver },
    template: `<div :style="{padding: '32px'}">
    <div>Other content</div>
    TEST TEST <vue-pop-over>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
      sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
    </vue-pop-over> TEST TEST
    <div>Other content</div>
    </div>`,
  }),
  {
    info: {
      components: { VuePopOver },
    },
  },
);
