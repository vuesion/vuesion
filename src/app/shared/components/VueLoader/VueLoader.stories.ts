import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import VueLoader from './VueLoader.vue';

const story = storiesOf('2. Components|Loader', module) as any;

story.add(
  'Loader Variants',
  withInfo({})(() => ({
    components: { VueLoader },
    template: `<div>
<vue-loader primary />
<vue-loader primary medium />
<vue-loader primary large />
<br />
<br />
<vue-loader secondary />
<vue-loader secondary medium />
<vue-loader secondary large />
<br />
<br />
<vue-loader tertiary />
<vue-loader tertiary medium />
<vue-loader tertiary large />
<br />
<br />
<vue-loader danger />
<vue-loader danger medium />
<vue-loader danger large />
<br />
<br />
<vue-loader warning />
<vue-loader warning medium />
<vue-loader warning large />
<br />
<br />
<vue-loader success />
<vue-loader success medium />
<vue-loader success large />
</div>`,
  })),
);
