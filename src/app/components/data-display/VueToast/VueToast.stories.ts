import type { StoryFn } from '@storybook/vue3';
import VueToast from './VueToast.vue';
import { addToast } from '~/app/components/utils';
import VueInline from '~/app/components/layout/VueInline/VueInline.vue';
import VueButton from '~/app/components/input-and-actions/VueButton/VueButton.vue';
import ComponentDocs from 'assets/design-system/docs/components/ComponentDocs.vue';

export default {
  title: 'Data Display/Toast',
  component: VueToast,
  argTypes: {},
};

const Template: StoryFn = (args) => ({
  components: {
    VueToast,
    VueButton,
    ComponentDocs,
    VueInline,
  },

  inheritAttrs: false,
  setup() {
    return {
      args,
      onSuccessToastClick() {
        addToast({
          title: 'This is a success message!',
          type: 'success',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
        });
      },
      onInfoToastClick() {
        addToast({
          title: 'This is an information!',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
        });
      },
      onWarningToastClick() {
        addToast({
          title: 'This is a warning!',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
          type: 'warning',
          displayTimeInMs: 15000,
        });
      },
      onDangerToastClick() {
        addToast({
          title: 'This is an error!',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
          type: 'danger',
          displayTimeInMs: 30000,
        });
      },
    };
  },

  template: `<component-docs
      component-name="Toast"
      usage="Used to communicate messages from the system to the user."
      story="Show toast messages with their different properties."
  >
  <vue-toast />

  <vue-inline stack-phone stack-tablet-portrait stack-tablet-landscape stack-small-desktop stack-large-desktop>
    <vue-button look="primary" @click="onSuccessToastClick">add success toast</vue-button>
    <vue-button look="secondary" @click="onInfoToastClick">add info toast</vue-button>
    <vue-button look="outline" @click="onWarningToastClick">add warning toast</vue-button>
    <vue-button look="danger" @click="onDangerToastClick">add danger toast</vue-button>
  </vue-inline>

  </component-docs>`,
});

export const Default = {
  render: Template,
  args: {},
};
