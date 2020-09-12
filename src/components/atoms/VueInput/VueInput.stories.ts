import { storiesOf } from '@storybook/vue';
import VueButton from '../VueButton/VueButton.vue';
import VueModal from '../../molecules/VueModal/VueModal.vue';
import VueInput from './VueInput.vue';

const story = storiesOf('Atoms|Input', module) as any;

story.add(
  'Default',
  () => ({
    components: { VueInput },
    data() {
      return {
        model: '',
      };
    },
    template: `<vue-input label="Name" name="name" id="name" v-model="model" />`,
  }),
  {
    info: {
      components: { VueInput },
    },
  },
);

story.add(
  'Disabled',
  () => ({
    components: { VueInput },
    data() {
      return {
        model: '',
      };
    },
    template: `<vue-input label="Name" name="name" id="name" v-model="model" :disabled="true" />`,
  }),
  {
    info: {
      components: { VueInput },
    },
  },
);

story.add(
  'Hint',
  () => ({
    components: { VueInput },
    data() {
      return {
        model: '',
      };
    },
    template: `<vue-input label="Name" name="name" id="name" v-model="model" description="description" />`,
  }),
  {
    info: {
      components: { VueInput },
    },
  },
);

story.add(
  'Validation/Error state',
  () => ({
    components: { VueInput },
    data() {
      return {
        model: '',
      };
    },
    template: `<vue-input label="Name" name="name" id="name" v-model="model" validation="required|integer" required description="please enter a number" errorMessage="This is not a number" />`,
  }),
  {
    info: {
      components: { VueInput },
    },
  },
);

story.add(
  'Readonly',
  () => ({
    components: { VueInput },
    data() {
      return {
        model: '',
      };
    },
    template: `<vue-input label="Name" name="name" id="name" value="foo" readonly />`,
  }),
  {
    info: {
      components: { VueInput },
    },
  },
);

story.add(
  'SPA autofocus',
  () => ({
    components: { VueInput, VueButton, VueModal },
    data() {
      return {
        model: '',
        show: false,
      };
    },
    template: `<div>
    <vue-button @click="show = !show" color="primary">Login</vue-button>
    <vue-modal :show="show" @close="show = false">
      <vue-input autofocus label="Name" name="name" id="name" v-model="model" />
      <vue-button ghost @click="show = !show">Close</vue-button>
    </vue-modal>
    </div>`,
  }),
  {
    info: {
      components: { VueInput },
    },
  },
);

story.add(
  'Textarea',
  () => ({
    components: { VueInput, VueButton, VueModal },
    data() {
      return {
        model: '',
      };
    },
    template: `<vue-input label="Name" name="name" placeholder="Placeholder" id="name" type="textarea" v-model="model" />`,
  }),
  {
    info: {
      components: { VueInput },
    },
  },
);
