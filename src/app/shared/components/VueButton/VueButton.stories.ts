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
    label: 'Warn',
    props: ['warn'],
  },
  {
    label: 'Warn Disabled',
    props: ['warn', 'disabled'],
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
    label: 'Default Outlined',
    props: ['outlined'],
  },
  {
    label: 'Outlined Disabled',
    props: ['outlined', 'disabled'],
  },
  {
    label: 'Primary Outlined',
    props: ['primary', 'outlined'],
  },
  {
    label: 'Primary Outlined Disabled',
    props: ['primary', 'outlined', 'disabled'],
  },
  {
    label: 'Secondary Outlined',
    props: ['secondary', 'outlined'],
  },
  {
    label: 'Secondary Outlined Disabled',
    props: ['secondary', 'outlined', 'disabled'],
  },
  {
    label: 'Tertiary Outlined',
    props: ['tertiary', 'outlined'],
  },
  {
    label: 'Tertiary Outlined Disabled',
    props: ['tertiary', 'outlined', 'disabled'],
  },
  {
    label: 'Danger Outlined',
    props: ['danger', 'outlined'],
  },
  {
    label: 'Danger Outlined Disabled',
    props: ['danger', 'outlined', 'disabled'],
  },
  {
    label: 'Warn Outlined',
    props: ['warn', 'outlined'],
  },
  {
    label: 'Warn Outlined Disabled',
    props: ['warn', 'outlined', 'disabled'],
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
    label: 'Default Ghost',
    props: ['ghost'],
  },
  {
    label: 'Default Ghost Disabled',
    props: ['ghost', 'disabled'],
  },
  {
    label: 'Primary Ghost',
    props: ['primary', 'ghost'],
  },
  {
    label: 'Primary Ghost Disabled',
    props: ['primary', 'ghost', 'disabled'],
  },
  {
    label: 'Secondary Ghost',
    props: ['secondary', 'ghost'],
  },
  {
    label: 'Secondary Ghost Disabled',
    props: ['secondary', 'ghost', 'disabled'],
  },
  {
    label: 'Tertiary Ghost',
    props: ['tertiary', 'ghost'],
  },
  {
    label: 'Tertiary Ghost Disabled',
    props: ['tertiary', 'ghost', 'disabled'],
  },
  {
    label: 'Danger Ghost',
    props: ['danger', 'ghost'],
  },
  {
    label: 'Danger Ghost Disabled',
    props: ['danger', 'ghost', 'disabled'],
  },
  {
    label: 'Warn Ghost',
    props: ['warn', 'ghost'],
  },
  {
    label: 'Warn Ghost Disabled',
    props: ['warn', 'ghost', 'disabled'],
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
