import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import { IItem } from '@/interfaces/IItem';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueInline from '@/components/layout/VueInline/VueInline.vue';
import VueSelect from '@/components/input-and-actions/VueSelect/VueSelect.vue';
import VueDropdown from './VueDropdown.vue';

const story = storiesOf('Input & Actions|Dropdown', module) as any;

// TODO: add usage
story.add(
  'Default',
  () => ({
    components: { VueDropdown, ComponentDocs, VueStack, VueInline, VueSelect },
    data(): { items: Array<IItem>; alignMenu: IItem } {
      return {
        items: [
          { label: 'Save', value: 'save', leadingIcon: 'save' },
          { label: '', value: 'separator' },
          { label: 'Open', value: 'open', leadingIcon: 'folder-open' },
          { label: 'Delete', value: 'delete', leadingIcon: 'trash' },
        ],
        alignMenu: { label: 'Left', value: 'left' },
      };
    },
    template: `<component-docs
    component-name="Dropdown"
    usage="TBD"
    story="Display a dropdown with all menu item variations. Please interact with the dropdown via mouse and keyboard."
    >
    <vue-stack>
      <vue-inline>
        <vue-select
          :items="[
              { label: 'Left', value: 'left' },
              { label: 'Center', value: 'center' },
              { label: 'Right', value: 'right' },
              ]"
          label="Align menu"
          name="alignMenu"
          id="alignMenu"
          hide-description
          v-model="alignMenu"
        />
      </vue-inline>
      <vue-inline>
        <vue-dropdown
          button-text="Dropdown Button"
          :items="items"
          :align-menu="alignMenu.value"
          @click="onClick"
          @item-click="onItemClick" />
      </vue-inline>
    </vue-stack>
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
