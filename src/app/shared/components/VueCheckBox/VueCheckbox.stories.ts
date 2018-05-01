import { storiesOf } from '@storybook/vue';
import VueInfoAddon  from 'storybook-addon-vue-info';
import VueCheckBox   from './VueCheckBox.vue';
import { action }    from '@storybook/addon-actions';

const story = (storiesOf('VueCheckBox', module) as any);

story.addDecorator(VueInfoAddon);

story.add('Checkbox', () => ({
  components: { VueCheckBox },
  template:   `<vue-check-box label="checkbox" name="checkbox" id="checkbox" @click="action" />`,
  methods:    {
    action: action('@onClick'),
  },
}));

story.add('Checkbox Disabled', () => ({
  components: { VueCheckBox },
  template:   `<vue-check-box label="checkbox" name="checkbox" id="checkbox" disabled @click="action" />`,
  methods:    {
    action: action('@onClick'),
  },
}));

story.add('Radio Button', () => ({
  components: { VueCheckBox },
  template:   `<vue-check-box label="radio button" name="radio" id="radio" radio @click="action" />`,
  methods:    {
    action: action('@onClick'),
  },
}));

story.add('Radio Button disabled', () => ({
  components: { VueCheckBox },
  template:   `<vue-check-box label="radio button" name="radio" id="radio" radio disabled @click="action" />`,
  methods:    {
    action: action('@onClick'),
  },
}));
