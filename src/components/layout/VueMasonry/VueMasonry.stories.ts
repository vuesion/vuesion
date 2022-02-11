import { storiesOf } from '@storybook/vue';
import { getIntInRange } from '@vuesion/utils/dist/randomGenerator';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import VueMasonry from './VueMasonry.vue';

const story = storiesOf('Foundation|Layout/Masonry', module) as any;

story.add(
  'Default',
  () => ({
    components: { ComponentDocs, VueMasonry },
    template: `<component-docs
      component-name="Masonry"
      usage="Display items in 3 rows with their actual height stacked on top of each other."
      story="Show Masonry layout component."
    >
      <vue-masonry>
        <div v-for="index in 12" :key="index" :style="{height: getRandomHeight(), background: getRandomBackground()}"></div>
      </vue-masonry>
    </component-docs>`,
    methods: {
      getRandomHeight() {
        return ['250px', '350px', '500px', '300px', '550px'][getIntInRange(0, 4)];
      },
      getRandomBackground() {
        return [
          'var(--brand-primary)',
          'var(--brand-success)',
          'var(--brand-info)',
          'var(--brand-warning)',
          'var(--brand-danger)',
        ][getIntInRange(0, 4)];
      },
    },
  }),
  {
    info: {
      components: { VueMasonry },
    },
  },
);
