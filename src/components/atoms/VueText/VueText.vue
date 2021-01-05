<template>
  <component :is="as" :class="[$style.vueText, $style[color]]">
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { textVariationValidator } from '@/components/prop-validators';

export default defineComponent({
  name: 'VueText',
  components: {},
  props: {
    as: { type: String, default: 'span' },
    appearance: { type: String, default: 'body' },
    color: { type: String, default: 'high-emphasis', validator: textVariationValidator },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.vueText {
  &.primary {
    color: var(--brand-primary);
  }

  &.secondary {
    color: var(--brand-secondary);
  }

  &.success {
    color: var(--brand-success);
  }

  &.warning {
    color: var(--brand-warning);
  }

  &.danger {
    color: var(--brand-danger);
  }

  &.high-emphasis {
    color: var(--brand-high-emphasis-text-color);
  }

  &.medium-emphasis {
    color: var(--brand-medium-emphasis-text-color);
  }

  &.low-emphasis {
    color: var(--brand-low-emphasis-text-color);
  }
}
</style>
