import { storiesOf } from '@storybook/vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import { IItem } from '@/interfaces/IItem';
import VueBreadcrumb from './VueBreadcrumb.vue';

const story = storiesOf('Navigation|Breadcrumb', module);
// TODO: add usage
story.add(
  'Default',
  () => ({
    components: { VueBreadcrumb, ComponentDocs },
    data(): { items: Array<IItem> } {
      return {
        items: [
          { label: 'Level 1', value: '/level-1' },
          { label: 'Level 2', value: '/level-2' },
          { label: 'Level 3', value: '/level-3' },
          { label: 'Level 4', value: '/level-4' },
          { label: 'Level 5', value: '/level-5' },
        ],
      };
    },
    template: `<component-docs
      component-name="Breadcrumb"
      usage="TBD"
      story="Display breadcrumb. Please switch to the mobile viewport to see the mobile version of this component."
    >
    <vue-breadcrumb :items="items" />
    </component-docs>`,
  }),
  {
    info: {
      components: { VueBreadcrumb },
    },
  },
);
