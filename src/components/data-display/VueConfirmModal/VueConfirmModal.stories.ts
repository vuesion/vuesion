import { StoryFn } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import VueConfirmModal from './VueConfirmModal.vue';
import ComponentDocs from '~/assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Data-display/ConfirmModal',
  component: VueConfirmModal,
  argTypes: {},
};

const Template: StoryFn = (args) => ({
  components: {
    VueConfirmModal,
    ComponentDocs,
  },
  inheritAttrs: false,
  setup() {
    return { args, onClose: action('close'), onConfirm: action('confirm'), onAbort: action('abort') };
  },
  template: `<component-docs
      component-name="ConfirmModal"
      usage="A dialog to confirm a preceded interaction triggered by the user."
      story="Show confirm-modal and its properties."
  >
      <vue-confirm-modal v-bind="args" @close="onClose" @confirm="onConfirm" @abort="onAbort" />
  </component-docs>`,
});

export const Default = {
  render: Template,

  args: {
    padding: '16',
    show: false,
    backdrop: true,
    disablePageScroll: false,
    text: 'Are you sure you want to delete this item?',
    confirmText: 'Yes',
    abortText: 'No',
  },
};
