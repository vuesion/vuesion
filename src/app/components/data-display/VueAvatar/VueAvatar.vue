<template>
  <div
    :title="name"
    :class="[$style.vueAvatar, $style[size], src && $style.hasSource, !src && icon && $style.hasIcon]"
    :style="{ backgroundImage: src ? `url(${src})` : undefined }"
  >
    <vue-text
      v-if="!src && !icon"
      color="text-high"
      :look="size === 'sm' ? 'label' : size === 'md' ? 'description' : 'h4'"
      :weight="size === 'lg' ? 'black' : 'semi-bold'"
      uppercase
    >
      {{ initials }}
    </vue-text>

    <component :is="`vue-icon-${icon}`" v-if="!src && icon" />
  </div>
</template>

<script setup lang="ts">
import { computed, useCssModule } from 'vue';
import VueText from '~/app/components/typography/VueText/VueText.vue';
import type { ShirtSize } from '~/app/components/prop-types';
import type { Icon } from '~/app/components/icon-options';

// Interface
interface AvatarProps {
  name: string;
  src?: string | null;
  icon?: Icon;
  size?: ShirtSize;
}
const props = withDefaults(defineProps<AvatarProps>(), {
  src: undefined,
  icon: undefined,
  size: 'sm',
});

// Deps
const $style = useCssModule();

// Data
const initials = computed(() => {
  return props.name
    .split(/[, -]/)
    .map((w) => w.substring(0, 1))
    .join('')
    .substring(0, 3);
});
</script>

<style lang="scss" module>
@import 'assets/_design-system.scss';

.vueAvatar {
  display: flex;
  justify-content: center;
  align-items: center;
  background: $avatar-background;
  border-radius: $avatar-border-radius;
  border: $avatar-border;

  &.sm {
    height: $avatar-sm-size;
    width: $avatar-sm-size;
  }

  &.md {
    height: $avatar-md-size;
    width: $avatar-md-size;
  }

  &.lg {
    height: $avatar-lg-size;
    width: $avatar-lg-size;
  }

  &.hasSource {
    border: $avatar-border;
    background: transparent;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
    border: none;
  }

  &.hasIcon {
    border: $avatar-border;
    background: var(--surface-default-medium);

    &.sm i {
      height: $space-16;
      width: $space-16;
    }

    &.md i {
      height: $space-32;
      width: $space-32;
    }

    &.lg i {
      height: $space-48;
      width: $space-48;
    }
  }
}
</style>
