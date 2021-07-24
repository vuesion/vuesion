import { storiesOf } from '@storybook/vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueLoader from './VueLoader.vue';

const story = storiesOf('Data Display|Loader', module) as any;

story.add(
  'Default',
  () => ({
    components: { VueLoader, ComponentDocs, VueStack },
    template: `<component-docs
    component-name="Loader"
    usage="Used to provide visual feedback that data is being loaded."
    story="Display the loader in different contexts. The color is dictated by the text color of the context">
    <vue-stack>
      <div><vue-loader /></div>
      <div :style="{ color: 'var(--brand-warning)' }"><vue-loader /></div>
      <div :style="{ color: 'var(--brand-success)' }"><vue-loader /></div>
      <div :style="{ color: 'var(--brand-danger)' }"><vue-loader /></div>
    </vue-stack>
</component-docs>`,
  }),
  {
    info: {
      components: { VueLoader },
    },
  },
);
