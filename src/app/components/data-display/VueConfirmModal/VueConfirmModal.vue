<template>
  <vue-modal
    :padding="padding"
    :show="show"
    :backdrop="backdrop"
    :disable-page-scroll="disablePageScroll"
    hide-close-button
    :class="$style.VueConfirmModal"
    @close="$emit('close')"
  >
    <vue-stack>
      <vue-text>{{ text }}</vue-text>
      <vue-inline space="8" align-x="start" reverse>
        <vue-button size="sm" look="primary" :loading="loading" @click="$emit('confirm')">
          {{ confirmText }}
        </vue-button>
        <vue-button size="sm" look="ghost" :disabled="loading" @click="$emit('abort')">
          {{ abortText }}
        </vue-button>
      </vue-inline>
    </vue-stack>
  </vue-modal>
</template>

<script setup lang="ts">
import { useCssModule } from 'vue';
import type { SpacingWithDirections } from '~/app/components/prop-types';
import VueModal from '~/app/components/data-display/VueModal/VueModal.vue';
import VueStack from '~/app/components/layout/VueStack/VueStack.vue';
import VueText from '~/app/components/typography/VueText/VueText.vue';
import VueInline from '~/app/components/layout/VueInline/VueInline.vue';
import VueButton from '~/app/components/input-and-actions/VueButton/VueButton.vue';

// Interface
interface ConfirmModalProps {
  padding?: string | SpacingWithDirections | Array<SpacingWithDirections>;
  show?: boolean;
  backdrop?: boolean;
  loading?: boolean;
  disablePageScroll?: boolean;
  text?: string;
  confirmText?: string;
  abortText?: string;
}
interface ConfirmModalEmits {
  (e: 'confirm'): void;
  (e: 'abort'): void;
  (e: 'close'): void;
}
withDefaults(defineProps<ConfirmModalProps>(), {
  padding: () => [16],
  show: false,
  backdrop: true,
  disablePageScroll: false,
  text: 'Are you sure you want to delete this item?',
  confirmText: 'Yes',
  abortText: 'No',
});
defineEmits<ConfirmModalEmits>();

// Deps
const $style = useCssModule();
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.VueConfirmModal {
  // this class is only applied if you add css properties
}
</style>
