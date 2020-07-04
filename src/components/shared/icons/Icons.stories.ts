import { storiesOf } from '@storybook/vue';
import IconList from '~/assets/designSystem/docs/components/IconList.js';

const story = storiesOf('Atoms|Icons', module) as any;

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
