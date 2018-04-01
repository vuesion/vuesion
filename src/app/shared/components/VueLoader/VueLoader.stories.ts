import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';
import VueLoader from './VueLoader.vue';

const story = (storiesOf('VueLoader', module) as any);

story.addDecorator(VueInfoAddon);

const storySchema = [
  {
    label: 'Default',
  },
  {
    label: 'Medium',
    props: ['primary', 'medium'],
  },
  {
    label: 'Large',
    props: ['primary', 'large'],
  },
  {
    label: 'Primary',
    props: ['primary'],
  },
  {
    label: 'Accent',
    props: ['accent'],
  },
  {
    label: 'Warn',
    props: ['warn'],
  },
];

for (const item of storySchema) {
  story.add(item.label, () => ({
    components: { VueLoader },
    template: `<vue-loader ${item.props ? item.props.join(' ') : ''}>${item.label}</vue-loader>`,
  }));
}
