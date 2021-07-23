import { storiesOf } from '@storybook/vue';
import IconList from '@/components/icons/IconList.vue';

const story = storiesOf('Foundation|General', module) as any;

story.addParameters({ options: { showAddonPanel: false } });

story.add(
  'Icons',
  () => ({
    components: {
      IconList,
    },
    template: `<icon-list/>`,
  }),
  {
    info: ` `,
  },
);
