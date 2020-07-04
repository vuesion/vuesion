import { storiesOf } from '@storybook/vue';
import VueButton from '../VueButton/VueButton.vue';
import VueModal from '../VueModal/VueModal.vue';
import VueTextarea from './VueTextarea.vue';

const story = storiesOf('Atoms|Textarea', module) as any;

story.add(
  'Default',
  () => ({
    components: { VueTextarea },
    data() {
      return {
        model: '',
      };
    },
    template: `<vue-textarea placeholder="Name" name="name" id="name" v-model="model" />`,
  }),
  {
    info: {
      components: { VueTextarea },
    },
  },
);

story.add(
  'Disabled',
  () => ({
    components: { VueTextarea },
    data() {
      return {
        model: '',
      };
    },
    template: `<vue-textarea placeholder="Name" name="name" id="name" v-model="model" :disabled="true" />`,
  }),
  {
    info: {
      components: { VueTextarea },
    },
  },
);

story.add(
  'Hint',
  () => ({
    components: { VueTextarea },
    data() {
      return {
        model: '',
      };
    },
    template: `<vue-textarea placeholder="Name" name="name" id="name" v-model="model" message="description" />`,
  }),
  {
    info: {
      components: { VueTextarea },
    },
  },
);

story.add(
  'Validation/Error state',
  () => ({
    components: { VueTextarea },
    data() {
      return {
        model: '',
      };
    },
    template: `<vue-textarea placeholder="Name" name="name" id="name" v-model="model" validation="required|integer" required message="please enter a number" errorMessage="This is not a number" />`,
  }),
  {
    info: {
      components: { VueTextarea },
    },
  },
);

story.add(
  'Readonly',
  () => ({
    components: { VueTextarea },
    data() {
      return {
        model: '',
      };
    },
    template: `<vue-textarea placeholder="Name" name="name" id="name" value="foo" readonly />`,
  }),
  {
    info: {
      components: { VueTextarea },
    },
  },
);

story.add(
  'SPA autofocus',
  () => ({
    components: { VueTextarea, VueButton, VueModal },
    data() {
      return {
        model: '',
        show: false,
      };
    },
    template: `<div>
  <vue-button @click="show = !show" color="primary">Login</vue-button>

  <vue-modal :show="show" @close="show = false">
    <vue-textarea autofocus placeholder="Name" name="name" id="name" v-model="model" />
    <vue-button ghost @click="show = !show">Close</vue-button>
  </vue-modal>
</div>`,
  }),
  {
    info: {
      components: { VueTextarea },
    },
  },
);
