import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import VueStarRating from './VueStarRating.vue';

const story = storiesOf('Organisms|StarRating', module) as any;

story.add(
  'Default',
  withInfo({})(() => ({
    components: { VueStarRating },
    template: `<vue-star-rating />`,
  })),
);

story.add(
  'Set number of stars',
  withInfo({})(() => ({
    components: { VueStarRating },
    template: `<vue-star-rating :max-num-stars="10" />`,
  })),
);

story.add(
  'Initial selected stars',
  withInfo({})(() => ({
    components: { VueStarRating },
    template: `<vue-star-rating :max-num-stars="4" :selected-num-stars="3" />`,
  })),
);
