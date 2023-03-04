<template>
  <vue-text :class="[$style.vueBadge, $style[status]]" look="support" weight="semi-bold">
    <slot />
  </vue-text>
</template>

<script setup lang="ts">
import VueText from '~/components/typography/VueText/VueText.vue';
import { BadgeStatus } from '~/components/prop-types';

interface BadgeProps {
  status?: BadgeStatus;
}

withDefaults(defineProps<BadgeProps>(), {
  status: 'info',
});
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.vueBadge {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: $badge-padding;
  border-radius: $badge-border-radius;
  white-space: nowrap;

  @each $variation, $values in $badge-variations {
    &.#{$variation} {
      color: map-get($values, 'color');
      background: map-get($values, 'bg');
    }
  }
}
</style>
