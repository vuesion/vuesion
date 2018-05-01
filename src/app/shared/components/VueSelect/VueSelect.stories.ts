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
    };
  },
  template:   `<vue-select :options="options" />`,
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
    };
  },
  template:   `<vue-select :options="options" multiple />`,
}));
