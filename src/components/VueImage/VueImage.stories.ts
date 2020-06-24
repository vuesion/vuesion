import { storiesOf } from '@storybook/vue';
import VueImage from './VueImage.vue';

const story = storiesOf('Atoms|Image', module) as any;

story.add(
  'Default',
  () => ({
    components: { VueImage },
    template: `<vue-image src="https://via.placeholder.com/512" alt="foo" />`,
  }),
  {
    info: {
      components: { VueImage },
    },
  },
);

story.add(
  'As DIV',
  () => ({
    components: { VueImage },
    template: `<vue-image src="https://via.placeholder.com/512" alt="foo" :native="false" :style="{width:'320px',height:'320px',backgroundSize:'cover'}" />`,
  }),
  {
    info: {
      components: { VueImage },
    },
  },
);
