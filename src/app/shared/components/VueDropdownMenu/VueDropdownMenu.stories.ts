import { storiesOf }   from '@storybook/vue';
import { action }      from '@storybook/addon-actions';
import VueInfoAddon    from 'storybook-addon-vue-info';
import VueDropdownMenu from './VueDropdownMenu.vue';

const story = (storiesOf('VueDropdownMenu', module) as any);

story.addDecorator(VueInfoAddon);

story.add('Default', () => ({
  components: { VueDropdownMenu },
  template:   `<div>This is a dropdown menu within <vue-dropdown-menu @click="action"
:options="[{ label: 'Save', value: 'save' }, { label: 'Open', value: 'open' }, { label: 'Delete', value: 'delete' }]">
File
</vue-dropdown-menu> a normal text. It should perfectly fit.</div>`,
  methods:    {
    action: action('@onClick'),
  },
}));
