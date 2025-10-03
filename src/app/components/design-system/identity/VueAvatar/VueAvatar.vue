<template>
  <div
    :title="name"
    :class="[$style.vueAvatar, $style[size], src && $style.hasSource, !src && icon && $style.hasIcon]"
    :style="{ backgroundImage: src ? `url(${src})` : undefined }"
  >
    <vue-text
      v-if="!src && !icon"
      color="high"
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
import VueText from '@/components/design-system/typography/VueText/VueText.vue';
import type { ShirtSize } from '@/components/utils/prop-types';
import type { Icon } from '@/components/utils/icon-options';

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
@use 'assets/design-system/index' as ds;

.vueAvatar {
  display: flex;
  justify-content: center;
  align-items: center;
  background: ds.$avatar-background;
  border-radius: ds.$avatar-border-radius;
  border: ds.$avatar-border;

  &.sm {
    height: ds.$avatar-sm-size;
    width: ds.$avatar-sm-size;
  }

  &.md {
    height: ds.$avatar-md-size;
    width: ds.$avatar-md-size;
  }

  &.lg {
    height: ds.$avatar-lg-size;
    width: ds.$avatar-lg-size;
  }

  &.hasSource {
    background: transparent;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    box-shadow: inset 0 2px 4px rgb(0 0 0 / 30%);
    border: none;
  }

  &.hasIcon {
    border: ds.$avatar-border;
    background: var(--surface-default-medium);

    &.sm i {
      height: ds.$space-16;
      width: ds.$space-16;
    }

    &.md i {
      height: ds.$space-32;
      width: ds.$space-32;
    }

    &.lg i {
      height: ds.$space-48;
      width: ds.$space-48;
    }
  }
}
</style>
