import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import ComponentDocs from '@/assets/design-system/docs/components/ComponentDocs.vue';
import VueInline from '@/components/layout/VueInline/VueInline.vue';
import VueToggle from '@/components/input-and-actions/VueToggle/VueToggle.vue';
import VueButton from '@/components/input-and-actions/VueButton/VueButton.vue';
import VueStack from '@/components/layout/VueStack/VueStack.vue';
import VueTiles from '@/components/layout/VueTiles/VueTiles.vue';
import VueText from '@/components/typography/VueText/VueText.vue';
import VueModal from './VueModal.vue';

const story = storiesOf('Data Display|Modal', module) as any;

story.add(
  'Default',
  () => ({
    components: {
      ComponentDocs,
      VueModal,
      VueInline,
      VueToggle,
      VueButton,
      VueStack,
      VueText,
      VueTiles,
    },
    data() {
      return {
        show: false,
        backdrop: true,
        disablePageScroll: true,
        closeOnEscape: true,
      };
    },
    methods: {
      onClose: action('@close'),
    },
    template: `<component-docs
      component-name="Modal"
      usage="Modals focus the user’s attention exclusively on one task or piece of information via a window that sits on top of the page content."
      story="Show modal and its properties."
      :style="{ height: '3000px' }"
    >
      <vue-inline stack-phone stack-tablet-portrait stack-tablet-landscape stack-small-desktop stack-large-desktop>
        <vue-toggle label="Show Backdrop" name="backdrop" id="backdrop" v-model="backdrop" />
        <vue-toggle label="Disable page scroll" name="disablePageScroll" id="disablePageScroll" v-model="disablePageScroll" />
        <vue-toggle label="Close on Escape" name="closeOnEscape" id="closeOnEscape" v-model="closeOnEscape" />

        <vue-button look="outline" @click="show = true">Show Modal</vue-button>
      </vue-inline>

      <vue-modal
        :show="show"
        :backdrop="backdrop"
        :disable-page-scroll="disablePageScroll"
        :close-on-escape="closeOnEscape"
        @close="onClose();show = false">
        <vue-stack space="32">
          <vue-stack space="8">
            <vue-text look="h4" color="text-high" align="center">Heading</vue-text>
            <vue-text color="text-low" align="center">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod.
            </vue-text>
          </vue-stack>

          <vue-tiles space="8" :columns="2">
            <vue-button look="secondary" @click="show = false;">Cancel</vue-button>
            <vue-button look="primary" @click="show = false;">Submit</vue-button>
          </vue-tiles>
        </vue-stack>
      </vue-modal>
    </component-docs>
    `,
  }),
  {
    info: {
      components: { VueModal },
    },
  },
);
