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
import { spacingValidator } from '../../prop-validators';

export default defineComponent({
  name: 'VueGrid',
  props: {
    verticalSpace: { type: String, validator: spacingValidator, default: '24' },
    horizontalSpace: { type: String, validator: spacingValidator, default: '24' },
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
    max-width: $screen-tablet-portrait-min;
  }

  @include mediaMin(tabletLandscape) {
    max-width: $screen-tablet-landscape-min;
  }

  @include mediaMin(smallDesktop) {
    max-width: $screen-small-desktop-min;
  }

  @include mediaMin(largeDesktop) {
    max-width: $screen-large-desktop-min;
  }

  @each $name, $space in $spacings {
    &.h#{$name} {
      padding-left: $space;
      padding-right: $space;
    }

    &.v#{$name} {
      padding-bottom: $space;
    }
  }

  &.fluid {
    width: 100%;
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
