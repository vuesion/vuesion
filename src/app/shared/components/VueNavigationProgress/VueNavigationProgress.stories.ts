import { storiesOf }         from '@storybook/vue';
import VueInfoAddon          from 'storybook-addon-vue-info';
import VueNavigationProgress from './VueNavigationProgress.vue';
import VueCheckbox           from '../VueCheckbox/VueCheckbox.vue';
import VuePanel              from '../VuePanel/VuePanel.vue';
import VuePanelBody          from '../VuePanel/VuePanelBody/VuePanelBody.vue';

const story = (storiesOf('VueNavigationProgress', module) as any);

story.addDecorator(VueInfoAddon);

story.add('Default', () => ({
  components: { VueNavigationProgress, VueCheckbox, VuePanel, VuePanelBody },
  data() {
    return {
      isNavigating: true,
    };
  },
  template:   `
<vue-panel>
  <vue-panel-body>
    <vue-checkbox id="isNavigating" name="isNavigating" label="isNavigating" v-model="isNavigating" />
    <vue-navigation-progress :isNavigating="isNavigating" />
  </vue-panel-body>
</vue-panel>`,
}));
