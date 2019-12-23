import { storiesOf } from '@storybook/vue';
import VueSlider from './VueSlider.vue';
import { action } from '@storybook/addon-actions';

const story = storiesOf('Atoms|Slider', module) as any;

story.add(
  'Default',
  () => ({
    components: { VueSlider },
    template: `<vue-slider :min="0" :max="200" :values="[0]" @change="action" />`,
    methods: {
      action: action('@change'),
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
    template: `<vue-slider :min="0" :max="200" :values="[0, 50]" @change="action" />`,
    methods: {
      action: action('@change'),
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
    template: `<vue-slider disabled :min="0" :max="200" :values="[0, 50]" @change="action" />`,
    methods: {
      action: action('@change'),
    },
  }),
  {
    info: {
      components: { VueSlider },
    },
  },
);
