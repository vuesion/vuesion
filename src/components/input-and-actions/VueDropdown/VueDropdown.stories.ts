import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import { IItem } from '@/interfaces/IItem';
import VueDropdown from './VueDropdown.vue';

const story = storiesOf('Input & Actions|Dropdown', module) as any;

// TODO: add usage
story.add(
  'Default',
  () => ({
    components: { VueDropdown, ComponentDocs },
    data(): { items: Array<IItem> } {
      return {
        items: [
          { label: 'Save', value: 'save', leadingIcon: 'code' },
          { label: '', value: 'separator' },
          { label: 'Open', value: 'open', leadingIcon: 'search' },
          { label: 'Delete', value: 'delete', leadingIcon: 'times' },
        ],
      };
    },
    template: `<component-docs
    component-name="Dropdown"
    usage="TBD"
    story="Display a dropdown with all menu item variations. Please interact with the dropdown via mouse and keyboard."
    >
    <vue-dropdown button-text="Dropdown Button" :items="items" @click="onClick" @item-click="onItemClick" />
    </component-docs>`,
    methods: {
      onClick: action('@click'),
      onItemClick: action('@item-click'),
    },
  }),
  {
    info: {
      components: { VueDropdown },
    },
  },
);
