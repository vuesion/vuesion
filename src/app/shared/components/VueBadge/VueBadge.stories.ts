import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import VueBadge from './VueBadge.vue';
import { brandVariations } from '@components/utils';

const story = storiesOf('Atoms|Badge', module) as any;

story.add(
  'Badge Variants',
  withInfo({})(() => ({
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
  })),
);
