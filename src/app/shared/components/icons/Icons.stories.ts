import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import IconList from '../../designSystem/docs/components/IconList.vue';

const story = storiesOf('Atoms|Icons', module) as any;

story.addParameters({ options: { showAddonPanel: false } });

story.add(
  'Icons',
  withInfo({
    header: false,
    source: false,
    propTables: false,
    styles: { propTableHead: { display: 'none' } },
    propTablesExclude: [IconList],
  })(() => ({
    components: {
      IconList,
    },
    template: `<icon-list/>`,
  })),
);
