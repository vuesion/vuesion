import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import VueButton from '../../atoms/VueButton/VueButton.vue';
import VueModal from './VueModal.vue';

const story = storiesOf('Molecules|Modal', module) as any;

story.add(
  'Default',
  () => ({
    components: { VueModal, VueButton },
    data() {
      return {
        show: false,
      };
    },
    methods: {
      onClose: action('@close'),
    },
    template: `
<div>
  <vue-button @click="show = true" color="primary">Show</vue-button>
  <vue-modal :show="show" @close="onClose();show = false">
    <vue-button color="primary" @click="show = false">Hide</vue-button>
  </vue-modal>
</div>
  `,
  }),
  {
    info: {
      components: { VueModal },
    },
  },
);

story.add(
  'Fit Content',
  () => ({
    components: { VueModal, VueButton },
    data() {
      return {
        show: false,
      };
    },
    methods: {
      onClose: action('@close'),
    },
    template: `
        <div>
            <vue-button @click="show = true" color="primary">Show</vue-button>
            <vue-modal :show="show" @close="onClose();show = false" fit-content>
                <vue-button color="primary" @click="show = false">Hide</vue-button>
            </vue-modal>
        </div>
    `,
  }),
  {
    info: {
      components: { VueModal },
    },
  },
);

story.add(
  'No-backdrop',
  () => ({
    components: { VueModal, VueButton },
    data() {
      return {
        show: false,
      };
    },
    methods: {
      onClose: action('@close'),
    },
    template: `
        <div>
            <vue-button @click="show = true" color="primary">Show</vue-button>
            <vue-modal :show="show" :backdrop="false" @close="onClose();show = false" fit-content>
                <vue-button color="primary" @click="show = false">Hide</vue-button>
            </vue-modal>
        </div>
    `,
  }),
  {
    info: {
      components: { VueModal },
    },
  },
);

story.add(
  'No-close-on-escape',
  () => ({
    components: { VueModal, VueButton },
    data() {
      return {
        show: false,
      };
    },
    methods: {
      onClose: action('@close'),
    },
    template: `
<div>
  <vue-button @click="show = true" color="primary">Show</vue-button>
  <vue-modal :show="show" :close-on-escape="false" @close="onClose();show = false" fit-content>
    <vue-button color="primary" @click="show = false">Hide</vue-button>
  </vue-modal>
</div>
  `,
  }),
  {
    info: {
      components: { VueModal },
    },
  },
);
