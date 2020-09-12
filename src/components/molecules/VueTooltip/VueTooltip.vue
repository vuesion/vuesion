<template>
  <div
    :class="[
      $style.vueTooltip,
      show && $style.show,
      !disabled && $slots.default && $slots.default[0].tag === undefined && $style.highlight,
    ]"
    :data-tip="tip"
    @mouseenter="onEnter"
    @mouseleave="onLeave"
    @touchend="onTouchEnd"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'VueTooltip',
  props: {
    disabled: { type: Boolean, default: false },
    tip: { type: String, required: true },
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
@import '~@/assets/design-system';

.vueTooltip {
  display: inline-block;
  position: relative;
  border-bottom: 1px dashed transparent;
  border-radius: $tooltip-border-radius;

  &:before,
  &:after {
    display: block;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    transform: translate3d(0, 8px, 0);
    transition-property: opacity, transform;
    transition-duration: var(--brand-transition-duration);
    transition-timing-function: ease-in-out;
  }

  &:before {
    background: $tooltip-bg;
    color: $tooltip-color;
    content: attr(data-tip);
    padding: $tooltip-padding;
    top: -$space-32;
    white-space: nowrap;
    box-shadow: $tooltip-shadow;
    border-radius: $tooltip-border-radius;
  }

  &:after {
    border-right: $space-8 solid transparent;
    border-top: $space-8 solid $tooltip-bg;
    border-left: $space-8 solid transparent;
    content: '';
    height: 0;
    top: -$space-8;
    left: $space-8;
    width: 0;
  }
}

.show {
  &:before,
  &:after {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.highlight {
  border-bottom: 1px dashed $tooltip-highlight-color;
}
</style>
