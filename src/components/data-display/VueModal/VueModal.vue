<template>
  <vue-box
    v-if="show"
    ref="modalRef"
    data-testid="modal"
    :padding="padding"
    :class="[$style.vueModal, show && $style.show]"
    :aria-modal="show"
  >
    <vue-icon-times
      tabindex="0"
      :class="$style.closeButton"
      @click="onClose"
      @keypress.space.enter.stop.prevent="onClose"
    />
    <slot />
  </vue-box>
</template>

<script setup lang="ts">
import { computed, watch, WatchStopHandle } from 'vue';
import { onClickOutside, onKeyDown } from '@vueuse/core';
import { useBackdrop } from '~/composables/use-backdrop';
import { getDomRef } from '~/composables/get-dom-ref';
import VueIconTimes from '~/components/icons/VueIconTimes.vue';
import VueBox from '~/components/layout/VueBox/VueBox.vue';
import { SpacingWithDirections } from '~/components/prop-types';

interface ModalProps {
  padding?: string | SpacingWithDirections | Array<SpacingWithDirections>;
  show?: boolean;
  backdrop?: boolean;
  disablePageScroll?: boolean;
  closeOnEscape?: boolean;
}

const props = withDefaults(defineProps<ModalProps>(), {
  padding: () => ['48 16 16 16'],
  show: false,
  backdrop: true,
  disablePageScroll: false,
  closeOnEscape: true,
});
const emit = defineEmits(['close']);
const modalRef = getDomRef<HTMLElement>(null);
const show = computed(() => props.show);
const backdrop = computed(() => props.backdrop);
const disablePageScroll = computed(() => !props.disablePageScroll);
const onClose = () => emit('close');
let backDropWatcher: WatchStopHandle;

onKeyDown('Escape', () => {
  if (props.show === true && props.closeOnEscape === true) {
    onClose();
  }
});
onClickOutside(modalRef, () => onClose());

watch(
  backdrop,
  () => {
    if (backdrop.value === true) {
      backDropWatcher = useBackdrop(show, { scrollable: disablePageScroll });
    } else if (backDropWatcher) {
      backDropWatcher();
    }
  },
  { immediate: true },
);
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.vueModal {
  position: fixed;
  top: 50%;
  left: $space-8;
  right: $space-8;
  background: $modal-bg;
  z-index: $modal-index;
  box-shadow: $modal-shadow;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  opacity: 0;
  transition: $modal-transition;
  border-radius: $modal-border-radius;
  border: $modal-border;
  transform: translateY(-50%);
  height: auto;

  &.show {
    opacity: 1;
  }

  .closeButton {
    outline: none;
    position: absolute;
    top: $modal-close-button-gap;
    right: $modal-close-button-gap;
    width: $modal-close-button-size;
    height: $modal-close-button-size;
    cursor: pointer;
    border-radius: $modal-close-button-border-radius;
    color: $modal-close-button-color;

    &:focus {
      box-shadow: $modal-close-button-outline;
    }

    &:hover {
      color: $modal-close-button-color-hover;
    }
  }

  @include mediaMin(tabletPortrait) {
    max-width: $modal-max-width;
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
