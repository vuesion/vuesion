import { storiesOf } from '@storybook/vue';
import VueInfoAddon  from 'storybook-addon-vue-info';
import VueInput      from './VueInput.vue';
import VueButton     from '../VueButton/VueButton.vue';
import VueModal      from '../VueModal/VueModal.vue';

const story = (storiesOf('VueInput', module) as any);

story.addDecorator(VueInfoAddon);

story.add('Default', () => ({
  components: { VueInput },
  data() {
    return {
      model: '',
    };
  },
  template:   `<vue-input placeholder="Name" name="name" id="name" v-model="model" />`,
}));

story.add('Disabled', () => ({
  components: { VueInput },
  data() {
    return {
      model: '',
    };
  },
  template:   `<vue-input placeholder="Name" name="name" id="name" v-model="model" :disabled="true" />`,
}));

story.add('Hint', () => ({
  components: { VueInput },
  data() {
    return {
      model: '',
    };
  },
  template:   `<vue-input placeholder="Name" name="name" id="name" v-model="model" message="please enter a number" />`,
}));

story.add('Validation/Error state', () => ({
  components: { VueInput },
  data() {
    return {
      model: '',
    };
  },
  template:   `<vue-input placeholder="Name" name="name" id="name" v-model="model" validation="required" required message="please enter a number" />`,
}));

story.add('Readonly', () => ({
  components: { VueInput },
  data() {
    return {
      model: '',
    };
  },
  template:   `<vue-input placeholder="Name" name="name" id="name" v-model="model" readonly />`,
}));

story.add('SPA autofocus', () => ({
  components: { VueInput, VueButton, VueModal },
  data() {
    return {
      model: '',
      show:  false,
    };
  },
  template:   `<div>
  <vue-button @click="show = !show" primary>Login</vue-button>

  <vue-modal :show="show" @close="show = false">
    <vue-input autofocus placeholder="Name" name="name" id="name" v-model="model" />
    <vue-button @click="show = !show">Close</vue-button>
  </vue-modal>
</div>`,
}));
