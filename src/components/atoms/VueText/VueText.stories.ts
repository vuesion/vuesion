import { storiesOf } from '@storybook/vue';
import { textColorVariations } from '@/components/prop-validators';
import VueText from './VueText.vue';

const story = storiesOf('Design System|Typography', module) as any;

story.add(
  'Text Styles',
  () => ({
    components: { VueText },
    data() {
      return {
        textVariations: textColorVariations,
      };
    },
    template: `<div :style="{padding:'32px'}">
    <vue-text appearance="h1" as="h1">H1</vue-text>
    <vue-text appearance="h2" as="h2">H2</vue-text>
    <vue-text appearance="h3" as="h3">H3</vue-text>
    <vue-text appearance="h4" as="h4">H4</vue-text>
    <vue-text appearance="h5" as="h5">H5</vue-text>
    <vue-text appearance="h6" as="h6">H6</vue-text>
    <vue-text appearance="description" as="div">Description</vue-text>
    <vue-text appearance="large-title" weight="semi-bold" as="div">Large title</vue-text>
    <vue-text appearance="small-title" weight="semi-bold" as="div">Small title</vue-text>
    <vue-text as="div">Default</vue-text>
    <vue-text appearance="label" as="div">Label</vue-text>
    <vue-text appearance="button" weight="semi-bold" as="div">Button</vue-text>
    <vue-text appearance="support" as="div">Support</vue-text>
    </div>`,
  }),
  {
    info: {
      components: { VueText },
    },
  },
);

story.add(
  'Text Colors',
  () => ({
    components: { VueText },
    data() {
      return {
        textVariations: textColorVariations,
      };
    },
    template: `<div :style="{padding:'32px'}">
    <vue-text v-for="color in textVariations" :key="color" :color="color" as="div">
      {{ color }}
    </vue-text>
    <br/>
    <br/>
    <vue-text v-for="color in textVariations" :key="color + '_2'" :color="color" as="div" serifs>
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
