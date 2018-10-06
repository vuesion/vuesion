import { storiesOf }         from '@storybook/vue';
import VueInfoAddon          from 'storybook-addon-vue-info';
import VueNavigationProgress from './VueNavigationProgress.vue';
import VueCheckbox           from '../VueCheckbox/VueCheckbox.vue';

const story = (storiesOf('VueNavigationProgress', module) as any);

story.addDecorator(VueInfoAddon);

story.add('Default', () => ({
  components: { VueNavigationProgress, VueCheckbox },
  data() {
    return {
      isNavigating: true,
    };
  },
  template:   `
<div>
  <vue-checkbox id="isNavigating" name="isNavigating" label="isNavigating" v-model="isNavigating" />
  <vue-navigation-progress :isNavigating="isNavigating" />
</div>`,
}));
