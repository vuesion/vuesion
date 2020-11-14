import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import VueSlider from './VueSlider.vue';

const story = storiesOf('Atoms|Slider', module) as any;

story.add(
  'Default',
  () => ({
    components: { VueSlider },
    template: `<vue-slider :min="0" :max="200" :value="[0]" @input="action" />`,
    methods: {
      action: action('@input'),
    },
  }),
  {
    info: {
      components: { VueSlider },
    },
  },
);

story.add(
  'Range',
  () => ({
    components: { VueSlider },
    template: `<vue-slider :min="0" :max="200" :value="[0, 200]" @input="action" />`,
    methods: {
      action: action('@input'),
    },
  }),
  {
    info: {
      components: { VueSlider },
    },
  },
);

story.add(
  'Disabled',
  () => ({
    components: { VueSlider },
    template: `<vue-slider disabled :min="0" :max="200" :value="[0, 50]" @input="action" />`,
    methods: {
      action: action('@input'),
    },
  }),
  {
    info: {
      components: { VueSlider },
    },
  },
);
