import { storiesOf } from '@storybook/vue';
import IconList from '@/components/icons/IconList.vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';

const story = storiesOf('Foundation|General', module) as any;

story.addParameters({ options: { showAddonPanel: false } });

story.add(
  'Iconography',
  () => ({
    components: {
      IconList,
      ComponentDocs,
    },
    template: `<component-docs
      component-name="Hero Icons"
      usage="Filled ( 20 x 20 )"
      suffix=""
    >
      <icon-list/>
    </component-docs>`,
  }),
  {
    info: ` `,
  },
);
