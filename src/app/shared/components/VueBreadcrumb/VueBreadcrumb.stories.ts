import { storiesOf } from '@storybook/vue';
import VueBreadcrumb from './VueBreadcrumb.vue';

const story = storiesOf('Molecules|Breadcrumb', module);

story.add(
  'Default',
  () => ({
    components: { VueBreadcrumb },
    template: `<vue-breadcrumb :items="[{ label: 'Home', href: '/' }, { label: 'Components', href: '/components' }, { label: 'Breadcrumb', href: '/components/breadcrumb' }]" />`,
  }),
  {
    info: {
      components: { VueBreadcrumb },
    },
  },
);
