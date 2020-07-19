import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import VueDropdownMenu from './VueDropdownMenu.vue';

const story = storiesOf('Molecules|DropdownMenu', module) as any;

story.add(
  'Default',
  () => ({
    components: { VueDropdownMenu },
    template: `<div>This is a dropdown menu within
<vue-dropdown-menu @click="action" @item-click="action"
:items="[{ label: 'Save', value: 'save' }, { label: '', value: 'separator' }, { label: 'Open', value: 'open' }, { label: 'Delete', value: 'delete' }]">
File
</vue-dropdown-menu>
a normal text. It should perfectly fit.</div>`,
    methods: {
      action: action('@onClick'),
    },
  }),
  {
    info: {
      components: { VueDropdownMenu },
    },
  },
);

story.add(
  'Custom option renderer',
  () => ({
    components: { VueDropdownMenu },
    template: `<div>This is a dropdown menu within
<vue-dropdown-menu @click="action" @item-click="action"
:items="[{ label: 'Save', value: 'save' }, { label: '', value: 'separator' }, { label: 'Open', value: 'open' }, { label: 'Delete', value: 'delete' }]">
  File

  <template v-slot:option="{ option }">
    [icon placeholder] {{ option.label }}
  </template>
</vue-dropdown-menu>
a normal text. It should perfectly fit.</div>`,
    methods: {
      action: action('@onClick'),
    },
  }),
  {
    info: {
      components: { VueDropdownMenu },
    },
  },
);
