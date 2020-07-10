import { storiesOf } from '@storybook/vue';
import VueStarRating from './VueStarRating.vue';

const story = storiesOf('Atoms|StarRating', module) as any;

story.add(
  'Default',
  () => ({
    components: { VueStarRating },
    template: `<vue-star-rating />`,
  }),
  {
    info: {
      components: { VueStarRating },
    },
  },
);

story.add(
  'Set number of stars',
  () => ({
    components: { VueStarRating },
    template: `<vue-star-rating :max-num-stars="10" />`,
  }),
  {
    info: {
      components: { VueStarRating },
    },
  },
);

story.add(
  'Initial selected stars',
  () => ({
    components: { VueStarRating },
    template: `<vue-star-rating :max-num-stars="4" :selected-num-stars="3" />`,
  }),
  {
    info: {
      components: { VueStarRating },
    },
  },
);
