<template>
  <component
    :is="as"
    :class="[
      $style.vueTooltip,
      show && $style.show,
      $style[direction],
      !disabled && $slots.default && $slots.default()[0].el !== null && $style.highlight,
    ]"
    :data-tip="tip"
    @mouseenter.stop.prevent="onEnter"
    @mouseleave.stop.prevent="onLeave"
    @touchend.stop.prevent="onTouchEnd"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VerticalDirection } from '~/components/prop-types';

interface TooltipProps {
  as?: string;
  tip: string;
  direction?: VerticalDirection;
  disabled?: boolean;
}

const props = withDefaults(defineProps<TooltipProps>(), {
  as: 'span',
  direction: 'top',
  disabled: false,
});

const show = ref(false);
const onEnter = () => {
  if (props.disabled === false) {
    show.value = true;
  }
};
const onLeave = () => {
  show.value = false;
};
const onTouchEnd = () => {
  if (props.disabled === false) {
    show.value = !show.value;
  }
};
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.vueTooltip {
  display: inline-flex;
  align-items: flex-end;
  position: relative;
  border-bottom: 1px dashed transparent;

  &:before {
    display: block;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    transition-property: opacity;
    transition-duration: $tooltip-transition-duration;
    transition-timing-function: ease-in-out;
    background: $tooltip-bg;
    color: $tooltip-color;
    font-size: $tooltip-font-size;
    line-height: $tooltip-line-height;
    font-weight: $tooltip-font-weight;
    content: attr(data-tip);
    padding: $tooltip-padding;

    white-space: nowrap;
    box-shadow: $tooltip-elevation;
    border-radius: $tooltip-border-radius;
    left: 50%;
    transform: translateX(-50%);
  }

  &.top {
    &:before {
      bottom: calc(100% + #{$space-4});
    }
  }

  &.bottom {
    &:before {
      top: calc(100% + #{$space-4});
    }
  }

  &.show {
    &:before {
      opacity: 1;
    }
  }

  &.highlight {
    border-bottom: 1px dashed $tooltip-highlight-color;
  }
}
</style>
