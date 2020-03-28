<template>
  <div
    v-if="show"
    ref="modal"
    :class="[$style.vueModal, fitContent ? $style.fitContent : '', show ? $style.show : '']"
    :aria-modal="show"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';
import { useOutsideClick } from '@shared/composables/use-outside-click';
import { useKeydown } from '@shared/composables/use-keydown';
import { useBackdrop } from '@shared/composables/use-backdrop';
import { getDomRef } from '@shared/composables/get-dom-ref';

export default defineComponent({
  name: 'VueModal',
  props: {
    show: { type: Boolean, default: false },
    backdrop: { type: Boolean, default: true },
    scrollable: { type: Boolean, default: false },
    closeOnEscape: { type: Boolean, default: true },
    fitContent: Boolean,
  },
  setup(props, { emit }) {
    const modal = getDomRef(null);
    const show = computed(() => props.show);
    const { onOutsideClick } = useOutsideClick(modal);
    const { onKeydown } = useKeydown();
    const onClose = () => emit('close');

    onOutsideClick(() => onClose());
    onKeydown((event) => {
      if (event.key === 'Escape' && props.show === true && props.closeOnEscape === true) {
        onClose();
      }
    });

    if (props.backdrop) {
      useBackdrop(show, { scrollable: props.scrollable });
    }

    return {
      modal,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.vueModal {
  position: fixed;
  top: 50%;
  left: $space-8;
  right: $space-8;
  background: $modal-bg;
  z-index: $modal-index;
  box-shadow: $modal-shadow;
  padding: $modal-padding;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  opacity: 0;
  transition: $modal-transition;
  border-radius: $modal-border-radius;
  transform: translateY(-50%);

  &.show {
    opacity: 1;
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

.fitContent {
  padding: 0;
  overflow-y: hidden;
  bottom: initial;
}
</style>
