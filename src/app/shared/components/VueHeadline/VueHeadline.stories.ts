import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import VueHeadline from './VueHeadline.vue';

const story = storiesOf('Atoms|Headline', module) as any;

story.add(
  'Headlines regular',
  withInfo({})(() => ({
    components: { VueHeadline },
    template: `<div>
<vue-headline level="1">Headline 1</vue-headline>
<vue-headline level="2">Headline 2</vue-headline>
<vue-headline level="3">Headline 3</vue-headline>
<vue-headline level="4">Headline 4</vue-headline>
<vue-headline level="5">Headline 5</vue-headline>
<vue-headline level="6">Headline 6</vue-headline>
</div>`,
  })),
);

story.add(
  'Semantic headline with different style',
  withInfo({})(() => ({
    components: { VueHeadline },
    template: `<div>
<vue-headline level="1" appearance-level="6">Headline 1 with Headline 6 style</vue-headline>
</div>`,
  })),
);

story.add(
  'DIV as headline',
  withInfo({})(() => ({
    components: { VueHeadline },
    template: `<div>
<vue-headline level="1" :native="false">Headline 1 without semantics</vue-headline>
</div>`,
  })),
);
