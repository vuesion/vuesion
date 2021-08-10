import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import { IItem } from '@/interfaces/IItem';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueInline from '@/components/layout/VueInline/VueInline.vue';
import VueSelect from '@/components/input-and-actions/VueSelect/VueSelect.vue';
import VueDropdown from './VueDropdown.vue';

const story = storiesOf('Input & Actions|Dropdown', module) as any;

story.add(
  'Default',
  () => ({
    components: { VueDropdown, ComponentDocs, VueStack, VueInline, VueSelect },
    data(): { items: Array<IItem>; alignMenu: IItem; alignYMenu: IItem; size: IItem } {
      return {
        items: [
          { label: 'Save', value: 'save', leadingIcon: 'save' },
          { label: '', value: 'separator' },
          { label: 'Open', value: 'open', leadingIcon: 'folder' },
          { label: 'Delete', value: 'delete', leadingIcon: 'trash' },
        ],
        alignMenu: { label: 'Left', value: 'left' },
        alignYMenu: { label: 'Bottom', value: 'bottom' },
        size: { label: 'Medium', value: 'md' },
      };
    },
    template: `<component-docs
    component-name="Dropdown"
    usage="Used to provide a list of actions that a user can take or change a setting."
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
          label="Align menu horizontally"
          name="alignMenu"
          id="alignMenu"
          hide-description
          v-model="alignMenu"
        />
        <vue-select
          :items="[
              { label: 'Top', value: 'top' },
              { label: 'Bottom', value: 'bottom' },
              ]"
          label="Align menu vertically"
          name="alignYMenu"
          id="alignYMenu"
          hide-description
          v-model="alignYMenu"
        />
        <vue-select
          :items="[
              { label: 'Small', value: 'sm' },
              { label: 'Medium', value: 'md' },
              { label: 'Large', value: 'lg' },
              ]"
          label="Size"
          name="size"
          id="size"
          hide-description
          v-model="size"
        />
      </vue-inline>
      <vue-inline>
        <vue-dropdown
          button-text="Dropdown Button"
          :items="items"
          :align-menu="alignMenu.value"
          :align-y-menu="alignYMenu.value"
          :size="size.value"
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
