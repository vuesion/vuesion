<template>
  <vue-text :class="[$style.vueBadge, $style[status]]" look="support" weight="semi-bold">
    <slot />
  </vue-text>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { badgeStatusesValidator } from '@/components/prop-validators';
import VueText from '@/components/typography/VueText/VueText.vue';

export default defineComponent({
  name: 'VueBadge',
  components: { VueText },
  props: {
    status: { type: String, validator: badgeStatusesValidator, default: 'info' },
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/_design-system';

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
