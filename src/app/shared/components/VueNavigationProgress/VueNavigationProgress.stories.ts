import { storiesOf } from '@storybook/vue';
import VueInfoAddon  from 'storybook-addon-vue-info';
import VueNavigationProgress           from './VueNavigationProgress.vue';
import VueCheckbox from '../VueCheckbox/VueCheckbox';
import VuePanel      from '../VuePanel/VuePanel.vue';

const story = (storiesOf('VueNavigationProgress', module) as any);

story.addDecorator(VueInfoAddon);

story.add('Default', () => ({
  components: { VueNavigationProgress, VueCheckbox, VuePanel },
  data() {
    return {
      isNavigating: true,
    };
  },
  template: `
<vue-panel>
  <vue-checkbox label="isNavigating" v-model="isNavigating" @change="isNavigating = !isNavigating" />
  <vueNavigationProgress :isNavigating="isNavigating">VueNavigationProgress</vueNavigationProgress>
</vue-panel>`,
}));