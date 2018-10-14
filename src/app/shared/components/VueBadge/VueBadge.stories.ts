import { storiesOf } from '@storybook/vue';
import VueInfoAddon  from 'storybook-addon-vue-info';
import VueBadge      from './VueBadge.vue';

const story = (storiesOf('2. Components|Badge', module) as any);

story.addDecorator(VueInfoAddon);

story.add('Badge Variants', () => ({
  components: { VueBadge },
  template:   `<div>
<vue-badge primary>Primary</vue-badge>
<vue-badge primary outlined>Primary Outlined</vue-badge>
<br />
<br />
<vue-badge secondary>Secondary</vue-badge>
<vue-badge secondary outlined>Secondary Outlined</vue-badge>
<br />
<br />
<vue-badge tertiary>Tertiary</vue-badge>
<vue-badge tertiary outlined>Tertiary Outlined</vue-badge>
<br />
<br />
<vue-badge danger>Danger</vue-badge>
<vue-badge danger outlined>Danger Outlined</vue-badge>
<br />
<br />
<vue-badge warning>Warning</vue-badge>
<vue-badge warning outlined>Warning Outlined</vue-badge>
<br />
<br />
<vue-badge success>Success</vue-badge>
<vue-badge success outlined>Success Outlined</vue-badge>
</div>`,
}));
