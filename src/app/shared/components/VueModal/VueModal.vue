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
import { createComponent, ref, computed } from '@vue/composition-api';
import { useOutsideClickBehaviour } from '@shared/composables/use-outside-click-behaviour';
import { useKeyDownBehavior } from '@shared/composables/use-keydown-behaviour';
import { useBackdrop } from '@shared/composables/use-backdrop';

export default createComponent({
  name: 'VueModal',
  props: {
    show: { type: Boolean, default: false },
    backdrop: { type: Boolean, default: true },
    scrollable: { type: Boolean, default: false },
    closeOnEscape: { type: Boolean, default: true },
    fitContent: Boolean,
  },
  setup(props, { emit }) {
    const modal = ref(null);
    const show = computed(() => props.show);
    const { onOutsideClick } = useOutsideClickBehaviour(modal);
    const { onKeyDown } = useKeyDownBehavior();
    const onClose = () => emit('close');

    onOutsideClick(() => onClose());
    onKeyDown((event) => {
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
  top: $space-8;
  left: $space-8;
  bottom: $space-8;
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
