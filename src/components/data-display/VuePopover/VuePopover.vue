<template>
  <div :class="$style.VuePopover">
    <div
      :class="$style.trigger"
      @click="togglePopover"
      @mouseover="showPopover"
      @mouseleave="hidePopover"
      ref="triggerRef"
      role="button"
      aria-haspopup="true"
      :aria-expanded="isVisible"
      :aria-label="$t('VuePopover.trigger.label' /* Show additional information */)"
    >
      <slot name="trigger">Trigger</slot>
    </div>

    <div
      v-if="isVisible"
      :style="floatingStyles"
      :class="$style.content"
      :data-placement="placement"
      @mouseover="showPopover"
      @mouseleave="hidePopover"
      ref="popoverRef"
    >
      <div
        :style="{
          position: 'absolute',
          left: middlewareData.arrow?.x != null ? `${middlewareData.arrow.x}px` : '',
          top: middlewareData.arrow?.y != null ? `${middlewareData.arrow.y}px` : '',
        }"
        :class="$style.arrow"
        ref="arrowRef"
      ></div>
      <slot name="content">Content</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, useCssModule } from 'vue';
import { arrow, autoUpdate, flip, offset, type Placement, useFloating } from '@floating-ui/vue';
import { onClickOutside } from '@vueuse/core';
import { getDomRef } from '~/composables/get-dom-ref';

interface PopoverProps {
  placement?: Placement;
  fallbackPlacements?: Array<Placement>;
}

const props = withDefaults(defineProps<PopoverProps>(), {
  placement: 'top',
  fallbackPlacements: () => ['bottom', 'right', 'left'] as Array<Placement>,
});

const $style = useCssModule();
const triggerRef = getDomRef(null);
const popoverRef = getDomRef(null);
const arrowRef = getDomRef(null);
const isVisible = ref(false);

const showPopover = () => {
  isVisible.value = true;
};
const hidePopover = () => {
  isVisible.value = false;
};
const togglePopover = () => {
  isVisible.value = !isVisible.value;
};

onClickOutside(triggerRef, () => hidePopover());

// Floating UI Setup
const { floatingStyles, placement, middlewareData } = useFloating(triggerRef, popoverRef, {
  placement: props.placement,
  middleware: [
    offset(8),
    flip({ fallbackPlacements: props.fallbackPlacements }),
    arrow({ element: arrowRef, padding: 16 }),
  ],
  whileElementsMounted: autoUpdate,
});
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.VuePopover {
  position: relative;
  display: inline-block;

  .trigger {
    cursor: pointer;
    display: inline-block;
  }

  .content {
    background-color: $popover-bg;
    border: $popover-border;
    border-radius: $popover-border-radius;
    box-shadow: $popover-elevation;
    z-index: 1000;
    width: max-content;
    position: absolute;
    top: 0;
    left: 0;
    padding: $popover-padding;

    .arrow {
      position: absolute;
      width: $popover-arrow-size;
      height: $popover-arrow-size;
      z-index: -1;

      &:before {
        content: '';
        transform: rotate(45deg);
        background: var(--surface-default-high);
        position: absolute;
        width: $popover-arrow-size;
        height: $popover-arrow-size;
        z-index: -1;
      }
    }

    $arrow-center: calc((($popover-arrow-size / 2) + 0.1rem) * -1);

    &[data-placement^='top'] .arrow {
      bottom: $arrow-center;

      &:before {
        border-right: $popover-border;
        border-bottom: $popover-border;
      }
    }

    &[data-placement^='bottom'] .arrow {
      top: $arrow-center;

      &:before {
        border-left: $popover-border;
        border-top: $popover-border;
      }
    }

    &[data-placement^='left'] .arrow {
      right: $arrow-center;

      &:before {
        border-right: $popover-border;
        border-top: $popover-border;
      }
    }

    &[data-placement^='right'] .arrow {
      left: $arrow-center;

      &:before {
        border-left: $popover-border;
        border-bottom: $popover-border;
      }
    }
  }
}
</style>
