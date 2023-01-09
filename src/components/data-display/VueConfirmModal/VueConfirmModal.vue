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
      <vue-inline space="8" align-x="end">
        <vue-button size="sm" look="primary" @click="$emit('confirm')">{{ confirmText }}</vue-button>
        <vue-button size="sm" look="secondary" @click="$emit('abort')">{{ abortText }}</vue-button>
      </vue-inline>
    </vue-stack>
  </vue-modal>
</template>

<script setup lang="ts">
import VueModal from '~/components/data-display/VueModal/VueModal.vue';
import VueStack from '~/components/layout/VueStack/VueStack.vue';
import VueText from '~/components/typography/VueText/VueText.vue';
import VueInline from '~/components/layout/VueInline/VueInline.vue';
import VueButton from '~/components/input-and-actions/VueButton/VueButton.vue';
import { SpacingWithDirections } from '~/components/prop-types';

interface ConfirmModalProps {
  padding?: string | SpacingWithDirections | Array<SpacingWithDirections>;
  show?: boolean;
  backdrop?: boolean;
  disablePageScroll?: boolean;
  text?: string;
  confirmText?: string;
  abortText?: string;
}

withDefaults(defineProps<ConfirmModalProps>(), {
  padding: () => ['16'],
  show: false,
  backdrop: true,
  disablePageScroll: false,
  text: 'Are you sure you want to delete this item?',
  confirmText: 'Yes',
  abortText: 'No',
});
defineEmits(['confirm', 'abort', 'close']);
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.VueConfirmModal {
  // this class is only applied if you add css properties
}
</style>
