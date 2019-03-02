import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import VueSlider from './VueSlider.vue';
import { action } from '@storybook/addon-actions';

const story = storiesOf('Atoms|Slider', module) as any;

story.add(
  'Default',
  withInfo({})(() => ({
    components: { VueSlider },
    template: `<vue-slider :min="0" :max="200" :values="[0]" @change="action" />`,
    methods: {
      action: action('@change'),
    },
  })),
);

story.add(
  'Range',
  withInfo({})(() => ({
    components: { VueSlider },
    template: `<vue-slider :min="0" :max="200" :values="[0, 50]" @change="action" />`,
    methods: {
      action: action('@change'),
    },
  })),
);

story.add(
  'Disabled',
  withInfo({})(() => ({
    components: { VueSlider },
    template: `<vue-slider disabled :min="0" :max="200" :values="[0, 50]" @change="action" />`,
    methods: {
      action: action('@change'),
    },
  })),
);
