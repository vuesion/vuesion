import { storiesOf } from '@storybook/vue';
import { brandVariations } from '../utils';
import VueBadge from './VueBadge.vue';

const story = storiesOf('Atoms|Badge', module) as any;

story.add(
  'Badge Variants',
  () => ({
    components: { VueBadge },
    data(): any {
      return {
        variations: brandVariations,
      };
    },
    template: `<div>
<template v-for="variation in variations">
<vue-badge :color="variation">{{ variation }}</vue-badge>
<vue-badge :color="variation" outlined>{{ variation }} outlined</vue-badge>
<br />
<br />
</template>
</div>`,
  }),
  {
    info: {
      components: { VueBadge },
    },
  },
);
