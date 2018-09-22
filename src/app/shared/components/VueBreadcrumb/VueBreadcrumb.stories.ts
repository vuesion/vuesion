import { storiesOf } from '@storybook/vue';
import VueInfoAddon  from 'storybook-addon-vue-info';
import VueBreadcrumb from './VueBreadcrumb.vue';

const story = storiesOf('VueBreadcrumb', module);

story.addDecorator(VueInfoAddon);
story.addDecorator(require('storybook-vue-router').default());

story.add('Default', () => ({
  components: { VueBreadcrumb },
  template:   `<vue-breadcrumb :items="[{ label: 'Home', href: '/' }, { label: 'Components', href: '/components' }, { label: 'Breadcrumb', href: '/components/breadcrumb' }]" />`,
}));
