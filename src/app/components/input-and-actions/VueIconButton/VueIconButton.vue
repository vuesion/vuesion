<template>
  <vue-popover prevent-close-on-click :class="$style.vueIconButton">
    <template #trigger>
      <vue-button
        :as="as"
        :disabled="disabled"
        :to="to"
        :href="href"
        :leading-icon="icon"
        :loading="loading"
        :look="look"
        :size="size"
        :type="type"
        :aria-label="label"
        :data-testid="dataTestid"
        :class="$style.button"
        @click="$emit('click', $event)"
      />
    </template>
    <template #content>
      <slot>
        {{ label }}
      </slot>
    </template>
  </vue-popover>
</template>

<script setup lang="ts">
import { useCssModule } from 'vue';
import VueButton from '@/components/input-and-actions/VueButton/VueButton.vue';
import VuePopover from '@/components/data-display/VuePopover/VuePopover.vue';
import type { Icon } from '@/components/utils/icon-options';
import type { ButtonStyle, ShirtSize } from '@/components/utils/prop-types';

interface VueIconButtonProps {
  label: string;
  as?: string;
  disabled?: boolean;
  to?: string;
  href?: string;
  icon?: Icon;
  loading?: boolean;
  look?: ButtonStyle;
  size?: ShirtSize;
  type?: string;
  dataTestid?: string;
}

withDefaults(defineProps<VueIconButtonProps>(), {
  as: 'button',
  disabled: false,
  to: undefined,
  href: undefined,
  icon: 'dots-horizontal',
  loading: false,
  look: 'outline',
  size: 'md',
  type: 'button',
});
defineEmits<{
  (event: 'click', e: Event): void;
}>();

// Dependencies
const $style = useCssModule();
</script>

<style lang="scss" module>
@use 'assets/design-system/index' as ds;

.vueIconButton {
  width: min-content;
  height: min-content;

  .button {
    border-radius: 50%;
    aspect-ratio: 1;
  }
}
</style>
