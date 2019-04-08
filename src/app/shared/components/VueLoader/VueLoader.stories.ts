import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import VueLoader from './VueLoader.vue';
import { brandVariations } from '@components/utils';

const story = storiesOf('Atoms|Loader', module) as any;

story.add(
  'Loader Variants',
  withInfo({})(() => ({
    components: { VueLoader },
    data(): any {
      return {
        variations: brandVariations,
      };
    },
    template: `<div>
<template v-for="variation in variations">
<vue-loader :color="variation" />
<vue-loader :color="variation" medium />
<vue-loader :color="variation" large />
<br />
<br />
</template>
</div>`,
  })),
);
