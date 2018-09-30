import { storiesOf } from '@storybook/vue';
import { action }    from '@storybook/addon-actions';
import VueInfoAddon  from 'storybook-addon-vue-info';
import VueButton     from './VueButton.vue';

const story = (storiesOf('VueButton', module) as any);

story.addDecorator(VueInfoAddon);

const storySchema = [
  {
    label: 'Default',
  },
  {
    label: 'Default Disabled',
    props: ['disabled'],
  },
  {
    label: 'Primary',
    props: ['primary'],
  },
  {
    label: 'Primary Disabled',
    props: ['primary', 'disabled'],
  },
  {
    label: 'Secondary',
    props: ['secondary'],
  },
  {
    label: 'Secondary Disabled',
    props: ['secondary', 'disabled'],
  },
  {
    label: 'Tertiary',
    props: ['tertiary'],
  },
  {
    label: 'Tertiary Disabled',
    props: ['tertiary', 'disabled'],
  },
  {
    label: 'Danger',
    props: ['danger'],
  },
  {
    label: 'Danger Disabled',
    props: ['danger', 'disabled'],
  },
  {
    label: 'Attention',
    props: ['attention'],
  },
  {
    label: 'Attention Disabled',
    props: ['attention', 'disabled'],
  },
  {
    label: 'Success',
    props: ['success'],
  },
  {
    label: 'Success Disabled',
    props: ['success', 'disabled'],
  },
  {
    label: 'Success Outlined',
    props: ['success', 'outlined'],
  },
  {
    label: 'Success Outlined Disabled',
    props: ['success', 'outlined', 'disabled'],
  },
  {
    label: 'Success Ghost',
    props: ['success', 'ghost'],
  },
  {
    label: 'Success Ghost Disabled',
    props: ['success', 'ghost', 'disabled'],
  },
];

for (const item of storySchema) {
  story.add(item.label, () => ({
    components: { VueButton },
    template:   `<vue-button @click="action" ${item.props ? item.props.join(' ') : ''}>${item.label}</vue-button>`,
    methods:    {
      action: action('@onClick'),
    },
  }));
}
