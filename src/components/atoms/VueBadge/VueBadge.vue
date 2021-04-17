<template>
  <span :class="[$style.vueBadge, outlined && $style.outlined, $style[color]]">
    <slot />
  </span>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { colorVariationValidator } from '@/components/prop-validators';

export default defineComponent({
  name: 'VueBadge',
  props: {
    color: { type: String, validator: colorVariationValidator, default: 'neutral' },
    outlined: { type: Boolean, default: false },
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.vueBadge {
  display: inline-block;
  padding: $badge-padding;
  font-size: $badge-font-size;
  line-height: $badge-line-height;
  font-weight: $badge-font-weight;
  letter-spacing: $badge-letter-spacing;
  border-radius: $badge-border-radius;
  white-space: nowrap;

  @each $variation, $values in $badge-variations {
    &.#{$variation} {
      color: map-get($values, 'color');
      background: map-get($values, 'bg');
    }

    &.outlined {
      &.#{$variation} {
        border-color: map-get($values, 'bg');
        color: map-get($values, 'bg');
      }
    }
  }

  &.outlined {
    border: $badge-outlined-border-width solid transparent;
    background: transparent;
  }
}
</style>
