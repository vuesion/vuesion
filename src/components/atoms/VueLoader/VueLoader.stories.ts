import { storiesOf } from '@storybook/vue';
import { brandColorVariations } from '../../prop-validators';
import VueLoader from './VueLoader.vue';

const story = storiesOf('Atoms|Loader', module) as any;

story.add(
  'Loader Variants',
  () => ({
    components: { VueLoader },
    data(): any {
      return {
        variations: brandColorVariations,
      };
    },
    template: `<div>
<template v-for="variation in variations">
<vue-loader :color="variation" />
<vue-loader :color="variation" size="32" />
<vue-loader :color="variation" size="120" />
<br />
<br />
</template>
</div>`,
  }),
  {
    info: {
      components: { VueLoader },
    },
  },
);
