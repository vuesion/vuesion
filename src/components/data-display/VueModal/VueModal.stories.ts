import { action } from '@storybook/addon-actions';
import VueModal from './VueModal.vue';
import VueStack from '~/components/layout/VueStack/VueStack.vue';
import VueTiles from '~/components/layout/VueTiles/VueTiles.vue';
import VueText from '~/components/typography/VueText/VueText.vue';
import VueButton from '~/components/input-and-actions/VueButton/VueButton.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Data Display/Modal',
  component: VueModal,
  argTypes: {},
};

const Template = (args) => ({
  components: {
    VueModal,
    VueStack,
    VueTiles,
    VueText,
    VueButton,
    ComponentDocs,
  },

  setup() {
    return { args, onClose: action('close') };
  },

  template: `<component-docs
      component-name="Modal"
      usage="Modals focus the user’s attention exclusively on one task or piece of information via a window that sits on top of the page content."
      story="Show modal and its properties."
      :style="{ height: '3000px' }"
  >
  <vue-modal
      v-bind="args"
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
        <vue-button look="secondary">Cancel</vue-button>
        <vue-button look="primary">Submit</vue-button>
      </vue-tiles>
    </vue-stack>
  </vue-modal>
  </component-docs>`,
});

export const Default = Template.bind({});

Default.args = {
  padding: '48 16 16 16',
  show: true,
  backdrop: true,
  disablePageScroll: false,
  closeOnEscape: true,
};
