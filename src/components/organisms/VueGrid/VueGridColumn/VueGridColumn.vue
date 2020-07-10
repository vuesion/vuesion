<template>
  <div
    :class="[
      $style.gridColumn,
      columnSpace && $style[columnSpace],
      columnWithVerticalSpace && $style.withVerticalSpace,
    ]"
    :style="styles"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from '@vue/composition-api';
import { spacingValidator } from '../../../utils';

export default defineComponent({
  name: 'VueGridColumn',
  props: {
    space: { type: String, validator: spacingValidator, default: null },
    withVerticalSpace: { type: Boolean, default: null },
    width: { type: Number, default: null },
    textAlign: { type: String, default: null },
    canGrow: { type: Boolean, default: true },
    canShrink: { type: Boolean, default: true },
  },
  setup(props) {
    const rowSpace = inject<string>('rowSpace');
    const rowWithVerticalSpace = inject<boolean>('rowWithVerticalSpace');
    const rowTextAlign = inject<string>('rowTextAlign');

    const columnSpace = computed(() => props.space || rowSpace);
    const columnWithVerticalSpace = computed(() => props.withVerticalSpace || rowWithVerticalSpace);
    const columnTextAlign = computed(() => props.textAlign || rowTextAlign);
    const styles = computed(() => {
      return {
        flexBasis: props.width && `${props.width}%`,
        justifyContent: columnTextAlign.value,
        textAlign: columnTextAlign.value,
        flexGrow: props.canGrow ? '1' : '0',
        flexShrink: props.canShrink ? '1' : '0',
      };
    });

    return {
      columnSpace,
      columnWithVerticalSpace,
      columnTextAlign,
      styles,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.gridColumn {
  padding: 0;

  @include mediaMax(tabletPortrait) {
    flex-basis: 100% !important;
  }

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
