import { storiesOf } from '@storybook/vue';
import VueInfoAddon  from 'storybook-addon-vue-info';
import VueSlider     from './VueSlider.vue';
import { action }    from '@storybook/addon-actions';

const story = (storiesOf('VueSlider', module) as any);

story.addDecorator(VueInfoAddon);

story.add('Default', () => ({
  components: { VueSlider },
  template:   `<vue-slider :min="0" :max="200" :values="[0]" @change="action" />`,
  methods:    {
    action: action('@change'),
  },
}));

story.add('Range', () => ({
  components: { VueSlider },
  template:   `<vue-slider :min="0" :max="200" :values="[0, 50]" @change="action" />`,
  methods:    {
    action: action('@change'),
  },
}));
