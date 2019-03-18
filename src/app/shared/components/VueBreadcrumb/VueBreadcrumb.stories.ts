import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import VueBreadcrumb from './VueBreadcrumb.vue';

const story = storiesOf('Molecules|Breadcrumb', module);

story.add(
  'Default',
  withInfo({})(() => ({
    components: { VueBreadcrumb },
    template: `<vue-breadcrumb :items="[{ label: 'Home', href: '/' }, { label: 'Components', href: '/components' }, { label: 'Breadcrumb', href: '/components/breadcrumb' }]" />`,
  })),
);
