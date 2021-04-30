import { storiesOf } from '@storybook/vue';
import VueBackToTop from './VueBackToTop.vue';

const story = storiesOf('Molecules|BackToTop', module) as any;

story.add(
  'Default',
  () => ({
    components: { VueBackToTop },
    template: `<div :style="{height: '6000px'}"><vue-back-to-top /></div>`,
  }),
  {
    info: {
      components: { VueBackToTop },
    },
  },
);
