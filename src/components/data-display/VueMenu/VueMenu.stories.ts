import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import { IItem } from '@/interfaces/IItem';
import VueMenu from './VueMenu.vue';

const story = storiesOf('Data Display|Menu', module) as any;

story.add(
  'Default',
  () => ({
    components: { VueMenu, ComponentDocs },
    data(): { items: Array<IItem> } {
      return {
        items: [
          { label: 'Value 1', value: 'Value 1', description: 'Description 1', leadingIcon: 'cog' },
          { label: 'Value 2', value: 'Value 2', description: 'Description 2', trailingIcon: 'times', disabled: true },
          { label: '', value: 'separator' },
          { label: 'Value 3', value: 'Value 3', description: 'Description 3', leadingIcon: 'cog' },
          { label: 'Value 4', value: 'Value 4', description: 'Description 4', trailingIcon: 'times' },
        ],
      };
    },
    methods: {
      onClick: action('@click'),
    },
    template: `<component-docs
    component-name="Menu"
    usage="Allows users to interact with a list of actions."
    story="Display menu with all interaction states. Please interact with the menu to see all states."
    >
    <vue-menu :items="items" @click="onClick" />
    </component-docs>`,
  }),
  {
    info: {
      components: { VueMenu },
    },
  },
);
