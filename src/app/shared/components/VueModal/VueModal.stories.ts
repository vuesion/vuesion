import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import VueModal from './VueModal.vue';
import VueButton from '../VueButton/VueButton.vue';

const story = storiesOf('Molecules|Modal', module) as any;

story.add(
  'Default',
  withInfo({ propTablesExclude: [VueButton] })(() => ({
    components: { VueModal, VueButton },
    data() {
      return {
        show: false,
      };
    },
    template: `
<div>
  <vue-button @click="show = true" color="secondary">Show</vue-button>
  <vue-modal :show="show" @close="show = false">
    <vue-button color="primary" @click="show = false">Hide</vue-button>
  </vue-modal>
</div>
  `,
  })),
);

story.add(
  'Fit Content',
  withInfo({ propTablesExclude: [VueButton] })(() => ({
    components: { VueModal, VueButton },
    data() {
      return {
        show: false,
      };
    },
    template: `
<div>
  <vue-button @click="show = true" color="secondary">Show</vue-button>
  <vue-modal :show="show" @close="show = false" fit-content>
    <vue-button style="margin: 0;" color="primary" @click="show = false">Hide</vue-button>
  </vue-modal>
</div>
  `,
  })),
);
