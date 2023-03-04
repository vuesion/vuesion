<template>
  <div
    :title="name"
    :class="[$style.vueAvatar, $style[size], src && $style.hasSource, !src && icon.length > 0 && $style.hasIcon]"
    :style="{ backgroundImage: src && `url(${src})` }"
  >
    <vue-text
      v-if="!src && icon.length === 0"
      color="text-inverse-high"
      :look="size === 'sm' ? 'support' : size === 'md' ? 'h6' : 'h4'"
    >
      {{ initials }}
    </vue-text>

    <component :is="`vue-icon-${icon}`" v-if="!src && icon && icon.length > 0" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import VueText from '~/components/typography/VueText/VueText.vue';
import { ShirtSize } from '~/components/prop-types';

interface AvatarProps {
  name: string;
  src: string | null;
  icon?: string;
  size?: ShirtSize;
}

const props = withDefaults(defineProps<AvatarProps>(), {
  src: undefined,
  icon: '',
  size: 'sm',
});
const initials = computed(() => {
  return props.name
    .split(/[, -]/)
    .map((w) => w.substr(0, 1))
    .join('')
    .substr(0, 3);
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
  text-transform: uppercase;

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
  }

  &.hasIcon {
    border: $avatar-border;
    background: var(--brand-surface-default-medium);

    &.sm i {
      height: $space-16;
      width: $space-16;
    }

    &.md i {
      height: $space-24;
      width: $space-24;
    }

    &.lg i {
      height: $space-40;
      width: $space-40;
    }
  }
}
</style>
