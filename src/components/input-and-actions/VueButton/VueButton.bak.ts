import { onMounted, ref } from 'vue';
import VueButton from './VueButton.vue';
import { ButtonStyleValues, ShirtSizeValues } from '~/components/prop-types';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueInline from '@/components/layout/VueInline/VueInline.vue';
import VueColumns from '@/components/layout/VueColumns/VueColumns.vue';
import VueColumn from '@/components/layout/VueColumns/VueColumn/VueColumn.vue';
import VueText from '@/components/typography/VueText/VueText.vue';

export default {
  title: 'Input & Actions/Button',
  component: VueButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    VueButton,
    ComponentDocs,
    VueStack,
    VueInline,
    VueText,
    VueColumns,
    VueColumn,
  },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const loading = ref(false);

    onMounted(() => {
      setInterval(() => {
        loading.value = !loading.value;
      }, 2000);
    });

    return { args, styles: ButtonStyleValues, sizes: ShirtSizeValues, loading };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<component-docs
      component-name="Button"
      usage="Buttons are used primarily to take action. Each type has a different best-for context: - primary: key action. use for the most important;
- basic: used with primary;
- outline: used for less prominent actions, maybe in actions in a series. used for tasks;
- danger: used to destruct"
      story="Show all button variations and sized. Please interact with the buttons to see different states."
  >
  <vue-stack space="64">
    <vue-columns>
      <vue-column :width="['content', '150px']"></vue-column>

      <vue-column v-for="size in sizes" :key="size" width="200px">
        <vue-text look="large-title">{{ size }}</vue-text>
      </vue-column>
    </vue-columns>

    <vue-columns v-for="style in styles" :key="style"stack-phone>
      <vue-column :width="['content', '150px']">
        <vue-text look="large-title">{{ style }}</vue-text>
      </vue-column>

      <vue-column v-for="size in sizes" :key="size":width="['content', '200px']">
        <vue-inline stack-phone stack-tablet-portrait stack-tablet-landscape stack-small-desktop stack-large-desktop>
          <vue-button :look="style" :size="size">Button</vue-button>
          <vue-button :look="style" :size="size" leading-icon="github">
            Button
          </vue-button>
          <vue-button :look="style" :size="size" trailing-icon="github">
            Button
          </vue-button>
          <vue-button :look="style" :size="size" block>Button</vue-button>
          <vue-button :look="style" :size="size" :loading="loading">Button</vue-button>
          <vue-button :look="style" :size="size" disabled>Button</vue-button>
        </vue-inline>
      </vue-column>
    </vue-columns>
  </vue-stack>
  </component-docs>`,
});

export const Styles = Template.bind({});

Styles.args = {};
