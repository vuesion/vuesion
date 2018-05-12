import { storiesOf } from '@storybook/vue';
import VueInfoAddon  from 'storybook-addon-vue-info';
import VueCheckbox   from './VueCheckbox.vue';
import { action }    from '@storybook/addon-actions';

const story = (storiesOf('VueCheckbox', module) as any);

story.addDecorator(VueInfoAddon);

story.add('Checkbox', () => ({
  components: { VueCheckbox },
  template:   `<vue-checkbox label="checkbox" name="checkbox" id="checkbox" @click="action" />`,
  methods:    {
    action: action('@onClick'),
  },
}));

story.add('Checkbox Disabled', () => ({
  components: { VueCheckbox },
  template:   `<vue-checkbox label="checkbox" name="checkbox" id="checkbox" disabled @click="action" />`,
  methods:    {
    action: action('@onClick'),
  },
}));

story.add('Radio Button', () => ({
  components: { VueCheckbox },
  template:   `<vue-checkbox label="radio button" name="radio" id="radio" radio @click="action" />`,
  methods:    {
    action: action('@onClick'),
  },
}));

story.add('Radio Button disabled', () => ({
  components: { VueCheckbox },
  template:   `<vue-checkbox label="radio button" name="radio" id="radio" radio disabled @click="action" />`,
  methods:    {
    action: action('@onClick'),
  },
}));
