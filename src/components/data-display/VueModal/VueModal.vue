<template>
  <vue-box
    v-if="show"
    ref="modalRef"
    as="dialog"
    data-testid="modal"
    :padding="padding"
    :class="[$style.vueModal, show && $style.show, backdrop && $style.backdrop]"
    @click="onDialogClick"
  >
    <vue-icon-times
      v-if="hideCloseButton === false"
      tabindex="0"
      :class="$style.closeButton"
      @click="onClose"
      @keypress.space.enter.stop.prevent="onClose"
    />
    <form method="dialog">
      <slot />
    </form>
  </vue-box>
</template>

<script setup lang="ts">
import { computed, nextTick, useCssModule, watch } from 'vue';
import { getDomRef } from '~/composables/get-dom-ref';
import VueIconTimes from '~/components/icons/VueIconTimes.vue';
import VueBox from '~/components/layout/VueBox/VueBox.vue';
import { SpacingWithDirections } from '~/components/prop-types';

// Interface
interface ModalProps {
  padding?: string | SpacingWithDirections | Array<SpacingWithDirections>;
  show?: boolean;
  backdrop?: boolean;
  disablePageScroll?: boolean;
  closeOnOutsideClick?: boolean;
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
  hideCloseButton: false,
});
const emit = defineEmits<ModalEmits>();

// Deps
const $style = useCssModule();

// Data
const modalRef = getDomRef<any>(null);
const show = computed(() => props.show);

// Event Handler
const onClose = () => {
  document.body.style.overflow = 'initial';
  emit('close');
};
const onDialogClick = (event: Event) => {
  if (event.target === modalRef.value?.$el && props.closeOnOutsideClick) {
    onClose();
  }
};

// Watchers
watch(show, async () => {
  if (show.value === true) {
    await nextTick();

    modalRef.value?.$el?.showModal();

    if (props.disablePageScroll) {
      document.body.style.overflow = 'hidden';
    }
  } else {
    modalRef.value?.$el?.close();
  }
});
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.vueModal {
  position: fixed;
  top: 50%;
  left: $space-8;
  right: $space-8;
  z-index: $modal-index;
  background: $modal-bg;
  box-shadow: $modal-shadow;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  opacity: 0;
  transition: $modal-transition;
  border-radius: $modal-border-radius;
  border: $modal-border;
  transform: translateY(-50%);
  height: auto;

  &::backdrop {
    opacity: 0;
  }

  &.backdrop {
    &::backdrop {
      background: rgba(0, 0, 0, 0.25);
      opacity: 1;
    }
  }

  &.show {
    z-index: $modal-index;
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
