<template>
  <vue-text
    :class="[$style.vueBadge, $style[status], icon && $style.hasIcon]"
    look="support-md"
    weight="semi-bold"
    @click="$emit('click', $event)"
  >
    <vue-inline as="span" space="4" align-y="center" no-wrap>
      <slot />
      <component :is="`vue-icon-${icon}`" v-if="icon" />
    </vue-inline>
  </vue-text>
</template>

<script setup lang="ts">
import { useCssModule } from 'vue';
import type { BadgeStatus } from '@/components/utils/prop-types';
import VueText from '@/components/design-system/typography/VueText/VueText.vue';
import VueInline from '@/components/design-system/layout/VueInline/VueInline.vue';

// Interface
interface BadgeProps {
  status?: BadgeStatus;
  icon?: string;
}
interface BadgeEmits {
  (event: 'click', e: MouseEvent): void;
}
withDefaults(defineProps<BadgeProps>(), {
  status: 'info',
  icon: undefined,
});
defineEmits<BadgeEmits>();

// Deps
const $style = useCssModule();
</script>

<style lang="scss" module>
@use 'assets/design-system/index' as ds;
@use 'sass:map';

.vueBadge {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: ds.$badge-padding;
  border-radius: ds.$badge-border-radius;
  white-space: nowrap;

  @each $variation, $values in ds.$badge-variations {
    &.#{$variation} {
      color: map.get($values, 'color');
      background: map.get($values, 'bg');
      border: map.get($values, 'border');

      i {
        color: map.get($values, 'color');
      }
    }
  }

  i {
    width: ds.$space-12;
    height: ds.$space-12;

    path {
      stroke-width: 2;
    }
  }

  &.hasIcon {
    padding: ds.$badge-with-icon-padding;
    cursor: pointer;
  }

  &:focus {
    outline: none !important;
    box-shadow: var(--focused);
  }
}
</style>
