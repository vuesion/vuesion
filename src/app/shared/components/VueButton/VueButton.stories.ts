import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withInfo } from 'storybook-addon-vue-info';
import VueButton from './VueButton.vue';

const story = storiesOf('2. Components|Button', module) as any;

story.add(
  'Button Variants',
  withInfo({})(() => ({
    components: { VueButton },
    template: `<div>
<vue-button @click="action" color="primary">Primary</vue-button>
<vue-button @click="action" color="primary" disabled>Primary Disabled</vue-button>
<vue-button @click="action" color="primary" outlined>Primary Outlined</vue-button>
<vue-button @click="action" color="primary" ghost>Primary Ghost</vue-button>
<vue-button @click="action" color="primary" loading>Primary Loading</vue-button>
<br />
<br />
<vue-button @click="action" color="secondary">Secondary</vue-button>
<vue-button @click="action" color="secondary" disabled>Secondary Disabled</vue-button>
<vue-button @click="action" color="secondary" outlined>Secondary Outlined</vue-button>
<vue-button @click="action" color="secondary" ghost>Secondary Ghost</vue-button>
<vue-button @click="action" color="secondary" loading>Secondary Loading</vue-button>
<br />
<br />
<vue-button @click="action" color="tertiary">Tertiary</vue-button>
<vue-button @click="action" color="tertiary" disabled>Tertiary Disabled</vue-button>
<vue-button @click="action" color="tertiary" outlined>Tertiary Outlined</vue-button>
<vue-button @click="action" color="tertiary" ghost>Tertiary Ghost</vue-button>
<vue-button @click="action" color="tertiary" loading>Tertiary Loading</vue-button>
<br />
<br />
<vue-button @click="action" color="danger">Danger</vue-button>
<vue-button @click="action" color="danger" disabled>Danger Disabled</vue-button>
<vue-button @click="action" color="danger" outlined>Danger Outlined</vue-button>
<vue-button @click="action" color="danger" ghost>Danger Ghost</vue-button>
<vue-button @click="action" color="danger" loading>Danger Loading</vue-button>
<br />
<br />
<vue-button @click="action" color="warning">Warning</vue-button>
<vue-button @click="action" color="warning" disabled>Warning Disabled</vue-button>
<vue-button @click="action" color="warning" outlined>Warning Outlined</vue-button>
<vue-button @click="action" color="warning" ghost>Warning Ghost</vue-button>
<vue-button @click="action" color="warning" loading>Warning Loading</vue-button>
<br />
<br />
<vue-button @click="action" color="success">Success</vue-button>
<vue-button @click="action" color="success" disabled>Success Disabled</vue-button>
<vue-button @click="action" color="success" outlined>Success Outlined</vue-button>
<vue-button @click="action" color="success" ghost>Success Ghost</vue-button>
<vue-button @click="action" color="success" loading>Success Loading</vue-button>
</div>
`,
    methods: {
      action: action('@onClick'),
    },
  })),
);
