<template>
  <vue-text
    :class="[$style.vueBadge, $style[status], icon && $style.hasIcon]"
    look="support"
    weight="semi-bold"
    @click="$emit('click')"
  >
    <vue-inline as="span" space="4" align-y="center" no-wrap>
      <slot />
      <component :is="`vue-icon-${icon}`" v-if="icon" />
    </vue-inline>
  </vue-text>
</template>

<script setup lang="ts">
import VueText from '~/components/typography/VueText/VueText.vue';
import { BadgeStatus } from '~/components/prop-types';
import VueInline from '~/components/layout/VueInline/VueInline.vue';

interface BadgeProps {
  status?: BadgeStatus;
  icon?: string;
}

withDefaults(defineProps<BadgeProps>(), {
  status: 'info',
  icon: undefined,
});

defineEmits(['click']);
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
      border: map-get($values, 'border');
    }
  }

  &.hasIcon {
    padding: $badge-with-icon-padding;
    cursor: pointer;
  }

  &:focus {
    outline: none !important;
    box-shadow: var(--brand-focused);
  }
}
</style>
