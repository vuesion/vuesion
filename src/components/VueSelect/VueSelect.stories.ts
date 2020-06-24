import { storiesOf } from '@storybook/vue';
import VueSelect from './VueSelect.vue';

const story = storiesOf('Atoms|Select', module) as any;

story.add(
  'Default',
  () => ({
    components: { VueSelect },
    data() {
      return {
        options: [
          { label: 'foo', value: 'foo' },
          { label: 'bar', value: 'bar' },
          { label: 'baz', value: 'baz' },
        ],
        model: '',
      };
    },
    template: `<vue-select name="select" id="select" placeholder="Select" :options="options" v-model="model" />`,
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
        options: [
          { label: 'foo', value: 'foo' },
          { label: 'bar', value: 'bar' },
          { label: 'baz', value: 'baz' },
        ],
        model: '',
      };
    },
    template: `<vue-select name="select" id="select" placeholder="Select" :options="options" multiple v-model="model" />`,
  }),
  {
    info: {
      components: { VueSelect },
    },
  },
);
