import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueSlider from './VueSlider.vue';

const story = storiesOf('Input & Actions|Slider', module) as any;

story.add(
  'Single',
  () => ({
    components: { VueSlider, ComponentDocs, VueStack },
    template: `<component-docs
    component-name="Slider"
    usage="Allows user to visually adjust numeric input by interacting with the slider handle and progress track as visual feedback."
    story="Display single slider enabled and disabled. Please interact with the slider to see all interaction states."
    >
    <vue-stack>
      <vue-slider id="slider1" label="Slider enabled" :min="0" :max="200" :range="[100]" @change="action" />
      <vue-slider id="slider2" label="Slider disabled" :min="0" :max="200" :range="[100]" disabled @change="action" />
    </vue-stack>
  </component-docs>`,
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
    components: { VueSlider, ComponentDocs, VueStack },
    template: `<component-docs
      story="Display range slider enabled and disabled. Please interact with the slider to see all interaction states."
    >
    <vue-stack>
      <vue-slider id="slider1" label="Range-slider enabled" :min="0" :max="200" :range="[40, 120]" @change="action" />
      <vue-slider id="slider2" label="Range-slider disabled" :min="0" :max="200" :range="[40, 120]" disabled @change="action" />
    </vue-stack>
    </component-docs>`,
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
