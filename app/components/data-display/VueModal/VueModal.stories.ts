import { ref } from 'vue';
import type { StoryFn } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import VueModal from './VueModal.vue';
import VueStack from '~/app/components/layout/VueStack/VueStack.vue';
import VueTiles from '~/app/components/layout/VueTiles/VueTiles.vue';
import VueText from '~/app/components/typography/VueText/VueText.vue';
import VueButton from '~/app/components/input-and-actions/VueButton/VueButton.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Data Display/Modal',
  component: VueModal,
  argTypes: {},
};

const Template: StoryFn = (args) => ({
  components: {
    VueModal,
    VueStack,
    VueTiles,
    VueText,
    VueButton,
    ComponentDocs,
  },

  inheritAttrs: false,
  setup() {
    const show = ref(false);
    return { args, show, onClose: action('close') };
  },

  template: `<component-docs
      component-name="Modal"
      usage="Modals focus the user’s attention exclusively on one task or piece of information via a window that sits on top of the page content."
      story="Show modal and its properties."
      :style="{ height: '3000px' }"
  >
  <vue-button @click="show=true">Show Dialog</vue-button>
  <vue-modal
      v-bind="args"
      :show="show"
      @close="onClose();show = false">
    <vue-stack space="32">
      <vue-stack space="8">
        <vue-text look="h4" color="text-high" align-x="center">Heading</vue-text>
        <vue-text color="text-low" align-x="center">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod.
        </vue-text>
      </vue-stack>

      <vue-tiles space="8" :columns="2">
        <vue-button look="secondary" @click="show=false">Cancel</vue-button>
        <vue-button look="primary" @click="show=false">Submit</vue-button>
      </vue-tiles>
    </vue-stack>
  </vue-modal>
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {
    padding: '48 16 16 16',
    backdrop: true,
    disablePageScroll: true,
    closeOnOutsideClick: true,
    hideCloseButton: false,
  },
};
