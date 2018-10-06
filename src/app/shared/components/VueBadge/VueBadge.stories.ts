import { storiesOf } from '@storybook/vue';
import VueInfoAddon  from 'storybook-addon-vue-info';
import VueBadge      from './VueBadge.vue';

const story = (storiesOf('VueBadge', module) as any);

story.addDecorator(VueInfoAddon);

const storySchema = [
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
  {
    label: 'Primary Outlined',
    props: ['primary', 'outlined'],
  },
  {
    label: 'Secondary Outlined',
    props: ['secondary', 'outlined'],
  },
  {
    label: 'Tertiary Outlined',
    props: ['tertiary', 'outlined'],
  },
  {
    label: 'Danger Outlined',
    props: ['danger', 'outlined'],
  },
  {
    label: 'Warn Outlined',
    props: ['warn', 'outlined'],
  },
  {
    label: 'Success Outlined',
    props: ['success', 'outlined'],
  },
];

for (const item of storySchema) {
  story.add(item.label, () => ({
    components: { VueBadge },
    template:   `<vue-badge ${item.props ? item.props.join(' ') : ''}>${item.label}</vue-badge>`,
  }));
}
