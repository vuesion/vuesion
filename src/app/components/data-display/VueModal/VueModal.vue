<template>
  <vue-box
    v-if="show"
    ref="modalRef"
    data-testid="modal"
    :padding="padding"
    :class="[$style.vueModal, show && $style.show, backdrop && $style.backdrop]"
    :aria-modal="show"
  >
    <vue-icon-times
      v-if="hideCloseButton === false"
      tabindex="0"
      :class="$style.closeButton"
      @click="onClose"
      @keydown.space.enter.stop.prevent="onClose"
    />
    <slot />
  </vue-box>
</template>

<script setup lang="ts">
import type { WatchStopHandle } from 'vue';
import { computed, ref, useCssModule, watch } from 'vue';
import { onClickOutside, onKeyDown } from '@vueuse/core';
import { useBackdrop } from '@/composables/components/use-backdrop';
import { getDomRef } from '@/composables/components/get-dom-ref';
import VueIconTimes from '@/components/icons/VueIconTimes.vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';
import type { SpacingWithDirections } from '@/components/utils/prop-types';

// Interface
interface ModalProps {
  padding?: SpacingWithDirections | Array<SpacingWithDirections>;
  show?: boolean;
  backdrop?: boolean;
  disablePageScroll?: boolean;
  closeOnOutsideClick?: boolean;
  closeOnEscape?: boolean;
  hideCloseButton?: boolean;
}
interface ModalEmits {
  (e: 'close'): void;
}
const props = withDefaults(defineProps<ModalProps>(), {
  padding: () => ['48 16 16 16'],
  show: false,
  backdrop: true,
  disablePageScroll: false,
  closeOnOutsideClick: true,
  closeOnEscape: true,
  hideCloseButton: false,
});
const emit = defineEmits<ModalEmits>();

// Deps
const $style = useCssModule();

// Methods
const onClose = () => emit('close');

// Data
const modalRef = getDomRef<any>(null);
const show = computed(() => props.show);
let backDropWatcher: WatchStopHandle;

// Event Handler
onKeyDown('Escape', () => {
  if (props.show === true && props.closeOnEscape === true) {
    onClose();
  }
});
onClickOutside(modalRef, () => onClose());

// Watchers
watch(
  () => props.backdrop,
  () => {
    if (props.backdrop === true) {
      backDropWatcher = useBackdrop(show, { scrollable: ref(props.disablePageScroll) });
    } else if (backDropWatcher) {
      backDropWatcher();
    }
  },
  { immediate: true },
);
</script>

<style lang="scss" module>
@use 'assets/design-system/index' as ds;

.vueModal {
  position: fixed;
  top: 50%;
  left: ds.$space-8;
  right: ds.$space-8;
  z-index: ds.$modal-index;
  background: ds.$modal-bg;
  box-shadow: ds.$modal-shadow;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  opacity: 0;
  transition: ds.$modal-transition;
  border-radius: ds.$modal-border-radius;
  border: ds.$modal-border;
  transform: translateY(-50%);
  height: auto;

  &::backdrop {
    opacity: 0;
  }

  &.backdrop {
    &::backdrop {
      background: rgb(0 0 0 / 25%);
      opacity: 1;
    }
  }

  &.show {
    z-index: ds.$modal-index;
    opacity: 1;
  }

  .closeButton {
    outline: none;
    position: absolute;
    top: ds.$modal-close-button-gap;
    right: ds.$modal-close-button-gap;
    width: ds.$modal-close-button-size;
    height: ds.$modal-close-button-size;
    cursor: pointer;
    border-radius: ds.$modal-close-button-border-radius;
    color: ds.$modal-close-button-color;

    &:focus {
      box-shadow: ds.$modal-close-button-outline;
    }

    &:hover {
      color: ds.$modal-close-button-color-hover;
    }
  }

  @include ds.media-min(tablet-portrait) {
    max-width: ds.$modal-max-width;
    max-height: 100%;
    position: fixed;
    top: 50%;
    left: 50%;
    right: unset;
    bottom: unset;
    transform: translate(-50%, -50%);
  }
}
</style>
