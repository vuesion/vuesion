import { storiesOf } from '@storybook/vue';
import { textVariations } from '@/components/prop-validators';
import VueHeadline from './VueHeadline.vue';

const story = storiesOf('Atoms|Headline', module) as any;

story.add(
  'Headlines regular',
  () => ({
    components: { VueHeadline },
    template: `<div>
<vue-headline level="1">Headline 1</vue-headline>
<vue-headline level="2">Headline 2</vue-headline>
<vue-headline level="3">Headline 3</vue-headline>
<vue-headline level="4">Headline 4</vue-headline>
<vue-headline level="5">Headline 5</vue-headline>
<vue-headline level="6">Headline 6</vue-headline>
</div>`,
  }),
  {
    info: {
      components: { VueHeadline },
    },
  },
);

story.add(
  'Semantic headline with different style',
  () => ({
    components: { VueHeadline },
    template: `<div>
<vue-headline level="1" appearance-level="6">Headline 1 with Headline 6 style</vue-headline>
</div>`,
  }),
  {
    info: {
      components: { VueHeadline },
    },
  },
);

story.add(
  'DIV as headline',
  () => ({
    components: { VueHeadline },
    template: `<div>
<vue-headline level="1" :native="false">Headline 1 without semantics</vue-headline>
</div>`,
  }),
  {
    info: {
      components: { VueHeadline },
    },
  },
);

story.add(
  'Colors',
  () => ({
    components: { VueHeadline },
    data() {
      return {
        textVariations,
      };
    },
    template: `<div>
    <vue-headline v-for="color in textVariations" :key="color" :color="color" level="6">
      {{ color }}
    </vue-headline>
    </div>`,
  }),
  {
    info: {
      components: { VueHeadline },
    },
  },
);
