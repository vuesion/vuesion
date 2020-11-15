import { storiesOf } from '@storybook/vue';
import { textVariations } from '@/components/prop-validators';
import VueText from './VueText.vue';

const story = storiesOf('Atoms|Text', module) as any;

story.add(
  'Colors',
  () => ({
    components: { VueText },
    data() {
      return {
        textVariations,
      };
    },
    template: `<div>
    <vue-text v-for="color in textVariations" :key="color" :color="color" as="div">
      {{ color }}
    </vue-text>
    </div>`,
  }),
  {
    info: {
      components: { VueText },
    },
  },
);
