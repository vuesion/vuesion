<template>
  <vue-box
    v-if="show"
    ref="modal"
    :padding="padding"
    :class="[$style.vueModal, show ? $style.show : '']"
    :aria-modal="show"
  >
    <vue-icon-times
      tabindex="0"
      :class="$style.closeButton"
      @click.native="onClose"
      @keypress.native.space.enter.stop.prevent="onClose"
    />
    <slot />
  </vue-box>
</template>

<script lang="ts">
import { defineComponent, computed, watch, WatchStopHandle } from '@vue/composition-api';
import { useOutsideClick } from '@/composables/use-outside-click';
import { useKeydown } from '@/composables/use-keydown';
import { useBackdrop } from '@/composables/use-backdrop';
import { getDomRef } from '@/composables/get-dom-ref';
import { responsivePropValidator, spacingValidator } from '@/components/prop-validators';
import VueIconTimes from '@/components/icons/VueIconTimes.vue';
import VueBox from '@/components/layout/VueBox/VueBox.vue';

export default defineComponent({
  name: 'VueModal',
  components: { VueIconTimes, VueBox },
  props: {
    padding: {
      type: [Number, String, Array as () => Array<string | number>],
      validator: responsivePropValidator(spacingValidator),
      default: '48 16 16 16',
    },
    show: { type: Boolean, default: false },
    backdrop: { type: Boolean, default: true },
    disablePageScroll: { type: Boolean, default: false },
    closeOnEscape: { type: Boolean, default: true },
  },
  setup(props, { emit }) {
    const modal = getDomRef(null);
    const show = computed(() => props.show);
    const backdrop = computed(() => props.backdrop);
    const disablePageScroll = computed(() => !props.disablePageScroll);
    const { onKeydown } = useKeydown();
    const onClose = () => emit('close');
    let backDropWatcher: WatchStopHandle = null;

    onKeydown((event: KeyboardEvent) => {
      if (event.key === 'Escape' && props.show === true && props.closeOnEscape === true) {
        onClose();
      }
    });

    useOutsideClick(modal, () => onClose());

    watch(
      backdrop,
      () => {
        if (backdrop.value === true) {
          backDropWatcher = useBackdrop(show, { scrollable: disablePageScroll });
        } else {
          backDropWatcher();
        }
      },
      { immediate: true },
    );

    return {
      modal,
      onClose,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/_design-system';

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
