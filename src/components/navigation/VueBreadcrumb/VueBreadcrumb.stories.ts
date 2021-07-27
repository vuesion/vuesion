import { storiesOf } from '@storybook/vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import { IItem } from '@/interfaces/IItem';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueBreadcrumb from './VueBreadcrumb.vue';

const story = storiesOf('Navigation|Breadcrumb', module);

story.add(
  'Default',
  () => ({
    components: { VueBreadcrumb, ComponentDocs, VueStack },
    data(): { items: Array<IItem>; items2: Array<IItem>; items3: Array<IItem> } {
      return {
        items: [
          { label: 'Level 1', value: '/level-1' },
          { label: 'Level 2', value: '/level-2' },
          { label: 'Level 3', value: '/level-3' },
        ],
        items2: [
          { label: 'Level 1', value: '/level-1' },
          { label: 'Level 2', value: '/level-2' },
        ],
        items3: [{ label: 'Level 1', value: '/level-1' }],
      };
    },
    template: `<component-docs
      component-name="Breadcrumb"
      usage="List of links that show hierarchy and navigational context for a user’s location within an app."
      story="Display breadcrumb. Please switch to the mobile viewport to see the mobile version of this component."
    >
    <vue-stack>
      <vue-breadcrumb :items="items" />
      <vue-breadcrumb :items="items2" />
      <vue-breadcrumb :items="items3" />
    </vue-stack>
    </component-docs>`,
  }),
  {
    info: {
      components: { VueBreadcrumb },
    },
  },
);
