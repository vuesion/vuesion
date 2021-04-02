import { storiesOf } from '@storybook/vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import VueInline from '@/components/layout/VueInline/VueInline.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import { brandColorVariations } from '../../prop-validators';
import VueBadge from './VueBadge.vue';

const story = storiesOf('Atoms|Badge', module) as any;

story.add(
  'Badge Variants',
  () => ({
    components: { VueBadge, VueBox, VueInline, VueStack },
    data(): any {
      return {
        variations: brandColorVariations,
      };
    },
    template: `<vue-box>
  <vue-stack>
    <vue-inline v-for="variation in variations">
      <vue-badge :color="variation">{{ variation }}</vue-badge>
      <vue-badge :color="variation" outlined>{{ variation }} outlined</vue-badge>
    </vue-inline>
  </vue-stack>
</vue-box>`,
  }),
  {
    info: {
      components: { VueBadge },
    },
  },
);
