import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import VueInfoAddon from 'storybook-addon-vue-info';
import VueButton from './VueButton.vue';

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
    label: 'Default Pulse',
    props: ['pulse'],
  },
  {
    label: 'Default with Icon',
    props: ['icon="user"'],
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
    label: 'Primary Pulse',
    props: ['primary', 'pulse'],
  },
  {
    label: 'Primary with Icon',
    props: ['primary', 'icon="user"'],
  },
  {
    label: 'Accent',
    props: ['accent'],
  },
  {
    label: 'Accent Disabled',
    props: ['accent', 'disabled'],
  },
  {
    label: 'Accent Pulse',
    props: ['accent', 'pulse'],
  },
  {
    label: 'Accent with Icon',
    props: ['accent', 'icon="user"'],
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
    label: 'Warn Pulse',
    props: ['warn', 'pulse'],
  },
  {
    label: 'Warn with Icon',
    props: ['warn', 'icon="user"'],
  },
];

for (const item of storySchema) {
  story.add(item.label, () => ({
    components: { VueButton },
    template: `<vue-button @click="action" ${item.props ? item.props.join(' ') : ''}>${item.label}</vue-button>`,
    methods: {
      action: action('@onClick'),
    },
  }));
}
