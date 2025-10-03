<template>
  <div :class="$style.vuePopover">
    <div
      ref="triggerRef"
      role="button"
      aria-haspopup="true"
      :aria-expanded="isVisible"
      :aria-label="$t('VuePopover.trigger.label' /* Show additional information */)"
      :class="$style.trigger"
      @click="togglePopover"
      @mouseover="showPopover"
      @mouseleave="hidePopover"
    >
      <slot name="trigger">Trigger</slot>
    </div>

    <div
      ref="popoverRef"
      v-if="isVisible"
      :style="floatingStyles"
      :data-placement="placement"
      :class="$style.content"
      @mouseover="showPopover"
      @mouseleave="hidePopover"
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
import { ref, useCssModule, watch } from 'vue';
import { arrow, autoUpdate, flip, offset, type Placement, useFloating } from '@floating-ui/vue';
import { onClickOutside } from '@vueuse/core';
import { getDomRef } from '@/composables/components/get-dom-ref';

interface PopoverProps {
  show?: boolean;
  placement?: Placement;
  fallbackPlacements?: Array<Placement>;
  preventCloseOnClick?: boolean;
}

const props = withDefaults(defineProps<PopoverProps>(), {
  show: undefined,
  placement: 'top',
  fallbackPlacements: () => ['bottom', 'right', 'left'] as Array<Placement>,
  preventCloseOnClick: false,
});
const emit = defineEmits<{
  (event: 'close'): void;
}>();

const $style = useCssModule();
const triggerRef = getDomRef(null);
const popoverRef = getDomRef(null);
const arrowRef = getDomRef(null);
const isVisible = ref(false);

const showPopover = () => {
  if (props.show === undefined) {
    isVisible.value = true;
  }
};
const hidePopover = () => {
  if (!isVisible.value) {
    return;
  }

  if (props.show === undefined) {
    isVisible.value = false;
    emit('close');
  }
};
const togglePopover = () => {
  if (props.show === undefined && props.preventCloseOnClick === false) {
    isVisible.value = !isVisible.value;
  }
};

watch(
  () => props.show,
  (value) => {
    isVisible.value = !!value;
  },
  { immediate: true },
);

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
@use 'assets/design-system/index' as ds;

.vuePopover {
  position: relative;
  display: inline-block;

  .trigger {
    cursor: pointer;
    display: inline-block;
  }

  .content {
    background-color: ds.$popover-bg;
    border: ds.$popover-border;
    border-radius: ds.$popover-border-radius;
    box-shadow: ds.$popover-elevation;
    z-index: 1000;
    width: max-content;
    position: absolute;
    top: 0;
    left: 0;
    padding: ds.$popover-padding;

    .arrow {
      position: absolute;
      width: ds.$popover-arrow-size;
      height: ds.$popover-arrow-size;
      z-index: -1;

      &::before {
        content: '';
        transform: rotate(45deg);
        background: var(--surface-default-high);
        position: absolute;
        width: ds.$popover-arrow-size;
        height: ds.$popover-arrow-size;
        z-index: -1;
      }
    }

    $arrow-center: calc(((ds.$popover-arrow-size / 2) + 0.1rem) * -1);

    &[data-placement^='top'] .arrow {
      bottom: $arrow-center;

      &::before {
        border-right: ds.$popover-border;
        border-bottom: ds.$popover-border;
      }
    }

    &[data-placement^='bottom'] .arrow {
      top: $arrow-center;

      &::before {
        border-left: ds.$popover-border;
        border-top: ds.$popover-border;
      }
    }

    &[data-placement^='left'] .arrow {
      right: $arrow-center;

      &::before {
        border-right: ds.$popover-border;
        border-top: ds.$popover-border;
      }
    }

    &[data-placement^='right'] .arrow {
      left: $arrow-center;

      &::before {
        border-left: ds.$popover-border;
        border-bottom: ds.$popover-border;
      }
    }
  }
}
</style>
