import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import VueLoader from './VueLoader.vue';

const story = storiesOf('2. Components|Loader', module) as any;

story.add(
  'Loader Variants',
  withInfo({})(() => ({
    components: { VueLoader },
    template: `<div>
<vue-loader color="primary" />
<vue-loader color="primary" medium />
<vue-loader color="primary" large />
<br />
<br />
<vue-loader color="secondary" />
<vue-loader color="secondary" medium />
<vue-loader color="secondary" large />
<br />
<br />
<vue-loader color="tertiary" />
<vue-loader color="tertiary" medium />
<vue-loader color="tertiary" large />
<br />
<br />
<vue-loader color="danger" />
<vue-loader color="danger" medium />
<vue-loader color="danger" large />
<br />
<br />
<vue-loader color="warning" />
<vue-loader color="warning" medium />
<vue-loader color="warning" large />
<br />
<br />
<vue-loader color="success" />
<vue-loader color="success" medium />
<vue-loader color="success" large />
</div>`,
  })),
);
