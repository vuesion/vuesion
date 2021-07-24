import { storiesOf } from '@storybook/vue';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueToggle from '@/components/input-and-actions/VueToggle/VueToggle.vue';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueIconInfo from '@/components/icons/VueIconInfoCircle.vue';
import VueSelect from '@/components/input-and-actions/VueSelect/VueSelect.vue';
import VueInline from '@/components/layout/VueInline/VueInline.vue';
import VueButton from '@/components/input-and-actions/VueButton/VueButton.vue';
import VueTooltip from './VueTooltip.vue';

const story = storiesOf('Data Display|Tooltip', module) as any;

story.add(
  'Default',
  () => ({
    components: {
      VueTooltip,
      ComponentDocs,
      VueStack,
      VueToggle,
      VueText,
      VueIconInfo,
      VueSelect,
      VueInline,
      VueButton,
    },
    data() {
      return {
        disabled: false,
        direction: { label: 'Top', value: 'top' },
      };
    },
    template: `<component-docs
      component-name="Tooltip"
      usage="Tooltips display additional information upon click, hover, or focus. The information should be contextual, useful, and nonessential."
      story="Display tootltip and all its properties."
    >
    <vue-stack>
      <vue-inline>
        <vue-select
          :items="[{ label: 'Top', value: 'top' }, { label: 'Bottom', value: 'bottom' }]"
          label="Direction"
          name="direction"
          id="direction"
          v-model="direction"
        />
      </vue-inline>
      <vue-toggle label="Disable tooltips" name="disable" id="disable" v-model="disabled" />

      <vue-text>This is a text <vue-tooltip :direction="direction.value" tip="This is a tooltip!" :disabled="disabled">with a tooltip!!!</vue-tooltip></vue-text>
      <vue-text>But also icons can have tooltips: <vue-tooltip :direction="direction.value" tip="This is a tooltip!" :disabled="disabled"><vue-icon-info /></vue-tooltip></vue-text>
      <vue-inline>
        <vue-tooltip :direction="direction.value" tip="this is a longer tooltip!" :disabled="disabled"><vue-button look="primary">With tooltip</vue-button></vue-tooltip>
      </vue-inline>
    </vue-stack>
    </component-docs>`,
  }),
  {
    info: {
      components: { VueTooltip },
    },
  },
);
