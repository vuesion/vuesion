import { storiesOf } from '@storybook/vue';
import VueCheckbox from '../VueCheckbox/VueCheckbox.vue';
import VueNavigationProgress from './VueNavigationProgress.vue';

const story = storiesOf('Atoms|NavigationProgress', module) as any;

story.add(
  'Default',
  () => ({
    components: { VueNavigationProgress, VueCheckbox },
    data() {
      return {
        isNavigating: true,
      };
    },
    template: `
<div>
  <vue-checkbox id="isNavigating" name="isNavigating" label="isNavigating" v-model="isNavigating" />
  <vue-navigation-progress :isNavigating="isNavigating" />
</div>`,
  }),
  {
    info: {
      components: { VueNavigationProgress },
    },
  },
);
