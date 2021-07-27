import { storiesOf } from '@storybook/vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueToggle from '@/components/input-and-actions/VueToggle/VueToggle.vue';
import VueFooter from './VueFooter.vue';

const story = storiesOf('Navigation|Footer', module) as any;

story.add(
  'Default',
  () => ({
    components: { ComponentDocs, VueStack, VueToggle, VueFooter },
    data() {
      return {
        slim: false,
      };
    },
    template: `<component-docs
      component-name="Footer"
      usage="Secondary navigation element used to surface specific, not-often-accessed content."
      story="Show footer and all its properties."
    >
    <vue-stack space="64">
      <vue-toggle label="Slim mode" name="slim" id="slim" v-model="slim" />

      <vue-footer :slim="slim" />
    </vue-stack>
    </component-docs>`,
  }),
  {
    info: {
      components: { VueFooter },
    },
  },
);
