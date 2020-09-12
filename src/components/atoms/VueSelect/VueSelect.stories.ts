import { storiesOf } from '@storybook/vue';
import VueSelect from './VueSelect.vue';

const story = storiesOf('Atoms|Select', module) as any;

story.add(
  'Default',
  () => ({
    components: { VueSelect },
    data() {
      return {
        items: [
          { label: 'foo', value: 'foo' },
          { label: 'bar', value: 'bar' },
          { label: 'baz', value: 'baz' },
        ],
        model: '',
      };
    },
    template: `<vue-select name="select" id="select" label="Select" :items="items" v-model="model" />`,
  }),
  {
    info: {
      components: { VueSelect },
    },
  },
);

story.add(
  'Multi',
  () => ({
    components: { VueSelect },
    data() {
      return {
        items: [
          { label: 'foo', value: 'foo' },
          { label: 'bar', value: 'bar' },
          { label: 'baz', value: 'baz' },
        ],
        model: '',
      };
    },
    template: `<vue-select name="select" id="select" label="Select" :items="items" multi-select v-model="model" />`,
  }),
  {
    info: {
      components: { VueSelect },
    },
  },
);
