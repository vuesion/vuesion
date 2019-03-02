import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import VueCheckbox from './VueCheckbox.vue';
import { action } from '@storybook/addon-actions';

const story = storiesOf('Atoms|Checkbox', module) as any;

story.add(
  'Checkbox',
  withInfo({})(() => ({
    components: { VueCheckbox },
    data() {
      return {
        model: false,
      };
    },
    template: `<vue-checkbox label="checkbox" name="checkbox" id="checkbox" @click="action" v-model="model" />`,
    methods: {
      action: action('@onClick'),
    },
  })),
);

story.add(
  'Checkbox Disabled',
  withInfo({})(() => ({
    components: { VueCheckbox },
    data() {
      return {
        model: false,
      };
    },
    template: `<vue-checkbox label="checkbox" name="checkbox" id="checkbox" disabled @click="action" v-model="model" />`,
    methods: {
      action: action('@onClick'),
    },
  })),
);

story.add(
  'Radio Button',
  withInfo({})(() => ({
    components: { VueCheckbox },
    data() {
      return {
        model: false,
      };
    },
    template: `<vue-checkbox label="radio button" name="radio" id="radio" radio @click="action" v-model="model" />`,
    methods: {
      action: action('@onClick'),
    },
  })),
);

story.add(
  'Radio Button disabled',
  withInfo({})(() => ({
    components: { VueCheckbox },
    data() {
      return {
        model: false,
      };
    },
    template: `<vue-checkbox label="radio button" name="radio" id="radio" radio disabled @click="action" v-model="model" />`,
    methods: {
      action: action('@onClick'),
    },
  })),
);
