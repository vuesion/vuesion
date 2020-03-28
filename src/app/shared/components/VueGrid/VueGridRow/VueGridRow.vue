<template>
  <div
    :class="[$style.vueGridRow, rowSpace && $style[rowSpace]]"
    :style="{ alignItems: alignItems, textAlign: rowTextAlign }"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, provide } from '@vue/composition-api';
import { spacingValidator } from '@components/utils';

export default defineComponent({
  name: 'VueGridRow',
  props: {
    space: { type: String, validator: spacingValidator, default: null },
    alignItems: { type: String, default: 'center' },
    withVerticalSpace: { type: Boolean, default: null },
    textAlign: { type: String, default: null },
  },
  setup(props) {
    const gridSpace = inject<string>('gridSpace');
    const gridWithVerticalSpace = inject<boolean>('gridWithVerticalSpace');
    const gridTextAlign = inject<string>('gridTextAlign');

    const rowSpace = computed(() => props.space || gridSpace);
    const rowWithVerticalSpace = computed(() => props.withVerticalSpace || gridWithVerticalSpace);
    const rowTextAlign = computed(() => props.textAlign || gridTextAlign);

    provide('rowSpace', rowSpace.value);
    provide('rowWithVerticalSpace', rowWithVerticalSpace.value);
    provide('rowTextAlign', rowTextAlign.value);

    return {
      rowSpace,
      rowWithVerticalSpace,
      rowTextAlign,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.vueGridRow {
  display: flex;
  flex-wrap: wrap;

  &.sm {
    margin-left: -$gutter-sm;
  }

  &.md {
    margin-left: -$gutter-md;
  }

  &.lg {
    margin-left: -$gutter-lg;
  }
}
</style>
