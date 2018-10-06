import { storiesOf } from '@storybook/vue';
import VueInfoAddon  from 'storybook-addon-vue-info';
import VueLoader     from './VueLoader.vue';

const story = (storiesOf('VueLoader', module) as any);

story.addDecorator(VueInfoAddon);

const storySchema = [
  {
    label: 'Default',
  },
  {
    label: 'Medium',
    props: ['medium'],
  },
  {
    label: 'Large',
    props: ['large'],
  },
  {
    label: 'Primary',
    props: ['primary'],
  },
  {
    label: 'Secondary',
    props: ['secondary'],
  },
  {
    label: 'Tertiary',
    props: ['tertiary'],
  },
  {
    label: 'Danger',
    props: ['danger'],
  },
  {
    label: 'Warn',
    props: ['warn'],
  },
  {
    label: 'Success',
    props: ['success'],
  },
];

for (const item of storySchema) {
  story.add(item.label, () => ({
    components: { VueLoader },
    template:   `<vue-loader ${item.props ? item.props.join(' ') : ''}>${item.label}</vue-loader>`,
  }));
}
