<template>
  <div
    :class="[
      $style.gridColumn,
      columnSpace && $style[columnSpace],
      columnWithVerticalSpace && $style.withVerticalSpace,
    ]"
    :style="{ flexBasis: width && `${width}%`, textAlign: columnTextAlign }"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from '@vue/composition-api';
import { spacingValidator } from '@components/utils';

export default defineComponent({
  name: 'VueGridColumn',
  props: {
    space: { type: String, validator: spacingValidator, default: null },
    withVerticalSpace: { type: Boolean, default: null },
    width: { type: Number, default: null },
    textAlign: { type: String, default: null },
  },
  setup(props) {
    const rowSpace = inject<string>('rowSpace');
    const rowWithVerticalSpace = inject<boolean>('rowWithVerticalSpace');
    const rowTextAlign = inject<string>('rowTextAlign');

    const columnSpace = computed(() => props.space || rowSpace);
    const columnWithVerticalSpace = computed(() => props.withVerticalSpace || rowWithVerticalSpace);
    const columnTextAlign = computed(() => props.textAlign || rowTextAlign);

    return {
      columnSpace,
      columnWithVerticalSpace,
      columnTextAlign,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.gridColumn {
  flex-basis: 100%;
  padding: 0;

  @include mediaMin(tabletPortrait) {
    flex: 1;
  }

  &.sm {
    padding-left: $gutter-sm;
  }

  &.md {
    padding-left: $gutter-md;
  }

  &.lg {
    padding-left: $gutter-lg;
  }

  &.withVerticalSpace {
    &.sm {
      padding-top: $gutter-sm;
    }

    &.md {
      padding-top: $gutter-md;
    }

    &.lg {
      padding-top: $gutter-lg;
    }
  }
}
</style>
