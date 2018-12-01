import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import VueBadge from './VueBadge.vue';

const story = storiesOf('2. Components|Badge', module) as any;

story.add(
  'Badge Variants',
  withInfo({})(() => ({
    components: { VueBadge },
    template: `<div>
<vue-badge color="primary">Primary</vue-badge>
<vue-badge color="primary" outlined>Primary Outlined</vue-badge>
<br />
<br />
<vue-badge color="secondary">Secondary</vue-badge>
<vue-badge color="secondary" outlined>Secondary Outlined</vue-badge>
<br />
<br />
<vue-badge color="tertiary">Tertiary</vue-badge>
<vue-badge color="tertiary" outlined>Tertiary Outlined</vue-badge>
<br />
<br />
<vue-badge color="danger">Danger</vue-badge>
<vue-badge color="danger" outlined>Danger Outlined</vue-badge>
<br />
<br />
<vue-badge color="warning">Warning</vue-badge>
<vue-badge color="warning" outlined>Warning Outlined</vue-badge>
<br />
<br />
<vue-badge color="success">Success</vue-badge>
<vue-badge color="success" outlined>Success Outlined</vue-badge>
</div>`,
  })),
);
