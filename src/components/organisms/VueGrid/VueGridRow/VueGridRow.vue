<template>
  <div
    :class="[$style.vueGridRow, $style[gridHorizontalSpace]]"
    :style="{ alignItems, justifyContent, textAlign: rowTextAlign, flexWrap }"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import defaultTo from 'lodash/defaultTo';
import { computed, defineComponent, inject, provide } from '@vue/composition-api';
import { spacingValidator } from '../../../prop-validators';

export default defineComponent({
  name: 'VueGridRow',
  props: {
    verticalSpace: { type: String, validator: spacingValidator, default: null },
    horizontalSpace: { type: String, validator: spacingValidator, default: null },
    alignItems: { type: String, default: 'center' },
    textAlign: { type: String, default: null },
    justifyContent: { type: String, default: null },
    flexWrap: { type: String, default: 'wrap' },
  },
  setup(props) {
    const gridVerticalSpace = inject<string>('gridVerticalSpace');
    const gridHorizontalSpace = inject<string>('gridHorizontalSpace');
    const gridTextAlign = inject<string>('gridTextAlign');

    const rowVerticalSpace = computed(() => defaultTo(props.verticalSpace, gridVerticalSpace));
    const rowHorizontalSpace = computed(() => defaultTo(props.horizontalSpace, gridHorizontalSpace));
    const rowTextAlign = computed(() => defaultTo(props.textAlign, gridTextAlign));

    provide('rowVerticalSpace', rowVerticalSpace.value);
    provide('rowHorizontalSpace', rowHorizontalSpace.value);
    provide('rowTextAlign', rowTextAlign.value);
    provide('rowJustifyContent', props.justifyContent);

    return {
      gridHorizontalSpace,
      rowTextAlign,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.vueGridRow {
  display: flex;

  @each $name, $space in $spacings {
    &.#{$name} {
      margin-left: -$space;
    }
  }
}
</style>
