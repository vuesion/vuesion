<template>
  <vue-stack
    :as="as"
    :space="space"
    :padding="padding"
    :align-x="alignX"
    :align-y="alignY"
    :tabindex="isInteractive ? 0 : undefined"
    :aria-disabled="disabled || undefined"
    :class="[$style.VueCard, $style[surfaceColor], isInteractive && $style.interactive, disabled && $style.disabled]"
    @click="isInteractive && !disabled && undefined"
  >
    <slot />
  </vue-stack>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type {
  FlexJustify,
  Spacing,
  SpacingWithDirections,
  SurfaceColor,
  FlexAlign,
} from '@/components/utils/prop-types';
import VueStack from '@/components/design-system/layout/VueStack/VueStack.vue';

// Interface
interface VueCardProps {
  as?: string;
  surfaceColor?: SurfaceColor;
  padding?: SpacingWithDirections | Array<SpacingWithDirections>;
  space?: Spacing | Array<Spacing>;
  alignX?: FlexAlign | Array<FlexAlign>;
  alignY?: FlexJustify | Array<FlexJustify>;
  interactive?: boolean;
  disabled?: boolean;
}
const props = withDefaults(defineProps<VueCardProps>(), {
  as: 'article',
  surfaceColor: 'high',
  padding: () => [16],
  space: () => [0],
});

const isInteractive = computed(() => props.interactive && !props.disabled);
</script>

<style lang="scss" module>
@use 'assets/design-system/index' as ds;

.VueCard {
  border-radius: ds.$space-16;

  &.high {
    background-color: var(--surface-default-high);
  }

  &.medium {
    background-color: var(--surface-default-medium);
  }

  &.low {
    background-color: var(--surface-default-low);
  }

  &.inverse-high {
    background-color: var(--surface-inverse-high);
  }

  &.inverse-medium {
    background-color: var(--surface-inverse-medium);
  }

  &.inverse-low {
    background-color: var(--surface-inverse-low);
  }

  &.interactive {
    cursor: pointer;

    &:hover {
      box-shadow: var(--elevation-1-box);
      filter: var(--elevation-1-filter);
    }

    &:active {
      box-shadow: none;
      filter: none;
    }

    &:focus-visible {
      outline: var(--focused);
    }
  }

  &.disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}
</style>
