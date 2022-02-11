import { storiesOf } from '@storybook/vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import VueToggleButton from './VueToggleButton.vue';

const story = storiesOf('Input & actions|ToggleButton', module) as any;

story.add(
  'Default',
  () => ({
    components: { ComponentDocs, VueToggleButton },
    data(): any {
      return {
        model: null,
        items: [
          {
            leadingIcon: 'view-grid',
            label: 'Grid view',
            value: 'grid-view',
          },
          {
            leadingIcon: 'view-list',
            label: 'List view',
            value: 'list-view',
          },
          {
            leadingIcon: 'Folder',
            label: 'Folder view',
            value: 'folder-view',
          },
          {
            leadingIcon: 'Code',
            label: 'Code view',
            value: 'code',
          },
        ],
      };
    },
    template: `<component-docs
      component-name="ToggleButton"
      usage="Used to toggle an option, e.g. text alignment, switching views."
      story="Show toggle-button with all it's properties."
    >
      Model: {{ model }}
      <br/>
      <br/>
      <vue-toggle-button v-model="model" size="sm" :items="items" />
      <br/>
      <br/>
      <vue-toggle-button v-model="model" :items="items" />
      <br/>
      <br/>
      <vue-toggle-button v-model="model" size="lg" :items="items" />
    </component-docs>`,
  }),
  {
    info: {
      components: { VueToggleButton },
    },
  },
);
