<template>
  <div
    :class="[$style.vueGrid, $style[`v${verticalSpace}`], $style[`h${horizontalSpace}`], fluid && $style.fluid]"
    :style="{ textAlign }"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from '@vue/composition-api';
import { spacingValidator } from '../../utils';

export default defineComponent({
  name: 'VueGrid',
  props: {
    verticalSpace: { type: String, validator: spacingValidator, default: 'md' },
    horizontalSpace: { type: String, validator: spacingValidator, default: 'md' },
    textAlign: { type: String, default: 'left' },
    fluid: { type: Boolean, default: false },
  },
  setup(props) {
    provide('gridVerticalSpace', props.verticalSpace);
    provide('gridHorizontalSpace', props.horizontalSpace);
    provide('gridTextAlign', props.textAlign);
  },
});
</script>

<style lang="scss" module>
@import '~@/assets/design-system';

.vueGrid {
  width: 100%;
  max-width: 425px;
  margin: 0 auto;
  position: relative;

  @include mediaMin(tabletPortrait) {
    max-width: $screen-tablet-portrait;
  }

  @include mediaMin(tabletLandscape) {
    max-width: $screen-tablet-landscape;
  }

  @include mediaMin(smallDesktop) {
    max-width: $screen-small-desktop;
  }

  @include mediaMin(largeDesktop) {
    max-width: $screen-large-desktop;
  }

  &.hsm {
    padding-left: $gutter-sm;
    padding-right: $gutter-sm;
  }

  &.hmd {
    padding-left: $gutter-md;
    padding-right: $gutter-md;
  }

  &.hlg {
    padding-left: $gutter-lg;
    padding-right: $gutter-lg;
  }

  &.vsm {
    padding-bottom: $gutter-sm;
  }

  &.vmd {
    padding-bottom: $gutter-md;
  }

  &.vlg {
    padding-bottom: $gutter-lg;
  }

  &.fluid {
    width: 100%;
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
