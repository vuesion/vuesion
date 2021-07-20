<template>
  <component
    :is="as"
    :class="[
      $style.vueTooltip,
      show && $style.show,
      $style[direction],
      !disabled && $slots.default && $slots.default[0].tag === undefined && $style.highlight,
    ]"
    :data-tip="tip"
    @mouseenter.stop.prevent="onEnter"
    @mouseleave.stop.prevent="onLeave"
    @touchend.stop.prevent="onTouchEnd"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { directionValidator } from '@/components/prop-validators';

export default defineComponent({
  name: 'VueTooltip',
  props: {
    as: { type: String, default: 'span' },
    tip: { type: String, required: true },
    direction: { type: String, validator: directionValidator, default: 'top' },
    disabled: { type: Boolean, default: false },
  },
  setup(props) {
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

    return {
      show,
      onEnter,
      onLeave,
      onTouchEnd,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/_design-system';

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
