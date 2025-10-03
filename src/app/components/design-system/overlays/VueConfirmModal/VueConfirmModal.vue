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
import type { SpacingWithDirections } from '@/components/utils/prop-types';
import VueModal from '@/components/design-system/overlays/VueModal/VueModal.vue';
import VueStack from '@/components/design-system/layout/VueStack/VueStack.vue';
import VueText from '@/components/design-system/typography/VueText/VueText.vue';
import VueInline from '@/components/design-system/layout/VueInline/VueInline.vue';
import VueButton from '@/components/design-system/forms-and-actions/VueButton/VueButton.vue';

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
