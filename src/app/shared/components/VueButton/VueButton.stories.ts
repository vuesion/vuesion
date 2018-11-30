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
<vue-button @click="action" primary>Primary</vue-button>
<vue-button @click="action" primary disabled>Primary Disabled</vue-button>
<vue-button @click="action" primary outlined>Primary Outlined</vue-button>
<vue-button @click="action" primary ghost>Primary Ghost</vue-button>
<vue-button @click="action" primary loading>Primary Loading</vue-button>
<br />
<br />
<vue-button @click="action" secondary>Secondary</vue-button>
<vue-button @click="action" secondary disabled>Secondary Disabled</vue-button>
<vue-button @click="action" secondary outlined>Secondary Outlined</vue-button>
<vue-button @click="action" secondary ghost>Secondary Ghost</vue-button>
<vue-button @click="action" secondary loading>Secondary Loading</vue-button>
<br />
<br />
<vue-button @click="action" tertiary>Tertiary</vue-button>
<vue-button @click="action" tertiary disabled>Tertiary Disabled</vue-button>
<vue-button @click="action" tertiary outlined>Tertiary Outlined</vue-button>
<vue-button @click="action" tertiary ghost>Tertiary Ghost</vue-button>
<vue-button @click="action" tertiary loading>Tertiary Loading</vue-button>
<br />
<br />
<vue-button @click="action" danger>Danger</vue-button>
<vue-button @click="action" danger disabled>Danger Disabled</vue-button>
<vue-button @click="action" danger outlined>Danger Outlined</vue-button>
<vue-button @click="action" danger ghost>Danger Ghost</vue-button>
<vue-button @click="action" danger loading>Danger Loading</vue-button>
<br />
<br />
<vue-button @click="action" warning>Warning</vue-button>
<vue-button @click="action" warning disabled>Warning Disabled</vue-button>
<vue-button @click="action" warning outlined>Warning Outlined</vue-button>
<vue-button @click="action" warning ghost>Warning Ghost</vue-button>
<vue-button @click="action" warning loading>Warning Loading</vue-button>
<br />
<br />
<vue-button @click="action" success>Success</vue-button>
<vue-button @click="action" success disabled>Success Disabled</vue-button>
<vue-button @click="action" success outlined>Success Outlined</vue-button>
<vue-button @click="action" success ghost>Success Ghost</vue-button>
<vue-button @click="action" success loading>Success Loading</vue-button>
</div>
`,
    methods: {
      action: action('@onClick'),
    },
  })),
);
