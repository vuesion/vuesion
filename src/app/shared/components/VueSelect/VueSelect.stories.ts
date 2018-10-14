import { storiesOf } from '@storybook/vue';
import VueInfoAddon  from 'storybook-addon-vue-info';
import VueSelect     from './VueSelect.vue';

const story = (storiesOf('VueSelect', module) as any);

story.addDecorator(VueInfoAddon);

story.add('Default', () => ({
  components: { VueSelect },
  data() {
    return {
      options: [
        { label: 'foo', value: 'foo' },
        { label: 'bar', value: 'bar' },
        { label: 'baz', value: 'baz' },
      ],
      model:   '',
    };
  },
  template:   `<vue-select name="select" id="select" placeholder="Select" :options="options" v-model="model" />`,
}));

story.add('Multi', () => ({
  components: { VueSelect },
  data() {
    return {
      options: [
        { label: 'foo', value: 'foo' },
        { label: 'bar', value: 'bar' },
        { label: 'baz', value: 'baz' },
      ],
      model:   '',
    };
  },
  template:   `<vue-select name="select" id="select" placeholder="Select" :options="options" multiple v-model="model" />`,
}));
