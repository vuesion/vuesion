<template>
  <div
    :class="[$style.vueGridColumn, $style[`v${columnVerticalSpace}`], $style[`h${columnHorizontalSpace}`]]"
    :style="styles"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import defaultTo from 'lodash/defaultTo';
import { computed, defineComponent, inject } from '@vue/composition-api';
import { spacingValidator } from '../../../prop-validators';

export default defineComponent({
  name: 'VueGridColumn',
  props: {
    verticalSpace: { type: String, validator: spacingValidator, default: null },
    horizontalSpace: { type: String, validator: spacingValidator, default: null },
    width: { type: String, default: 'auto' },
    tabletPortrait: { type: String, default: null },
    tabletLandscape: { type: String, default: null },
    smallDesktop: { type: String, default: null },
    largeDesktop: { type: String, default: null },
    height: { type: String, default: null },
    textAlign: { type: String, default: null },
    canGrow: { type: Boolean, default: true },
    canShrink: { type: Boolean, default: true },
    justifyContent: { type: String, default: null },
    alignSelf: { type: String, default: null },
  },
  setup(props) {
    const rowVerticalSpace = inject<string>('rowVerticalSpace');
    const rowHorizontalSpace = inject<boolean>('rowHorizontalSpace');
    const rowTextAlign = inject<string>('rowTextAlign');
    const rowJustifyContent = inject<string>('rowJustifyContent');

    const columnVerticalSpace = computed(() => defaultTo(props.verticalSpace, rowVerticalSpace));
    const columnHorizontalSpace = computed(() => defaultTo(props.horizontalSpace, rowHorizontalSpace));
    const columnTextAlign = computed(() => defaultTo(props.textAlign, rowTextAlign));
    const columnJustifyContent = computed(() => defaultTo(props.justifyContent, rowJustifyContent));
    const display = computed(() => {
      if (columnJustifyContent.value || props.alignSelf) {
        return 'flex';
      }

      return null;
    });
    const phone = computed(() => props.width);
    const tabletPortrait = computed(() => defaultTo(props.tabletPortrait, phone.value));
    const tabletLandscape = computed(() => defaultTo(props.tabletLandscape, tabletPortrait.value));
    const smallDesktop = computed(() => defaultTo(props.smallDesktop, tabletLandscape.value));
    const largeDesktop = computed(() => defaultTo(props.largeDesktop, smallDesktop.value));

    const styles = computed(() => {
      return {
        textAlign: columnTextAlign.value,
        flexGrow: props.canGrow ? '1' : '0',
        flexShrink: props.canShrink ? '1' : '0',
        display: display.value,
        justifyContent: columnJustifyContent.value,
        alignSelf: props.alignSelf,
        '--phone': phone.value,
        '--tablet-portrait': tabletPortrait.value,
        '--tablet-landscape': tabletLandscape.value,
        '--small-desktop': smallDesktop.value,
        '--large-desktop': largeDesktop.value,
      };
    });

    return {
      columnVerticalSpace,
      columnHorizontalSpace,
      columnTextAlign,
      columnJustifyContent,
      styles,
    };
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.vueGridColumn {
  padding: 0;
  flex-basis: var(--phone);

  @include mediaMin(tabletPortrait) {
    flex-basis: var(--tablet-portrait);
  }

  @include mediaMin(tabletLandscape) {
    flex-basis: var(--tablet-landscape);
  }

  @include mediaMin(smallDesktop) {
    flex-basis: var(--small-desktop);
  }

  @include mediaMin(largeDesktop) {
    flex-basis: var(--large-desktop);
  }

  @each $name, $space in $spacings {
    &.h#{$name} {
      padding-left: $space;
    }

    &.v#{$name} {
      padding-top: $space;
    }
  }
}
</style>
